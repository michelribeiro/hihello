import { createContext, ReactNode, useContext, useState } from 'react'

interface CalculatorProps {
  children: ReactNode;
}

interface CalculatorContextProps {
  calc: number
}

const CalculatorHook = createContext<CalculatorContextProps>({} as CalculatorContextProps)

export function CalculatorProvider({ children }: CalculatorProps): JSX.Element {
  const [calc, setCalc] = useState(0)

  return (
    <CalculatorHook.Provider value={{calc}}>
      {children}
    </CalculatorHook.Provider>
  )
}

export function useCalc(): CalculatorContextProps {
  const context = useContext(CalculatorHook)
  return context
}