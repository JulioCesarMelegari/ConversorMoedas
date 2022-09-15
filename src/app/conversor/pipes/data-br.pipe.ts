import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): string {
    //se nao existe data retorna vazio
    if(!dataEn){
      return '';
    }
    //divide uma string em um array de strings de acordo com algum separador
    const dataArr = dataEn.split('-');

    if(dataArr.length !==3){
      return dataEn
    }
    //retorna os dados na ordem dd/mm/yyyy
    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
