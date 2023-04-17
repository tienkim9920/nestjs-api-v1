export class ResponseData {
    data?: {} | [] | boolean;
    statusCode?: number;
    message?: string;

    constructor(data: {} | [] | boolean, statusCode: number, message: string) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;

        return this;
    }
}