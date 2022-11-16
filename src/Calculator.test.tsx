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
    calc.opAdd();
    expect(calc.getOpCode()).toEqual("+");
  });

  test('When pressing add method we want to input secondValue', () => {
    let calc = new Calculator();
    calc.opAdd();
    calc.inputNumber(5);
    expect(calc.getSecondValue()).toEqual(5);
  });

  test('When pressing add method we want to input secondValue', () => {
    let calc = new Calculator();
    calc.opAdd();
    calc.inputNumber(5);
    calc.inputNumber(5);
    expect(calc.getSecondValue()).toEqual(55);
  });

  test('When pressing equals we get addition result on display and result', () => {
    let calc = new Calculator();
    calc.inputNumber(5);
    calc.inputNumber(5);
    calc.opAdd();
    calc.inputNumber(4);
    calc.inputNumber(5);
    calc.equals();
    expect(calc.getResult()).toEqual(100);
    expect(calc.getDisplay()).toEqual("100");
  });
