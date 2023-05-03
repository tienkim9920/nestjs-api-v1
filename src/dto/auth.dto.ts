export class AuthResponseDto {
  id: number;
  username: string;
  permission: string;

  constructor({ id, username, permission }) {
    this.id = id;
    this.username = username;
    this.permission = permission;
  }
}

export class AuthPayloadDto {
  username: string;
  password: string;
}

export class AuthPermission {
  id: number;
  token: string;
  expiredTime: number;

  constructor({ id, token, expiredTime }) {
    this.id = id;
    this.token = token;
    this.expiredTime = expiredTime;
  }
}