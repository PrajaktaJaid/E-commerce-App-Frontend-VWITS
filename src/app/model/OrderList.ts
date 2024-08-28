export class OrderList{
    constructor(
        public id:number,
	public item:string,
	public price:number,
	public status:string,
	public couponCode:string,
	public discount:number
    ){

    }
}