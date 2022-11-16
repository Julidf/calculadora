import { ICalculator } from "./ICalculator";

export class Calculator implements ICalculator{
    constructor() {
        this.display = this.firstValue.toString();
    }

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
            this.setFirstValue(this.concatenateInput(this.firstValue, value));
        }
        else {
            this.setSecondValue(this.concatenateInput(this.secondValue, value));
        }
    }

    private concatenateInput(value: number, toInput: number):number{
        let concatenated = (value * 10) + toInput;
        return concatenated;
    }


    private opCode: string = "";
    public getOpCode(): string { return this.opCode }

    public opAdd():void {
        this.opCode = "+";
    }

    public equals():void {
        let operation: string = this.firstValue.toString();
        operation += this.opCode;
        operation += this.secondValue.toString();
        this.setResult(eval(operation));
    }


}