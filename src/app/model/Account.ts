export class Account{

    //make sure these filed name mathces json properties returned from server as reponse
    constructor(public accountNumber:number=0,
        public balance:number=0,
        public owner:string='guest',
        public openingDate:Date=new Date()){ }
}