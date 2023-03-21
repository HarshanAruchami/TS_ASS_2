"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
class account {
    constructor(balance, name, age, intrest) {
        this.balance = balance,
            this.accholdername = name,
            this.accholderage = age,
            this.intrest = intrest;
    }
    Balance() {
        if (this.intrest == null) {
            console.log("savings acc: " + this.balance);
        }
        else {
            console.log("current acc: " + this.balance * this.intrest);
        }
    }
}
exports.account = account;
let b = new account(200, "Harshan", 20, 3);
b.Balance();
