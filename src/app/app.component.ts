import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  seleccionado: any;
  @ViewChild('valor') valorDom;
  valores = [
    { valor: 1, posicion: '205' },
    { valor: 2, posicion: '951' },
    { valor: 3, posicion: '446' },
    { valor: 4, posicion: '777' },
    { valor: 5, posicion: '309' },
    { valor: 6, posicion: '574' },
    { valor: 7, posicion: '486' },
    { valor: 8, posicion: '382' },
    { valor: 9, posicion: '967' },
    { valor: 10, posicion: '416' },
    { valor: 11, posicion: '154' },
    { valor: 12, posicion: '206' },
    { valor: 13, posicion: '185' },
    { valor: 14, posicion: '255' },
    { valor: 15, posicion: '925' },
    { valor: 16, posicion: '578' },
    { valor: 17, posicion: '430' },
    { valor: 18, posicion: '106' },
    { valor: 19, posicion: '161' },
    { valor: 20, posicion: '894' },
    { valor: 21, posicion: '556' },
    { valor: 22, posicion: '375' },
    { valor: 23, posicion: '774' },
    { valor: 24, posicion: '953' },
    { valor: 25, posicion: '310' },
    { valor: 26, posicion: '252' },
    { valor: 27, posicion: '168' },
    { valor: 28, posicion: '640' },
    { valor: 29, posicion: '496' },
    { valor: 30, posicion: '633' },
    { valor: 31, posicion: '479' },
    { valor: 32, posicion: '555' },
    { valor: 33, posicion: '908' },
    { valor: 34, posicion: '187' },
    { valor: 35, posicion: '240' },
    { valor: 36, posicion: '181' },
    { valor: 37, posicion: '589' },
    { valor: 38, posicion: '311' },
    { valor: 39, posicion: '800' },
    { valor: 40, posicion: '179' },
    { valor: 41, posicion: '752' },
    { valor: 42, posicion: '759' },
    { valor: 43, posicion: '105' },
    { valor: 44, posicion: '333' },
    { valor: 45, posicion: '765' },
    { valor: 46, posicion: '260' },
    { valor: 47, posicion: '910' },
    { valor: 48, posicion: '392' },
    { valor: 49, posicion: '699' },
    { valor: 50, posicion: '773' }
];

  ngAfterViewInit(): void {
  }

  copiar() {
    const selBox: any = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.seleccionado;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
