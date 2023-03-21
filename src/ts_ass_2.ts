interface saving {
    balance: number;
    intrest?: number;
    Balance(): void;
}
interface current {
    balance: number;
    intrest?: number;
    Balance(): void;
}
export class account implements saving, current {
    accholdername: string;
    accholderage: number;
    balance: number;
    intrest?: number;

    constructor(balance: number, name: string, age: number, intrest?: number) {
        this.balance = balance,
            this.accholdername = name,
            this.accholderage = age,
            this.intrest = intrest
    }

    public Balance(): void {
        if (this.intrest == null) {
            console.log("savings acc: "+this.balance)
        } else {
            console.log("current acc: "+this.balance * this.intrest)
        }

    }
}
let b = new account(200,"Harshan",20,3)
b.Balance();