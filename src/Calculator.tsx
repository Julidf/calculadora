import { ICalculator } from "./ICalculator";
export type Operator = "+" | "-" | "*" | "/";

export class Calculator implements ICalculator{

    constructor() {
        this.display = this.firstValue.toString();
    }

    private tempEquals: boolean = false;
    private coma = false;

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
            if (this.secondValue !== 0) {
                this.equals();
                this.opCode = operator;
            } else {
                this.opCode = operator;
            }
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
        if (this.noOpCodeSelected())
        {
            this.resetWhenTemp();
            this.setInputValue(value, this.firstValue, (newValue: number) => {this.firstValue = newValue});
        }
        else {
            this.setInputValue(value, this.secondValue, (newValue: number) => {this.secondValue = newValue});
        }
    }

    private noOpCodeSelected(): boolean{
        return this.opCode === "";
    }

    private setInputValue(value:number, oldValue: number, callback: any){
        let newValue = 0;
        if (this.coma){
            newValue = oldValue + Number("0." + value.toString())
            this.coma = false;
        } else {
            newValue = Number(oldValue.toString() + value.toString());
        }
        this.display = newValue.toString()
        callback(newValue);
    }

    public addComma() {
        this.resetWhenTemp()
        if (!this.display.includes(".")){
            this.display = this.display + "."
            this.coma = true;
        }
    }

    private resetWhenTemp(){
        if (this.tempEquals === true) {
            this.setFirstValue(0);
            this.tempEquals = false;
        }
    }

    public sqrtPow(both: string) {
        let prefixText: string = "";
        if (this.opCode === "") {
            this.setResult(this.executeUnitaryMath(both, prefixText, this.firstValue, (theNewValue: number) => this.setFirstValue(theNewValue)));
        } else {
            prefixText = this.firstValue.toString() + this.getOpCode();
            this.setResult(this.executeUnitaryMath(both, prefixText, this.secondValue, (theNewValue: number) => this.setSecondValue(theNewValue)));
        }
    }

    private executeUnitaryMath(opCode: string, prefixText: string, currentValue: number, setTheValue: any){
        let newValue: number = 0;
        if (opCode === "²"){
            this.setSecondDisplay(prefixText + currentValue.toString() + opCode );
            newValue = Math.pow(currentValue, 2);
        } else {
            this.setSecondDisplay(prefixText + opCode + currentValue.toString());
            newValue = Math.sqrt(currentValue)
        }
        setTheValue(newValue);
        return newValue;
    }

    public reset() {
        this.setFirstValue(0);
        this.setSecondValue(0);
        this.opCode = "";
        this.result = 0;
        this.setSecondDisplay("")
        this.coma = false;
    }

    public deletebutton() {
        let value = this.firstValue.toString()
        let value2 = this.secondValue.toString()
        if (this.opCode === ""){
            value.length === 1 ? this.setFirstValue(0) : this.setFirstValue(Number(value.substring(0, value.length - 1)));
        }else{
           value2.length === 1 ? this.setSecondValue(0) : this.setSecondValue(Number(value2.substring(0, value2.length - 1)));
        }
    }

    public equals() {
        if (this.opCode){
            if (this.opCode !== "/" || this.secondValue !== 0){
                let operation: string = this.firstValue.toString();
                operation += this.opCode;
                operation += this.secondValue.toString();
                this.setResult(eval(operation)) // eslint-disable-line
                this.setSecondDisplay(operation + " =")

                this.setSecondValue(0);
                this.setFirstValue(this.getResult());
                this.opCode = "";
                this.tempEquals = true;
            }
        }
    }



}