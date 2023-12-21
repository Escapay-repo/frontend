import { Component, OnInit } from '@angular/core';
import { maquininhaCrud } from '../../tabela/maquininhaCrud';
import { MaquininhaService } from '../maquininha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatadorService } from 'src/app/services/formatador.service';
import { IConfig, provideNgxMask } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'escapay-maquininha-update',
  templateUrl: './maquininha-update.component.html',
  styleUrls: ['../../tabela/tabela-update/tabela-update.component.css'],
  providers: [
    provideNgxMask()
  ]
})
export class MaquininhaUpdateComponent implements OnInit {
  table!: maquininhaCrud

  constructor(private maquininhaService: MaquininhaService, private router: Router,
    private route: ActivatedRoute,
    private formatadorService: FormatadorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.maquininhaService.readById(id!).subscribe(data => {
      this.table = data
    });
  }

  formatarNumero(numeroDigitado: number): string {
    const numeroFormatado = this.formatadorService.formatarVirgula(numeroDigitado);
    return numeroFormatado;
  }

  formatarNumeroStringParaNumber(valor: string): number {
    const numero = parseFloat(valor);
    return isNaN(numero) ? 0 : numero;
  }

  updateTable(): void {
    this.maquininhaService.update(this.table.key, this.table).subscribe(() =>
      this.maquininhaService.showMessage('Tabela atualizada'))
    this.router.navigate(['/maquininhaHome'])
  }

  cancel(): void {
    this.router.navigate(['/maquininhaHome'])
  }

  masterToVisa(): void {
    this.table.debito.visa = this.table.debito.masterCard;
    this.table.credito.visa = this.table.credito.masterCard;
    this.table.duas.visa = this.table.duas.masterCard;
    this.table.tres.visa = this.table.tres.masterCard;
    this.table.quatro.visa = this.table.quatro.masterCard;
    this.table.cinco.visa = this.table.cinco.masterCard;
    this.table.seis.visa = this.table.seis.masterCard;
    this.table.sete.visa = this.table.sete.masterCard;
    this.table.oito.visa = this.table.oito.masterCard;
    this.table.nove.visa = this.table.nove.masterCard;
    this.table.dez.visa = this.table.dez.masterCard;
    this.table.onze.visa = this.table.onze.masterCard;
    this.table.doze.visa = this.table.doze.masterCard;
    this.table.treze.visa = this.table.treze.masterCard;
    this.table.quatorze.visa = this.table.quatorze.masterCard;
    this.table.quinze.visa = this.table.quinze.masterCard;
    this.table.dezesseis.visa = this.table.dezesseis.masterCard;
    this.table.dezessete.visa = this.table.dezessete.masterCard;
    this.table.dezoito.visa = this.table.dezoito.masterCard;
    this.table.dezenove.visa = this.table.dezenove.masterCard;
    this.table.vinte.visa = this.table.vinte.masterCard;
    this.table.vinteUm.visa = this.table.vinteUm.masterCard;
  }

  masterToOutros(): void {
    this.table.credito.outros = this.table.credito.masterCard;
    this.table.debito.outros = this.table.debito.masterCard;
    this.table.duas.outros = this.table.duas.masterCard;
    this.table.tres.outros = this.table.tres.masterCard;
    this.table.quatro.outros = this.table.quatro.masterCard;
    this.table.cinco.outros = this.table.cinco.masterCard;
    this.table.seis.outros = this.table.seis.masterCard;
    this.table.sete.outros = this.table.sete.masterCard;
    this.table.oito.outros = this.table.oito.masterCard;
    this.table.nove.outros = this.table.nove.masterCard;
    this.table.dez.outros = this.table.dez.masterCard;
    this.table.onze.outros = this.table.onze.masterCard;
    this.table.doze.outros = this.table.doze.masterCard;
    this.table.treze.outros = this.table.treze.masterCard;
    this.table.quatorze.outros = this.table.quatorze.masterCard;
    this.table.quinze.outros = this.table.quinze.masterCard;
    this.table.dezesseis.outros = this.table.dezesseis.masterCard;
    this.table.dezessete.outros = this.table.dezessete.masterCard;
    this.table.dezoito.outros = this.table.dezoito.masterCard;
    this.table.dezenove.outros = this.table.dezenove.masterCard;
    this.table.vinte.outros = this.table.vinte.masterCard;
    this.table.vinteUm.outros = this.table.vinteUm.masterCard;
  }

