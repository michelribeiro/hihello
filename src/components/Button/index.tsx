import React from 'react';
import { Btn } from './styles';

interface ButtonProps {
  item: string | number;
  cNames?: string
}

export function Button({ item, cNames }: ButtonProps) {
  return <Btn className={cNames}>{item}</Btn>
}