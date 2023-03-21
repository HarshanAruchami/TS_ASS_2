"use strict";
class customer {
    constructor(name, age, address, contactno) {
        this.CustomerName = name,
            this.Age = age,
            this.Address = address,
            this.ContactNumber = contactno;
    }
}
class loan extends customer {
    constructor(name, age, address, contactno, loanaccno, loantyp, loanamt, duration, intrestrate) {
        super(name, age, address, contactno);
        this.LoanAccountNo = loanaccno,
            this.LoanType = loantyp,
            this.LoanAmount = loanamt,
            this.Duration = duration,
            this.InterestRate = intrestrate;
    }
    accessdetails() {
        console.log(`"Name: "${this.CustomerName} "Age: "${this.Age} "Address: "${this.Address} "Contact-No: "${this.ContactNumber} "Account-No: "${this.LoanAccountNo} "Loan-Type: " ${this.LoanType} "Loan-Amt: "${this.LoanAmount} "Duration: "${this.Duration} "Interestrate: " ${this.InterestRate}`);
    }
    interestCalculate() {
        console.log("intrestrate :" + (this.LoanAmount * this.Duration * this.InterestRate) / 100);
    }
    display() {
        console.log("Overall details");
        this.accessdetails();
        this.interestCalculate();
    }
}
let a = new loan('harshan', 20, 'che', 9789194848, 12, 'HomeLoan', 45000, 25, 4);
a.display();
