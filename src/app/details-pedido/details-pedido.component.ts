import { Component, OnInit } from '@angular/core';
import { ServiciosHttpService } from '../services/servicios-http.service';
import { pedidoModel } from '../inputs-pedidos/modelosPedidos/pedido';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details-pedido',
  templateUrl: './details-pedido.component.html',
  styleUrls: ['./details-pedido.component.css'],
  providers:[ServiciosHttpService]
})
export class DetailsPedidoComponent implements OnInit {
  public pedido:pedidoModel;

  constructor(
    private _ServicesHttp:ServiciosHttpService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router
  ) { 
    this.pedido = new pedidoModel("", "", "", 0, "", 0);
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getPedido(id);
    });
  }

  getPedido(id:number){
    this._ServicesHttp.getPedido(id).subscribe(
      (res) => {
        console.log(res.pedido);
        this.pedido = res.pedido;
      },
      (err) => {
        console.log(<any>err);
      }
    );
  }

  deletePedido(id:string){
    this._ServicesHttp.deletePedido(id).subscribe(
      (res) => {
        if(res.projectDeleted){
          this._Router.navigate(['/otrosPedidos']);
        }
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

}
