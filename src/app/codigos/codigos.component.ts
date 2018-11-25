import { Component, AfterViewInit, AfterContentInit, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './codigos.component.html',
  styleUrls: ['./codigos.component.scss']
})
export class CodigosComponent implements OnInit {
  seleccionado: any;
  usuario: any;
  valores = [];
  imagenUrl;

  constructor(private toastr: ToastrService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.usuario = this.authService.userDetails;
    this.imagenUrl = this.usuario.photoURL;
    console.log(this.usuario);
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
    this.toastr.success('El código está en el clipboard', 'Copiado', {
      timeOut: 10000
    });
  }
}
