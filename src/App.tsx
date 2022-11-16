import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import { ICalculator } from './ICalculator';
import { Calculator } from './Calculator';
import {Operator} from "./Calculator";

let calc: ICalculator = new Calculator;
function App() {
  
  const [state, setState] = useState("");
  const [displayValue, setDisplay] = useState(calc.getDisplay());
  let lastVal = state.substr(state.length-1, 1);

  function deleteChar() {
    setState(state.substring(0, state.length - 1))
  }; 
  
  function AddOperator(operator: Operator) {
    if (state !== "" && !isOperator(lastVal)){
      setState(state + operator)
    }
  };

  function sendInput(toInput: number){
    calc.inputNumber(toInput);
    setDisplay(calc.getDisplay());
  }

  const isOperator = (lastValue: string) => {
    return (lastValue === "+" ) || (lastValue === "-" ) || (lastValue === "*" ) || (lastValue === "/") || (lastValue === ".")
  }

  function sendAddOperator(operator: Operator){
    calc.opAdd(operator);
    setDisplay(calc.getDisplay());
  }

  function resolve(){
    calc.equals();
    setDisplay(calc.getDisplay());
  }

  return (
    <div className='calculator-container'>

      <div className='input-container'>
        <input className='input' type='text' placeholder='Resultado' value={displayValue} readOnly></input>
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
        <button className='button' onClick={() => (".")}>.</button>
        <button className='button' onClick={() => sendAddOperator("/")}>/</button>
      </div>

      <div className='row-calculator'>
        <button className='button' onClick={() => deleteChar()}>DEL</button>
        <button className='special-button' onClick={() => setState("")}>RESET</button>
      </div>

    </div>
  );
}

export default App;
