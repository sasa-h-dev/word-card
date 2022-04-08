import * as CSV from 'csvtojson';
import * as ExcelJS from 'exceljs';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { WordCard } from '../../libs/orm-entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(WordCard)
    private readonly wordCardRepository: Repository<WordCard>
  ) {}

  getHello(): string {
    return 'Hello Words';
  }

  async getWordCardList() {
    return (await this.wordCardRepository.find()).map((item) => {
      return {
        ...item,
        foreignArr: item.foreign?.split(';'),
      };
    });
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
