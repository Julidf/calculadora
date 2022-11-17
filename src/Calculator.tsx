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
        this.setSecondDisplay(this.firstValue.toString() + this.opCode);
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

    private secondDisplay: string = "";
    public getSecondDisplay(): string {
        return this.secondDisplay;
    }
    private setSecondDisplay(value: string): void {
        this.secondDisplay = value;
    }

    public inputNumber(value: number) {       
        if (this.opCode === "") {
            if (this.tempEquals === true) {
                this.setFirstValue(0);
                this.tempEquals = false;
            }
            if (this.coma){
                this.firstValue = this.firstValue + Number("0." + value.toString())
                this.display = this.firstValue.toString()
                
            }else {
                this.firstValue = Number(this.firstValue.toString() + value.toString());
                this.display = this.firstValue.toString()
            }
            this.coma = false;
        }
        else {
            if (this.coma){
                this.secondValue = this.secondValue + Number("0." + value.toString())
                this.display = this.secondValue.toString()
                
            }else {
                this.secondValue = Number(this.secondValue.toString() + value.toString());
                this.display = this.secondValue.toString()
            }
            this.coma = false;
        }
    }

    private concatenateInput(value: number, toInput: number):number{   
        let concatenated = value.toString() + toInput.toString();
        return parseInt(concatenated)
    }

    private coma = false;
    public addComma() {
        if (!this.display.includes(".")){
            this.display = this.display + ".0"
            this.coma = true;
        }
    }

    public reset() {
        this.setFirstValue(0);
        this.setSecondValue(0);
        this.opCode = "";
        this.result = 0;
    }

    public deletebutton() {
        let value = this.firstValue.toString()
        let value2 = this.secondValue.toString()
        if (this.opCode === ""){
            value.length === 1 ? this.setFirstValue(0) : this.setFirstValue(parseInt(value.substring(0, value.length - 1)));
        }else{
            value2.length === 1 ? this.setSecondValue(0) : this.setSecondValue(parseInt(value2.substring(0, value.length - 1)));
        }
    }

    public equals() {
        if (this.opCode){
            if (this.opCode != "/" || this.secondValue != 0){
                let operation: string = this.firstValue.toString();
                operation += this.opCode;
                operation += this.secondValue.toString();
                this.setResult(eval(operation));
                this.setSecondDisplay(operation + " =")

                this.setSecondValue(0);
                this.setFirstValue(this.getResult());
                this.opCode = "";
                this.tempEquals = true;
            }
        }
    }



}