import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from "src/dto/auth.dto";
import { AccountsEntity } from "src/entities/accounts.entity";
import { IAuthRepository } from "src/interfaces/IAuthRepository.interface";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "src/constant/constant";

@Injectable()
export class AuthRepository implements IAuthRepository {

  constructor(
    @InjectRepository(AccountsEntity)
    protected readonly repository: Repository<AccountsEntity>, private jwtService: JwtService) {}

  async signIn(auth: AuthPayloadDto): Promise<AuthPermission | boolean> {
    const { username, password } = auth;
    const userAuth = await this.repository.findOne({ where: { username }});
    if (!userAuth) return false;

    const isMatch = await bcrypt.compare(password, userAuth.password);
    if (!isMatch) return false;
    const payload = {...new AuthResponseDto(userAuth)};
    return new AuthPermission({
      id: userAuth.id,
      token: await this.jwtService.signAsync(payload),
      expiredTime: 900000
    });
  }

  async signUp(auth: AuthPayloadDto): Promise<AuthResponseDto> {
    const { username, password } = auth;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return this.repository.save({
      username,
      password: hash,
      permission: 'ROLE_ADMIN'
    });
  }
}