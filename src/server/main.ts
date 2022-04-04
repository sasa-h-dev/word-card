import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ['log', 'error', 'debug'],
  });

  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', '/word-card-client'));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
