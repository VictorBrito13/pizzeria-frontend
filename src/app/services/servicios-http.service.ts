import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pedidoModel } from '../inputs-pedidos/modelosPedidos/pedido';

@Injectable({
  providedIn: 'root'
})
export class ServiciosHttpService {

  public url_dev:string;
  private url:string

  constructor(
    private _http:HttpClient
  ) {
    this.url_dev = 'http://localhost:6800/api/';
    this.url = 'https://pizzeriaserver-production.up.railway.app/api/'
  }

  /* Get pedidos */
  getPedidos():Observable<any>{
    return this._http.get(this.url + 'getPedidos');
  }

  /* Add pedido */
  addPedido(pedido:pedidoModel):Observable<any>{
    let params = JSON.stringify(pedido);
    let header = new HttpHeaders().set('Content-type', 'application/json')
    return this._http.post(this.url + 'savePedido', params, {headers: header});
  }

  //Get Pedido
  getPedido(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + 'pedido/' + id, {headers:headers});
  }

  //Eliminar pedido
  deletePedido(id:string):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return  this._http.delete(this.url + 'delete/' + id, {headers: headers});
  }


}
