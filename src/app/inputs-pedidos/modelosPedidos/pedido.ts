export class pedidoModel {

    constructor(
        public _id:string,
        public nameClient:string,
        public pedido:string,
        public phoneClient:number,
        public address:string,
        public CashToPay:number
        ){}
}