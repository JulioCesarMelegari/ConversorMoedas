import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conversao, ConversaoResponse, Moeda } from '../models';
import { ConversorService, MoedaService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  /**FAZ UM byind do html com o atributo de classe */
  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

    /**efetua um load de moedas */
  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   */
  init(): void {
  	this.conversao = new Conversao('USD', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true
        );
  	}
  }

}

