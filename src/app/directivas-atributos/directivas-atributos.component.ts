import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributos',
  templateUrl: './directivas-atributos.component.html',
  styleUrls: ['./directivas-atributos.component.scss']
})
export class DirectivasAtributosComponent implements OnInit {

  public valor:boolean = true;

  public height: string = "200px";

  public nome: string = "Jackson"


  public list:Array< {nome: string }> = []
  constructor (){}

  ngOnInit(): void {
    
  }

  /**
   * salvar
   */
  public salvar() {
    this.list.push ({nome: this.nome})
  }

}
