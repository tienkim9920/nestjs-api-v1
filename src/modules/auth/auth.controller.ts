import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { AuthService } from './auth.service';
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from 'src/dto/auth.dto';
import { Public } from 'src/constant/decorator';

@Controller('auth')
export class AuthController {

  constructor(protected readonly authService: AuthService) {}

  @Post('/signin')
  @Public()
  async signIn(@Body() auth: AuthPayloadDto, @Res() res: Response):
    Promise<ResponseType<AuthPermission | boolean>> {
    // try {
      const isAuth = await this.authService.signIn(auth);
      if (!isAuth) {
        return res.json(new ResponseData(isAuth, ServerStatus.ERROR, ServerMessage.ERROR));
      }
      return res.json(new ResponseData(isAuth, ServerStatus.OK, ServerMessage.OK));
    // } catch (error) {
    //   return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    // }
  }

  @Post('/signup')
  @Public()
  async signUp(@Body() auth: AuthPayloadDto, @Res() res: Response):
    Promise<ResponseType<AuthResponseDto | boolean>> {
    try {
      const isAuth = await this.authService.signUp(auth);
      if (!isAuth) {
        return res.json(new ResponseData(isAuth, ServerStatus.ERROR, ServerMessage.ERROR));
      }
      return res.json(new ResponseData(isAuth, ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }
}