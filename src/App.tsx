import React from 'react';
import { CalculatorProvider } from 'hook/calculator';
import { Calculator } from './components/Calculator';
import GlobalStyles from './styles/global';

function App() {
  return (
    <CalculatorProvider>
     <GlobalStyles />
     <Calculator />
    </CalculatorProvider>
  )
}

export default App;
