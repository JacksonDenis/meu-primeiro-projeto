import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter

  public list:Array<{nome:string, idade:number}> = [
    {nome: "Jackson Dneis", idade: 32},
    {nome: "Jackson Luiz", idade: 29},
    {nome: "Maria Dneis", idade: 13},
  ]

  public getDados (event: number) {
    this.enviarDados.emit(this.list[event]);    
  }

}
