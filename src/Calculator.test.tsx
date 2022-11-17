import { render, screen } from '@testing-library/react';
import App from './App';
import { Calculator } from './Calculator';

test('Create new calculator object', () => {
  let calc = new Calculator();
  expect(calc).toBeInstanceOf(Calculator);

});

test('New calculator has 0 as first value', () => {
    let calc = new Calculator();
    expect(calc.getFirstValue()).toEqual(0);
  });

  test('New calculator has "0" as display', () => {
    let calc = new Calculator();
    expect(calc.getDisplay()).toEqual("0");
  });

  test('When passing a number first value is equeal to number', () => {
    let calc = new Calculator();
    calc.inputNumber(5)
    expect(calc.getFirstValue()).toEqual(5);
  });

  test('When passing a number display is equeal to "number"', () => {
    let calc = new Calculator();
    calc.inputNumber(5)
    expect(calc.getDisplay()).toEqual("5");
  });

  test('When passing a second number first value has to concatenate', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(5);
    expect(calc.getDisplay()).toEqual("55");
  });

  test('When passing a 0 the first time, do nothing (keep it as 0)', () => {
    let calc = new Calculator();
    calc.inputNumber(0);
    calc.inputNumber(0);
    expect(calc.getDisplay()).toEqual("0");
  });

  test('When pressing add method we want to get opCode as +', () => {
    let calc = new Calculator();
    calc.opAdd("+");
    expect(calc.getOpCode()).toEqual("+");
  });

  test('When pressing add method we want to input secondValue', () => {
    let calc = new Calculator();
    calc.opAdd("+");
    calc.inputNumber(5);
    expect(calc.getSecondValue()).toEqual(5);
  });

  test('When pressing add method we want to input secondValue', () => {
    let calc = new Calculator();
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(5);
    expect(calc.getSecondValue()).toEqual(55);
  });

  test('When pressing equals we get addition result on display and result', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(5);
    calc.opAdd("+");
    calc.inputNumber(4);
    calc.inputNumber(5);
    calc.equals();
    expect(calc.getResult()).toEqual(100);
    expect(calc.getDisplay()).toEqual("100");
  });

  test('When pressing equals we want the result to be the firstValue and erase op', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(5);
    calc.opAdd("+");
    calc.inputNumber(4);
    calc.inputNumber(5);
    calc.equals();
    expect(calc.getFirstValue()).toEqual(100);
    expect(calc.getOpCode()).toEqual("");
  });

  test('When pressing equals firstValue should be temporal', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(5);
    calc.opAdd("+");
    calc.inputNumber(4);
    calc.inputNumber(5);
    calc.equals();
    calc.inputNumber(5);
    expect(calc.getFirstValue()).toEqual(5);
    expect(calc.getDisplay()).toEqual("5");
  });

  test('We should be able to concatenate operations', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    expect(calc.getResult()).toEqual(150);
    expect(calc.getDisplay()).toEqual("150");
  });

  test('Equals button should not work if we do not have an operator', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.equals();
    calc.equals();
    expect(calc.getResult()).toEqual(100);
    expect(calc.getDisplay()).toEqual("100");
  });

  test('When pressing the RESET button, the calculator should reset', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.opAdd("*");
    calc.inputNumber(5);
    calc.equals();
    calc.reset();  
    expect(calc.getResult()).toEqual(0);
    expect(calc.getDisplay()).toEqual("0");
  });

  test('When pressing the DELETE button, the calculator should delete one digit from display', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.deletebutton();
    calc.equals();
    expect(calc.getResult()).toEqual(55);
    expect(calc.getDisplay()).toEqual("55");
  });

  test('When we have one digit left and press the DELETE button, the display should be equals to 0', () => {
    let calc = new Calculator();
    calc.inputNumber(9);
    calc.inputNumber(4);
    calc.deletebutton();
    calc.deletebutton();
    expect(calc.getResult()).toEqual(0);
    expect(calc.getDisplay()).toEqual("0");
  });

  test('It should add a comma when we push the comma button', () => {
    let calc = new Calculator();
    calc.inputNumber(9);
    calc.inputNumber(4);
    calc.addComma();
    calc.inputNumber(1);
    expect(calc.getFirstValue()).toEqual(94.1);
  });

  test('It should handle the multiple inputs of commas', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.addComma();
    calc.addComma();
    calc.addComma();
    calc.addComma();
    expect(calc.getDisplay()).toEqual("50.0");
  });

  test('when you keep putting number after the coma it should keep adding decimals ', () => {
    let calc = new Calculator();
    calc.inputNumber(9);
    calc.inputNumber(4);
    calc.addComma();
    calc.inputNumber(1);
    calc.inputNumber(1);
    calc.inputNumber(1);
    expect(calc.getFirstValue()).toEqual(94.111);
  });

  test('We should have a second display to show the operation', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("+");
    calc.inputNumber(5);
    calc.inputNumber(0);
    expect(calc.getSecondDisplay()).toEqual("50+");
  });
  
  test('Handle invalid operations like dividing by zero', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(0);
    calc.opAdd("/");
    calc.inputNumber(0);
    expect(calc.getResult()).toEqual(0);
  });



  


