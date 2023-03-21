abstract class customer {
    CustomerName: string;
    Age: number;
    Address: string;
    ContactNumber: number;

    constructor(name: string, age: number, address: string, contactno: number) {
        this.CustomerName = name,
            this.Age = age,
            this.Address = address,
            this.ContactNumber = contactno
    }

    public abstract accessdetails(): any;

}
class loan extends customer {
    LoanAccountNo: number;
    LoanType: string;
    LoanAmount: number;
    Duration: number;
    InterestRate: number;

    constructor(name: string, age: number, address: string, contactno: number, loanaccno: number, loantyp: string, loanamt: number, duration: number, intrestrate: number) {
        super(name, age, address, contactno)
        this.LoanAccountNo = loanaccno,
            this.LoanType = loantyp,
            this.LoanAmount = loanamt,
            this.Duration = duration,
            this.InterestRate = intrestrate
    }

    public accessdetails(): void {
        console.log(`"Name: "${this.CustomerName} "Age: "${this.Age} "Address: "${this.Address} "Contact-No: "${this.ContactNumber} "Account-No: "${this.LoanAccountNo} "Loan-Type: " ${this.LoanType} "Loan-Amt: "${this.LoanAmount} "Duration: "${this.Duration} "Interestrate: " ${this.InterestRate}`)
    }
    public interestCalculate(): void {
        console.log("intrestrate :" + (this.LoanAmount * this.Duration * this.InterestRate) / 100);
    }
    public display(): void {
        console.log("Overall details")
        this.accessdetails();
        this.interestCalculate();
    }


}
let a = new loan('harshan', 20, 'che',9789194848, 12, 'HomeLoan', 45000, 25, 4);
a.display();
