import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  //Documentación con swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Les Samarretes API')
    .setDescription(
      'Documentación completa de los endpoints de nuestra aplicación',
    )
    .setVersion('1.0')
    .addTag('Ecommerce API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.APP_PORT);
  logger.log(`App running on port ${process.env.APP_PORT}`);
}
bootstrap();
