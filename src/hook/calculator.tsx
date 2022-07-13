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
  stateActual: string
  handleItem: (number: string) => void
  clearCalculator: () => void
  calcPercent: () => void
  handleChangeSignal: () => void
  handleOperador: (kind: string) => void
  calculatorFinal: () => void
}

const CalculatorContext = createContext<CalculatorContextData>({} as CalculatorContextData)

export function CalculatorProvider({ children }: CalculatorProps): JSX.Element {
  const [stateActual, setStateActual] = useState("0")
  const [kindOperator, setKindOperator] = useState<string>("")
  const [number1, setNumber1] = useState("")

  const handleItem = useCallback(async (val: string) => {
    if (stateActual.length < 9) {
    if (stateActual === "0") {
      setStateActual(val)
    } else {
      setStateActual(stateActual + val)
      }
    }
  }, [stateActual]);


  const clearCalculator = useCallback(async () => {
    setStateActual("0")
  }, []);

  const calcPercent = useCallback(async () => {
    const percent = Number(stateActual) / 100;
    setStateActual(String(percent))
  },[stateActual])

  const handleChangeSignal = useCallback(async () => {
    if (Number(stateActual) > 0) {
      setStateActual(`-${stateActual}`)
    } else {
      const convertion = Math.abs(parseFloat(stateActual))
      setStateActual(String(convertion))
    }
  }, [stateActual]);

  const handleOperador = useCallback(async (kind: string) => {
    setKindOperator(kind)
    setNumber1(stateActual)
    setStateActual("0")
  },[stateActual]);

  const calculatorFinal = useCallback(async () => {
    switch (kindOperator) {
      case "/":
        const div = Number(number1)/Number(stateActual)
        setStateActual(String(div))
        break;
      case "+":
        setStateActual(String(Number(number1)+Number(stateActual)))
        break;
      case "-":
        setStateActual(String(Number(number1)-Number(stateActual)))
        break;
      case "*":
        setStateActual(String(Number(number1)*Number(stateActual)))
        break;
    }
  },[kindOperator, number1, stateActual]);


  const memorizeValue = useMemo(() => {
    return {
      stateActual,
      handleItem,
      clearCalculator,
      calcPercent,
      handleChangeSignal,
      handleOperador,
      calculatorFinal
    };
  }, [
    stateActual,
    handleItem,
    clearCalculator,
    calcPercent,
    handleChangeSignal,
    handleOperador,
    calculatorFinal
  ]);

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