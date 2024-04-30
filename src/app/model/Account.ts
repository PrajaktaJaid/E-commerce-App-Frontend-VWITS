export class Account{
    //make sure these field names mathches json properties returned from server as response
    constructor(
        public accountNumber:number=0,
        public balance:number=0,
        public owner:string='Guest',
        public openingDate:Date=new Date()
    ){}
}