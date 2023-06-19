import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-forms></app-forms>
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <app-input [contador]="addValue"></app-input>
    <router-outlet></router-outlet>
    <app-directivas-estruturais></app-directivas-estruturais>
    <app-directivas-atributos></app-directivas-atributos>
    <app-new-component></app-new-component>
  `,
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;
  public addValue: number = 10

  public getDados: { nome: string, idade: number } | undefined;

  constructor() { }

  ngOnInit(): void { }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event
  }


}
