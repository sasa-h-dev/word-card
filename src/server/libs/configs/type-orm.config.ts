import { config } from './configuration';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as Entities from '../orm-entities';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      schema: process.env.DATABASE_SCHEMA,
      synchronize: false,
      ssl: process.env.DATABASE_SSL && { rejectUnauthorized: false },
      logging: true,
      entities: Object.values(Entities),
    };
  }
}
