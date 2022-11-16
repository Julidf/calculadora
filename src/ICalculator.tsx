export interface ICalculator {
    getFirstValue(): number;

    getSecondValue(): number;

    getResult():number;

    getDisplay(): string;

    inputNumber(value: number):void;

    getOpCode(): string;

    opAdd():void;
    equals():void;
}