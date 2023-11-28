import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {
  formulario: any = {valor: ''};
  lista: any = [];
  itens: any = [];

  constructor(public http: HttpClient) {
      this.http = http;
  }

  ngOnInit() {
      this.carregaloja();
  }

  carregaloja() {
      this.http.get("https://ionicappp.000webhostapp.com/exibir.php?cat=")
          .subscribe((data: any) => {
               this.itens = data;
          });
  }

  escrevedados() {
      if (!this.formulario.valor) {
        return;
      }
      this.http.get("https://ionicappp.000webhostapp.com/exibir.php?cat=" + this.formulario.valor)
        .subscribe((data: any) => {
          this.lista = data;
        });
    }
}
