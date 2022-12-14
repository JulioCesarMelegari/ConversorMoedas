import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalCotacaoComponent } from './../utils/modal-cotacao.component';
import { DataBrPipe } from './../pipes/data-br.pipe';
import { NumeroDirective } from './../directives/numero.directive';
import { MoedaService, ConversorService } from '../services';

import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
      ],
      providers:[MoedaService, ConversorService],
      imports:[FormsModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
