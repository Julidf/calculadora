import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import { ICalculator } from './ICalculator';
import { Calculator } from './Calculator';
import {Operator} from "./Calculator";

let calc: ICalculator = new Calculator;
function App() {
  

  const [displayValue, setDisplay] = useState(calc.getDisplay());
  const [sDisplayValue, sSetDisplay] = useState(calc.getSecondDisplay());


  function sendInput(toInput: number){
    calc.inputNumber(toInput);
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  function sendAddOperator(operator: Operator){
    calc.opAdd(operator);
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  function addComma() {
    calc.addComma();
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  function resolve(){
    calc.equals();
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  function deletebutton() {
    calc.deletebutton();
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  function reset(){
    calc.reset();
    setDisplay(calc.getDisplay());
    sSetDisplay(calc.getSecondDisplay());
  }

  return (
    <div className='calculator-container'>
      <div className='input-container'>
        <p className='second'>{sDisplayValue}</p>
      </div>
      
      <div className='input-container'>
        <input className='input' type='text' placeholder='Result' value={displayValue} readOnly></input>
      </div>
      
      <div className='row-calculator'>
        <button className='button' onClick={() => sendInput(1)}>1</button>
        <button className='button' onClick={() => sendInput(2)}>2</button>
        <button className='button' onClick={() => sendInput(3)}>3</button>
        <button className='button' onClick={() => sendAddOperator("+")}>+</button>
      </div>
      
      <div className='row-calculator'>
        <button className='button' onClick={() => sendInput(4)}>4</button>
        <button className='button' onClick={() => sendInput(5)}>5</button>
        <button className='button' onClick={() => sendInput(6)}>6</button>
        <button className='button' onClick={() => sendAddOperator("-")}>-</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => sendInput(7)}>7</button>
        <button className='button' onClick={() => sendInput(8)}>8</button>
        <button className='button' onClick={() => sendInput(9)}>9</button>
        <button className='button' onClick={() => sendAddOperator("*")}>*</button>
      </div>

      <div className='row-calculator'>
        <button className='equal' onClick={() => resolve()}>=</button>
        <button className='button' onClick={() => sendInput(0)}>0</button>
        <button className='button' onClick={() => addComma()}>.</button>
        <button className='button' onClick={() => sendAddOperator("/")}>/</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => deletebutton()}>DEL</button>
        <button className='special-button' onClick={() => reset()}>RESET</button>
      </div>

    </div>
  );
}

export default App;
