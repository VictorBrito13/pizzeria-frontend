import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OtrosPedidosComponent } from "./otros-pedidos/otros-pedidos.component";
import { InputsPedidosComponent } from "./inputs-pedidos/inputs-pedidos.component";
import { DetailsPedidoComponent } from "./details-pedido/details-pedido.component";

const rutas:Routes = [
    { path: 'otrosPedidos', component: OtrosPedidosComponent },
    { path: 'registroPedidos', component: InputsPedidosComponent},
    { path: 'pedido/:id', component: DetailsPedidoComponent},
    { path: '**', component:OtrosPedidosComponent }
];

export const routerProvider:any[] = [];
export const routing:ModuleWithProviders<RouterModule> = RouterModule.forRoot(rutas);