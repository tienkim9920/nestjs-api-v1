import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from "src/dto/auth.dto";
import { AccountsEntity } from "src/entities/accounts.entity";
import { IAuthRepository } from "src/interfaces/IAuthRepository.interface";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthRepository implements IAuthRepository {

  constructor(
    @InjectRepository(AccountsEntity)
    protected readonly repository: Repository<AccountsEntity>) {}

  async signIn(auth: AuthPayloadDto): Promise<AuthPermission | boolean> {
    const { username, password } = auth;
    const userAuth = await this.repository.findOne({ where: { username }});
    if (!userAuth) return false;

    const isMatch = await bcrypt.compare(password, userAuth.password);
    if (!isMatch) return false;
    return new AuthPermission({
      id: userAuth.id,
      token: "123",
      expiredTime: 123
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