import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routerProvider, routing } from './rutas.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputsPedidosComponent } from './inputs-pedidos/inputs-pedidos.component';
import { OtrosPedidosComponent } from './otros-pedidos/otros-pedidos.component';
import { DetailsPedidoComponent } from './details-pedido/details-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputsPedidosComponent,
    OtrosPedidosComponent,
    DetailsPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    routerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
