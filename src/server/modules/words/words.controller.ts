import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { WordsService } from './words.service';
import { Response } from 'express';
import { config } from '../../libs/configs/configuration';
import { ConfigService } from '@nestjs/config';
import { IWordBook } from '../../../interface/word-book.interface';
import { IWordCard } from '../../../interface/word-card.interface';

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

  @Post('word-book')
  async getWordBookDetail(
    @Res() res: Response,
    @Body() body: { wordBookId: number }
  ) {
    res.json(await this.wordsService.getWordBookDetail(body.wordBookId));
  }

  @Post('save-word-book')
  async saveWordBookDetail(@Res() res: Response, @Body() body: IWordBook) {
    console.log('body', body);
    res.json(await this.wordsService.saveWordBookDetail(body));
  }

  @Post('save-word-cards')
  async saveWordCards(@Res() res: Response, @Body() body: IWordCard[]) {
    console.log('body', body);
    res.json(await this.wordsService.saveWordCards(body));
  }

  // @Get()
  // async getObjFromExcle(@Res() res: Response) {
  //   const databaseUrl = this.configService.get<string>('DATABASE_URL');
  //   res.json(await this.wordsService.getObjFromExcle());
  // }
}
