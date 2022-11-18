import {Operator} from "./Calculator";
export interface ICalculator {
    
    getFirstValue(): number;

    getSecondValue(): number;

    getResult():number;

    getDisplay(): string;

    inputNumber(value: number):void;

    getOpCode(): string;

    opAdd(operator: Operator):void;

    reset(): void;

    deletebutton(): void;

    addComma(): void;

    equals():void;

    getSecondDisplay(): string;

    sqrtPow(both: string): void;
}