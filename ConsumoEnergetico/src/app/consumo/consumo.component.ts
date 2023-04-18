import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent {
  pessoas: Number | undefined;
  item1: any;
  item2: any;
  item3: any;
  item4: any;
  item5: any;

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
      this.pessoas = 1;
    }

    if (this.item2.checked) {
        this.pessoas = 2;
    }

     if (this.item3.checked) {
        this.pessoas = 3;
    }

    if (this.item4.checked) {
      this.pessoas = 4;
  }

   if (this.item4.checked) {
      this.pessoas = 4;
  }

  }
}

