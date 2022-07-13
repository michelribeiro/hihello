import React from 'react';
import { Button } from '../Button';
import { Wrapper } from './styles';

export function Calculator() {
  return (
    <Wrapper>
      <div className="btns">
        <Button cNames="btn btnac" item={"AC"} />
        <Button cNames="btn btnMaisMenos" item={"+/-"} />
        <Button cNames="btn btnPercent" item={"%"} />
        <Button cNames="btn btnDiv" item={"/"} />

        <Button cNames="btn btn7" item={"7"} />
        <Button cNames="btn btn8" item={"8"} />
        <Button cNames="btn btn9" item={"9"} />
        <Button cNames="btn btnx" item={"x"} />

        <Button cNames="btn btn4" item={"4"} />
        <Button cNames="btn btn5" item={"5"} />
        <Button cNames="btn btn6" item={"6"} />
        <Button cNames="btn btnLess" item={"-"} />

        <Button cNames="btn btn1" item={"1"} />
        <Button cNames="btn btn2" item={"2"} />
        <Button cNames="btn btn3" item={"3"} />
        <Button cNames="btn btnPlus" item={"+"} />

        <Button cNames="btn btn0" item={"0"} />
        <Button cNames="btn btnDot" item={"."} />
        <Button cNames="btn btnEqual" item={"="} />
        
      </div>
    </Wrapper>
  )
}