import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent {
  pessoas!: number;
  item1: any;
  item2: any;
  item3: any;
  item4: any;
  item5: any;

  valHora!: number;

  qtd1!: number;
  qtd2!: number;
  qtd3!: number;
  qtd4!: number;

  resultCalc!: number;

  teste(){
    this.item1 = <HTMLInputElement> document.getElementById("check1");
    this.item2 = <HTMLInputElement> document.getElementById("check2");
    this.item3 = <HTMLInputElement> document.getElementById("check3");
    this.item4 = <HTMLInputElement> document.getElementById("check4");
    this.item5 = <HTMLInputElement> document.getElementById("check5");

    if (this.item1.checked) {
      this.resultCalc = this.qtd1 * (this.valHora * this.pessoas)
    }

    if (this.item2.checked) {
      this.resultCalc = this.qtd2 * (this.valHora * this.pessoas)
    }

     if (this.item3.checked) {
      this.resultCalc = this.qtd3 * (this.valHora * this.pessoas)
    }

    if (this.item4.checked) {
      this.resultCalc = this.qtd4 * (this.valHora * this.pessoas)
    }

  }
}

