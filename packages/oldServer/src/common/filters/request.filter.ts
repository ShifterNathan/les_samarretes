import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DataBaseException } from './database.exception';
import * as fs from 'fs';

@Catch(DataBaseException, BadRequestException, NotFoundException, ForbiddenException, InternalServerErrorException)
export class RequestFilter implements ExceptionFilter {
  private date = new Date();

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const exceptionResponse: any = exception.getResponse();
    const message = exceptionResponse.message ? exceptionResponse.message : exception.message;
    const cause = exception.cause;
    const request = ctx.getRequest();
    const status = exception.getStatus();

    const errorLog = `
    {
      "info": "${this.date.toLocaleString().replaceAll(' ', ' ')} - ${message}",
      "client": "${request.socket.remoteAddress}",
      "method": "${request.method}",
      "host": "${request.hostname}",
      "path": "${request.url}",
      "url": "${request.originalUrl}",
      "body": ${JSON.stringify(request.body)},
      "query": ${JSON.stringify(request.query)},
      "params": ${JSON.stringify(request.params)},
      "headers": ${JSON.stringify(request.headers)},
      "message": "${message}",
      "cause": "${cause}",
      "statusCode": "${status}",
      "timestamp": "${this.date.toISOString()}"
    },`;
    
    const logFile = `logs/${this.date.getFullYear()}/${this.date.getMonth()+1}`

    if (!fs.existsSync(logFile)) fs.mkdirSync(logFile, { recursive: true });

    fs.appendFile(`${logFile}/${this.date.getDate()}-error.log`, errorLog, (err) => {
      if (err) throw err;
    });

    response.status(status).json({
      message,
      cause,
      statusCode: status,
      timestamp: this.date.toISOString(),
      path: request.url,
    });
  }
}
