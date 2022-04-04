import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { WordsService } from './words.service';
import { Response } from 'express';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get('hello')
  async getHello(@Res() res: Response) {
    res.json(await this.wordsService.getHello());
  }

  @Get()
  async getObjFromExcle(@Res() res: Response) {
    res.json(await this.wordsService.getObjFromExcle());
  }
}
