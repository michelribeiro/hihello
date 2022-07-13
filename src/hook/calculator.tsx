import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useCallback } from 'react'

interface CalculatorProps {
  children: ReactNode;
}

interface CalculatorContextData {
  resultCalc: number
  handleNumber1: (number: Number) => void
  handleNumber2: (number: Number) => void
}

const CalculatorContext = createContext<CalculatorContextData>({} as CalculatorContextData)

export function CalculatorProvider({ children }: CalculatorProps): JSX.Element {
  const [resultCalc, setResultCalc] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const handleNumber1 = useCallback(async (number: Number) => {
    setNumber1(Number(number))
  }, []);

  const handleNumber2 = useCallback(async (number: Number) => {
    setNumber2(Number(number))
  }, []);

  const memorizeValue = useMemo(() => {
    return {
      resultCalc, handleNumber1, handleNumber2
    };
  }, [resultCalc, handleNumber1, handleNumber2]);

  return (
    <CalculatorContext.Provider value={memorizeValue}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalc(): CalculatorContextData {
  const context = useContext(CalculatorContext)
  return context
}