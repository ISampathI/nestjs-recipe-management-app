import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('ReciSave')
    .setDescription(
      'Welcome to the ReciSave API documentation. ReciSave is a recipe management application that allows users to save, organize, and plan their favorite recipes. This API provides a set of endpoints that enable developers to interact with the ReciSave platform programmatically.'
    )
    .setVersion('1.0')
    .addTag('ReciSave')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
