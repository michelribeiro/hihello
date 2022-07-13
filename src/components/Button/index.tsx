import React from 'react';
import { Btn } from './styles';

interface ButtonProps {
  item: string | number;
  cNames?: string
  onclick?: (n: any) => void;
}

export function Button({ item, cNames, onclick }: ButtonProps) {
  return (
      onclick ?
        <Btn onClick={() => onclick(item)} className={cNames}>{item}</Btn>
      :
        <Btn className={cNames}>{item}</Btn> 
  )
}