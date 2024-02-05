import { HttpException } from '@nestjs/common';

export class DataBaseException extends HttpException {
  constructor(response: string | string[], status: number) {
    super(response, status);
  }
}