  visaToMaster(): void {
    this.table.credito.masterCard = this.table.credito.visa;
    this.table.debito.masterCard = this.table.debito.visa;
    this.table.duas.masterCard = this.table.duas.visa;
    this.table.tres.masterCard = this.table.tres.visa;
    this.table.quatro.masterCard = this.table.quatro.visa;
    this.table.cinco.masterCard = this.table.cinco.visa;
    this.table.seis.masterCard = this.table.seis.visa;
    this.table.sete.masterCard = this.table.sete.visa;
    this.table.oito.masterCard = this.table.oito.visa;
    this.table.nove.masterCard = this.table.nove.visa;
    this.table.dez.masterCard = this.table.dez.visa;
    this.table.onze.masterCard = this.table.onze.visa;
    this.table.doze.masterCard = this.table.doze.visa;
    this.table.treze.masterCard = this.table.treze.visa;
    this.table.quatorze.masterCard = this.table.quatorze.visa;
    this.table.quinze.masterCard = this.table.quinze.visa;
    this.table.dezesseis.masterCard = this.table.dezesseis.visa;
    this.table.dezessete.masterCard = this.table.dezessete.visa;
    this.table.dezoito.masterCard = this.table.dezoito.visa;
    this.table.dezenove.masterCard = this.table.dezenove.visa;
    this.table.vinte.masterCard = this.table.vinte.visa;
    this.table.vinteUm.masterCard = this.table.vinteUm.visa;
  }

  outrosToMaster(): void {
    this.table.credito.masterCard = this.table.credito.outros;
    this.table.debito.masterCard = this.table.debito.outros;
    this.table.duas.masterCard = this.table.duas.outros;
    this.table.tres.masterCard = this.table.tres.outros;
    this.table.quatro.masterCard = this.table.quatro.outros;
    this.table.cinco.masterCard = this.table.cinco.outros;
    this.table.seis.masterCard = this.table.seis.outros;
    this.table.sete.masterCard = this.table.sete.outros;
    this.table.oito.masterCard = this.table.oito.outros;
    this.table.nove.masterCard = this.table.nove.outros;
    this.table.dez.masterCard = this.table.dez.outros;
    this.table.onze.masterCard = this.table.onze.outros;
    this.table.doze.masterCard = this.table.doze.outros;
    this.table.treze.masterCard = this.table.treze.outros;
    this.table.quatorze.masterCard = this.table.quatorze.outros;
    this.table.quinze.masterCard = this.table.quinze.outros;
    this.table.dezesseis.masterCard = this.table.dezesseis.outros;
    this.table.dezessete.masterCard = this.table.dezessete.outros;
    this.table.dezoito.masterCard = this.table.dezoito.outros;
    this.table.dezenove.masterCard = this.table.dezenove.outros;
    this.table.vinte.masterCard = this.table.vinte.outros;
    this.table.vinteUm.masterCard = this.table.vinteUm.outros;
  }

  outrosToVisa(): void {
    this.table.credito.visa = this.table.credito.outros;
    this.table.debito.visa = this.table.debito.outros;
    this.table.duas.visa = this.table.duas.outros;
    this.table.tres.visa = this.table.tres.outros;
    this.table.quatro.visa = this.table.quatro.outros;
    this.table.cinco.visa = this.table.cinco.outros;
    this.table.seis.visa = this.table.seis.outros;
    this.table.sete.visa = this.table.sete.outros;
    this.table.oito.visa = this.table.oito.outros;
    this.table.nove.visa = this.table.nove.outros;
    this.table.dez.visa = this.table.dez.outros;
    this.table.onze.visa = this.table.onze.outros;
    this.table.doze.visa = this.table.doze.outros;
    this.table.treze.visa = this.table.treze.outros;
    this.table.quatorze.visa = this.table.quatorze.outros;
    this.table.quinze.visa = this.table.quinze.outros;
    this.table.dezesseis.visa = this.table.dezesseis.outros;
    this.table.dezessete.visa = this.table.dezessete.outros;
    this.table.dezoito.visa = this.table.dezoito.outros;
    this.table.dezenove.visa = this.table.dezenove.outros;
    this.table.vinte.visa = this.table.vinte.outros;
    this.table.vinteUm.visa = this.table.vinteUm.outros;
  }

  visaToOutros(): void {
    this.table.credito.outros = this.table.credito.visa;
    this.table.debito.outros = this.table.debito.visa;
    this.table.duas.outros = this.table.duas.visa;
    this.table.tres.outros = this.table.tres.visa;
    this.table.quatro.outros = this.table.quatro.visa;
    this.table.cinco.outros = this.table.cinco.visa;
    this.table.seis.outros = this.table.seis.visa;
    this.table.sete.outros = this.table.sete.visa;
    this.table.oito.outros = this.table.oito.visa;
    this.table.nove.outros = this.table.nove.visa;
    this.table.dez.outros = this.table.dez.visa;
    this.table.onze.outros = this.table.onze.visa;
    this.table.doze.outros = this.table.doze.visa;
    this.table.treze.outros = this.table.treze.visa;
    this.table.quatorze.outros = this.table.quatorze.visa;
    this.table.quinze.outros = this.table.quinze.visa;
    this.table.dezesseis.outros = this.table.dezesseis.visa;
    this.table.dezessete.outros = this.table.dezessete.visa;
    this.table.dezoito.outros = this.table.dezoito.visa;
    this.table.dezenove.outros = this.table.dezenove.visa;
    this.table.vinte.outros = this.table.vinte.visa;
    this.table.vinteUm.outros = this.table.vinteUm.visa;
  }


}
