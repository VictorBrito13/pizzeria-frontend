import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzeria';
  public infoPedido:any

  @Input()
  public identificado = false;

  constructor(){

  }
  identificarme(){
    this.identificado = true
  }
}
