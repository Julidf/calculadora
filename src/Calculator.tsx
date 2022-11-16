import { ICalculator } from "./ICalculator";
export type Operator = "+" | "-" | "*" | "/";

export class Calculator implements ICalculator{
    constructor() {
        this.display = this.firstValue.toString();
    }

    private tempEquals: boolean = false;

    private firstValue: number = 0;
    public getFirstValue(): number { return this.firstValue }
    private setFirstValue(value:number) { 
        this.firstValue = value;
        this.display = this.firstValue.toString();
    }

    private secondValue: number = 0;
    public getSecondValue(): number { return this.secondValue }
    private setSecondValue(value:number) { 
        this.secondValue = value;
        this.display = this.secondValue.toString();
    
    }

    private opCode: string = "";
    public getOpCode(): string { return this.opCode }
    public opAdd(operator: Operator):void {
        this.tempEquals = false;
        if (this.opCode === ""){
            this.opCode = operator;
        } else {
            this.equals();
            this.opCode = operator;
        }
    }

    private result: number = 0;
    public getResult():number {return this.result}
    private setResult(value: number){
        this.result = value;
        this.display = this.result.toString();
    }
    
    private display: string;
    public getDisplay(): string {
        return this.display;
    }

    public inputNumber(value: number):void {       
        if (this.opCode === "") {
            if (this.tempEquals === true) {
                this.setFirstValue(0);
                this.tempEquals = false;
            }
            this.setFirstValue(this.concatenateInput(this.firstValue, value));
        }
        else {
            this.setSecondValue(this.concatenateInput(this.secondValue, value));
        }
    }

    private concatenateInput(value: number, toInput: number):number{   
        let concatenated = value.toString() + toInput.toString();
        return parseInt(concatenated)
    }

    public equals():void {
        if (this.opCode){
            let operation: string = this.firstValue.toString();
            operation += this.opCode;
            operation += this.secondValue.toString();
            this.setResult(eval(operation));

            this.setSecondValue(0);
            this.setFirstValue(this.getResult());
            this.opCode = "";
            this.tempEquals = true;
        }
        
    }



}