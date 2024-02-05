import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  //Documentación con swagger
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Les Samarretes API')
  .setDescription('Documentación completa de los endpoints de nuestra aplicación')
  .setVersion('1.0')
  .addTag('Ecommerce API')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);

  await app.listen(4000);
}
bootstrap();
