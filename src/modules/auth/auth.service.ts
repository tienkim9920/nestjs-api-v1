import { Injectable, Inject } from '@nestjs/common';
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from 'src/dto/auth.dto';
import { IAuthRepository } from 'src/interfaces/IAuthRepository.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IAuthRepository')
    private readonly authRepository: IAuthRepository,
  ) {}

  async signIn(auth: AuthPayloadDto): Promise<AuthPermission | boolean> {
    const { username, password } = auth;
    if (!username || !password) return false;

    const isAuth = await this.authRepository.signIn(auth);
    if (!isAuth) return false;
    return isAuth;
  }

  async signUp(auth: AuthPayloadDto): Promise<AuthResponseDto | boolean> {
    const { username, password } = auth;
    if (!username || !password) return false;
    const userDto: AuthResponseDto = new AuthResponseDto(await this.authRepository.signUp(auth));
    return userDto;
  }

}