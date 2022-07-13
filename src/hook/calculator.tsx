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

interface CalculatorContextProps {
  resultCalc: number
  handleNumber1: (number: Number) => void
  handleNumber2: (number: Number) => void
}

const CalculatorHook = createContext<CalculatorContextProps>({} as CalculatorContextProps)

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
    <CalculatorHook.Provider value={memorizeValue}>
      {children}
    </CalculatorHook.Provider>
  )
}

export function useCalc(): CalculatorContextProps {
  const context = useContext(CalculatorHook)
  return context
}