import { Pipe } from '@angular/core';
import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('formatar a data 2022-09-15 para 15/09/2022', ()=>{
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-09-15')).toEqual('15/09/2022');
  });
});
