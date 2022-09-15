import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
/*
RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

=> https://rxjs.dev/guide/overview
*/

import { Conversao, ConversaoResponse } from '../models';

@Injectable()
export class ConversorService {
  private readonly BASE_URL = 'https://api.frankfurter.app/latest?';

  constructor(private http: HttpClient) {}

  //Realiza a chamada para a API de conversão de moedas.
  public converter(conversao: Conversao): Observable<any> {
    let params = `amount=${conversao.valor}&from=${conversao.moedaDe}&to=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);

    // Essa é a rota da API com os parâmetros que serão passados para a requisição
  }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
   cotacaoPara(conversaoResponse: ConversaoResponse,
		conversao: Conversao): number {
  	if (conversaoResponse === undefined) {
  		return 0;
  	}
  	return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse,
		conversao: Conversao): string {
  	if (conversaoResponse === undefined) {
  		return '0';
  	}

  	return (1 / conversaoResponse.rates[conversao.moedaPara])
  		.toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }
}


