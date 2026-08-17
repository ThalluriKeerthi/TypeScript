class fixedDeposit{
    public customerName : string;
    public principalAmount : number;
    public time : number;
    public interestRate : number;

    constructor(name : string, amount : number);

    constructor(name : string, amount : number,rate : number, years : number);

    constructor(name : string, amount : number,rate ?: number,years ?: number) {
        this.customerName = name;
        this.principalAmount = amount;
        this.interestRate = rate ?? 1;
        this.time = years?? 1;
    }

    public claculateSI() : number{
        const interest = (this.principalAmount * this.time * this.interestRate) / 100;
        return interest;
    }

    public displaydetails() : void{
        console.log("FD Receipt--");
        console.log(`Customer Name : ${this.customerName}`);
        console.log(`Principal : ${this.principalAmount}`);
        console.log(`Rate : ${this.interestRate}`);
        console.log(`Tenure : ${this.time}`);
        console.log(`Simple Interest : $${this.claculateSI()}`);
        console.log('--------\n');
    }

}

const standardFD = new fixedDeposit("Raju",5000);

const senorCitizen = new fixedDeposit("Seenu",100000,7.5,3);
standardFD.displaydetails();
senorCitizen.displaydetails();
senorCitizen.principalAmount = 50000;
console.log(`Updated simple Interest : ${senorCitizen.claculateSI()}`);
