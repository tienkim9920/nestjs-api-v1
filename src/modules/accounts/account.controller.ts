import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { ServerMessage, ServerStatus } from 'src/constant/enum';

@Controller('accounts')
export class AccountController {

}