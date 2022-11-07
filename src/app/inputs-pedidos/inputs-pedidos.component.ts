import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pedidoModel } from 'src/app/inputs-pedidos/modelosPedidos/pedido'
import { ServiciosHttpService } from '../services/servicios-http.service';

@Component({
  selector: 'app-inputs-pedidos',
  templateUrl: './inputs-pedidos.component.html',
  styleUrls: ['./inputs-pedidos.component.css']
})
export class InputsPedidosComponent implements OnInit {
  public pedidoInfo:pedidoModel

  constructor(
    private _router:Router,
    private _httpService:ServiciosHttpService
  ) {
    this.pedidoInfo = new pedidoModel('','','',0,'',0);
  }

  ngOnInit(): void {
  }

  redirectOtrosPedidos(){
    this._router.navigate(['/otrosPedidos'])
  }

  sendPedido(from:any){
    this._httpService.addPedido(this.pedidoInfo).subscribe(
      (result)=>{
        console.log(result);
        from.reset()
        var paragraphSend = document.getElementById("enviadoParagraph");
        paragraphSend!.innerHTML = 'Pedido creado con exito'
      },
      (err)=>{console.log(<any>err)}
    )
  }
}
