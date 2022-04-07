import { Module } from '@nestjs/common';
import { WordsModule } from './modules/words/words.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/word-card-client/'),
      exclude: ['/api'],
    }),
    WordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
