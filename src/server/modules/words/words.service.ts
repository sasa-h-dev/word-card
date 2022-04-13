import * as CSV from 'csvtojson';
import * as ExcelJS from 'exceljs';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { WordCard, WordBook } from '../../libs/orm-entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(WordCard)
    private readonly wordCardRepository: Repository<WordCard>,
    @InjectRepository(WordBook)
    private readonly wordBookRepository: Repository<WordBook>
  ) {}

  getHello(): string {
    return 'Hello Words';
  }

  async getWordCardList(wordBookId: number) {
    const queryRes = await this.wordBookRepository
      .createQueryBuilder('wordBook')
      .leftJoin('wordBook.wordCardList', 'wordCard')
      .select([
        'wordBook.id',
        'wordBook.title',
        'wordCard.id',
        'wordCard.category',
        'wordCard.meaning',
        'wordCard.word',
        'wordCard.conjunction',
        'wordCard.example',
        'wordCard.similar',
        'wordCard.antonym',
        'wordCard.property',
        'wordCard.label',
        'wordCard.others',
        'wordCard.order',
      ])
      .where('wordBook.id = :wordBookId', { wordBookId })
      .orderBy('wordCard.order', 'ASC')
      .getOne();

    return queryRes?.wordCardList.map((card) => {
      return {
        ...card,
        title: queryRes.title,
        wordArr: card.word?.split(';'),
      };
    });
  }

  async getWordBookList() {
    return (await this.wordBookRepository.find()).map((item) => {
      return {
        ...item,
      };
    });
  }

  async getWordBookDetail(wordBookId: number) {
    return await this.wordBookRepository
      .createQueryBuilder('wordBook')
      .leftJoin('wordBook.wordCardList', 'wordCard')
      .select([
        'wordBook.id',
        'wordBook.title',
        'wordBook.description',
        'wordCard.id',
        'wordCard.category',
        'wordCard.meaning',
        'wordCard.word',
        'wordCard.conjunction',
        'wordCard.example',
        'wordCard.similar',
        'wordCard.antonym',
        'wordCard.property',
        'wordCard.label',
        'wordCard.others',
        'wordCard.order',
      ])
      .where('wordBook.id = :wordBookId', { wordBookId })
      .orderBy('wordCard.order', 'ASC')
      .getOne();
  }

  async getObjFromExcle() {
    try {
      const targetExcelPath = 'src/server/assets/excel/50.xlsx';

      // const res = await axios.get('../../assets/excel/50.xlsx', {
      //   responseType: 'arraybuffer',
      // });
      // const data = new Uint8Array(res.data);
      // const workbook = new ExcelJS.Workbook();
      // await workbook.xlsx.load(data);
      // const worksheet = workbook.getWorksheet('sheet1');

      // var workbook = new ExcelJS.Workbook();
      // await workbook.xlsx.readFile(targetExcelPath);

      // const sheet1 = workbook.getWorksheet('sheet1');

      // for (var i = 1; i <= 10; i++) {
      //   var str = '';
      //   for (var j = 1; j <= 10; j++) {
      //     str += sheet1.getCell(i, j).value + ', ';
      //   }
      //   console.log(str);
      // }

      const targetCsvPath = 'src/server/assets/excel/50.csv';
      const wordJson = await CSV().fromFile(targetCsvPath, {
        encoding: 'utf8',
      });

      // return wordJson;
      const res = wordJson.map((item) => {
        return {
          ...item,
          japaneseArr: item.japanese?.split(';'),
        };
      });

      // console.log('sheet', JSON.stringify(res[0], null, 2));
      return res;
    } catch (ex) {
      console.log('ex', ex);
    }
  }
}
