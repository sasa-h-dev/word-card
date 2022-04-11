import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { WordsService } from './words.service';
import { Response } from 'express';
import { config } from '../../libs/configs/configuration';
import { ConfigService } from '@nestjs/config';

@Controller('words')
export class WordsController {
  constructor(
    private readonly wordsService: WordsService,
    private configService: ConfigService
  ) {}

  @Get('hello')
  async getHello(@Res() res: Response) {
    console.log('config', config.postgres.url);
    res.json(await this.wordsService.getHello());
  }

  // @Get()
  // async getObjFromExcle(@Res() res: Response) {
  //   const databaseUrl = this.configService.get<string>('DATABASE_URL');
  //   res.json(await this.wordsService.getObjFromExcle());
  // }

  @Post('word-card-list')
  async getWordCardList(
    @Res() res: Response,
    @Body() body: { wordBookId: number }
  ) {
    res.json(await this.wordsService.getWordCardList(body.wordBookId));
  }

  @Post('word-book-list')
  async getWordBookList(@Res() res: Response) {
    res.json(await this.wordsService.getWordBookList());
  }
}
