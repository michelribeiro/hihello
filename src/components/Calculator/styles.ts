import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--black);
  border-radius: 1em;
  /* display: inline-flex; */
  padding: 1rem;
  margin: 1rem auto;

  .btns {
    display: grid;
    gap: 1rem;
    grid-template-areas:
      "screenNumber screenNumber screenNumber screenNumber"
      "btnac btnMaisMenos btnPercent btnDiv"
      "btn7 btn8 btn9 btnx"
      "btn4 btn5 btn6 btnLess"
      "btn1 btn2 btn3 btnPlus"
      "btn0 btn0 btnDot btnEqual";
  }

  .btn {
    background: var(--grey);
    color: var(--white);
  }

  .screenNumber {
    grid-area: screenNumber;
    color: var(--white);
    padding-bottom: 1rem;
    height: 6rem;
    font-size: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .btnac {
    grid-area: btnac;
    font-size: 1rem;
    background: var(--grey-50);
    color: var(--black);
  }
  .btnMaisMenos {
    grid-area: btnMaisMenos;
    background: var(--grey-50);
    color: var(--black);
  }
  .btnPercent {
    grid-area: btnPercent;
    background: var(--grey-50);
    color: var(--black);
  }
  .btnDiv {
    grid-area: btnDiv;
    background-color: var(--orange);
    color: var(--white);
    transform: rotate(72deg);
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: ".";
      color: var(--white);
      margin-top: -15px;
    }
    &::after {
      content: ".";
      color: var(--white);
      margin-top: -9px;
    }
  }

  .btn7 {
    grid-area: btn7;
  }
  .btn8 {
    grid-area: btn8;
  }
  .btn9 {
    grid-area: btn9;
  }
  .btnx {
    grid-area: btnx;
    background-color: var(--orange);
    color: var(--white);
  }

  .btn4 {
    grid-area: btn4;
  }
  .btn5 {
    grid-area: btn5;
  }
  .btn6 {
    grid-area: btn6;
  }
  .btnLess {
    grid-area: btnLess;
    background-color: var(--orange);
    color: var(--white);
  }

  .btn1 {
    grid-area: btn1;
  }
  .btn2 {
    grid-area: btn2;
  }
  .btn3 {
    grid-area: btn3;
  }
  .btnPlus {
    grid-area: btnPlus;
    background-color: var(--orange);
    color: var(--white);
  }

  .btn0 {
    grid-area: btn0;
    width: 100%;
    text-align: left;
    padding-left: 1rem;
  }
  .btnDot {
    grid-area: btnDot;
  }
  .btnEqual {
    grid-area: btnEqual;
    background-color: var(--orange);
    color: var(--white);
  }


` 

// "btn0 btn0 btnDot btn=";