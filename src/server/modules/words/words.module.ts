import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordsController } from './words.controller';
import { WordCard, WordBook } from '../../libs/orm-entities';

@Module({
  imports: [TypeOrmModule.forFeature([WordCard, WordBook])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
