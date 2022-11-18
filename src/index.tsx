import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Calculator } from './Calculator';
import { ICalculator } from './ICalculator';
const cCalc: ICalculator = new Calculator();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App calc = {cCalc} />
  </React.StrictMode>
);
