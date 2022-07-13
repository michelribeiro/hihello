import React from 'react';
import { useCalc } from 'hook/calculator';
import { Button } from '../Button';
import { Wrapper } from './styles';

export function Calculator() {
  const {
    stateActual,
    handleItem,
    clearCalculator,
    calcPercent,
    handleChangeSignal,
    handleOperador,
    calculatorFinal
  } = useCalc()

  return (
    <Wrapper>
      <div className="btns">
        <div className="screenNumber">
          {stateActual}
        </div>
        <Button onclick={clearCalculator} cNames="btn btnac" item={"AC"} />
        <Button onclick={handleChangeSignal} cNames="btn btnMaisMenos" item={"+/-"} />
        <Button onclick={calcPercent} cNames="btn btnPercent" item={"%"} />
        <Button cNames="btn btnDiv"  onclick={(e) => handleOperador(e)} item={"/"} />

        <Button cNames="btn btn7" onclick={(e) => handleItem(e)} item={"7"} />
        <Button cNames="btn btn8" onclick={(e) => handleItem(e)} item={"8"} />
        <Button cNames="btn btn9" onclick={(e) => handleItem(e)} item={"9"} />
        <Button cNames="btn btnx"  onclick={(e) => handleOperador(e)} item={"*"} />

        <Button cNames="btn btn4" onclick={(e) => handleItem(e)} item={"4"} />
        <Button cNames="btn btn5" onclick={(e) => handleItem(e)} item={"5"} />
        <Button cNames="btn btn6" onclick={(e) => handleItem(e)} item={"6"} />
        <Button cNames="btn btnLess"  onclick={(e) => handleOperador(e)} item={"-"} />

        <Button cNames="btn btn1" onclick={(e) => handleItem(e)} item={"1"} />
        <Button cNames="btn btn2" onclick={(e) => handleItem(e)} item={"2"} />
        <Button cNames="btn btn3" onclick={(e) => handleItem(e)} item={"3"} />
        <Button cNames="btn btnPlus" onclick={(e) => handleOperador(e)} item={"+"} />

        <Button cNames="btn btn0" onclick={(e) => handleItem(e)} item={"0"} />
        <Button cNames="btn btnDot" onclick={(e) => handleItem(e)} item={"."} />
        <Button cNames="btn btnEqual" onclick={calculatorFinal} item={"="} />
        
      </div>
    </Wrapper>
  )
}