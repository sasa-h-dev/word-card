import { Module } from '@nestjs/common';
import { WordsModule } from './modules/words/words.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './libs/configs/type-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/word-card-client/'),
      exclude: ['/api'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfig,
    }),
    WordsModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
