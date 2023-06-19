import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent  implements OnInit {
  public nome:string = "Denner ";
  public idade: number = 29;

  public checkDisebled: boolean = false;

  public imgSrc:string = "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2023/04/legiao_x3TshPVfNMeJ.png.webp";
  public Title:string = "Jackson Dneis "



  constructor() { }

  ngOnInit(): void {
    
  }
  public alertaInfo (valor: MouseEvent) {
    console.log(valor);
  }

  /**
   * mouseMoveTeste
   */
  public mouseMoveTeste(valor: MouseEvent) {
    console.log(valor);
    
  }
}
