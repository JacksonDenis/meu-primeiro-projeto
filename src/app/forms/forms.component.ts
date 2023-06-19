import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: Array<{comida : string}> = [
    {comida: "Salada"},
    {comida: "Coxinha"},
    {comida: "pao"},
  ]

  public submitForm(form: NgForm) {
    console.log(form.value);
    
  }

}
