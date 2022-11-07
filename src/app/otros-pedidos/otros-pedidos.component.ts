import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosHttpService } from 'src/app/services/servicios-http.service'
import { pedidoModel } from '../inputs-pedidos/modelosPedidos/pedido';

@Component({
  selector: 'app-otros-pedidos',
  templateUrl: './otros-pedidos.component.html',
  styleUrls: ['./otros-pedidos.component.css']
})
export class OtrosPedidosComponent implements OnInit {
  public pedidos:pedidoModel[];

  constructor(
    private _router:Router,
    private _serviceHttp:ServiciosHttpService
  ) {
    this.pedidos = []
  }

  ngOnInit(){
    this.getPedidos();
  }

  redirectRegisterPedidos(){
    this._router.navigate(['/registroPedidos']);
  }

  getPedidos(){
    this._serviceHttp.getPedidos().subscribe(
      (result) => {
        console.log(result.pedidos);
        if(result.pedidos){
          this.pedidos = result.pedidos;
        }
      },
      (error) => {
        console.log(<any>error)
      }
    )
  }


}
