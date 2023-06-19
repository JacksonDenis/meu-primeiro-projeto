import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estruturais',
  templateUrl: './directivas-estruturais.component.html',
  styleUrls: ['./directivas-estruturais.component.scss']
})
export class DirectivasEstruturaisComponent implements OnInit {

  public condition:boolean = true

  public list: Array<{nome:string, idade:number}> = [
      { nome: "Jackson Denis " , idade: 29 },
      { nome: "Jose Denis ", idade: 30 },
      { nome: "Felipe Denis ", idade: 31 },
    ];

    public nome:string = "Jackson"

  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      this.condition = false;
    }, 2000)
    
  }


  public onClickAddList() {
    this.list.push({nome: "Juliana" , idade: 30})
  }



}
