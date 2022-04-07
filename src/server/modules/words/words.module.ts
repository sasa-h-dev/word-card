import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordCard } from '../../libs/orm-entities';

@Module({
  imports: [TypeOrmModule.forFeature([WordCard])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
