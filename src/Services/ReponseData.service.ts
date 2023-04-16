export class ResponseData {
    data?: {} | [];
    statusCode?: number;
    message?: string;

    constructor(data: {} | [], statusCode: number, message: string) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;

        return this;
    }
}