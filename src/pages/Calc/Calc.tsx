import { useState } from 'react'
import Styles from './Calc.module.css'

const Calc: React.FC = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string>('')

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value)
  }

  const calculateResult = () => {
    try {
      // 数式の演算を行う
      const sanitizedInput = input.replace(/[^0-9+\-*/.]/g, '')
      const result = parseAndCompute(sanitizedInput)
      setInput(result.toString())
    } catch (e) {
      setResult('Error')
    }
  }

  const handleClear = () => {
    setInput('')
    setResult('')
  }

  // 数式をパースして計算する関数
  const parseAndCompute = (input: string): number => {
    // 分割して数と演算子に分ける
    const operators = input.split(/[\d.]+/).filter(Boolean)
    const operands = input.split(/[^0-9.]+/).map(Number)

    if (operators.length + 1 !== operands.length) {
      throw new Error('Invalid expression')
    }

    // 計算ロジック
    let computation = operands[0]
    operators.forEach((operator, index) => {
      const nextOperand = operands[index + 1]
      switch (operator) {
        case '+':
          computation += nextOperand
          break
        case '-':
          computation -= nextOperand
          break
        case '*':
          computation *= nextOperand
          break
        case '/':
          if (nextOperand === 0) throw new Error('Divide by zero')
          computation /= nextOperand
          break
        default:
          throw new Error('Unknown operator')
      }
    })
    return computation
  }

  return (
    <div className={Styles.centeredContainer}>
      <div className={Styles.calculatorWrapper}>
        <div className={Styles.screen}>{result || input || '0'}</div>
        <div className={Styles.buttonRow}>
          <button onClick={() => handleButtonClick('7')} className={Styles.button}>
            7
          </button>
          <button onClick={() => handleButtonClick('8')} className={Styles.button}>
            8
          </button>
          <button onClick={() => handleButtonClick('9')} className={Styles.button}>
            9
          </button>
          <button onClick={() => handleButtonClick('+')} className={Styles.button}>
            +
          </button>
        </div>
        <div className={Styles.buttonRow}>
          <button onClick={() => handleButtonClick('4')} className={Styles.button}>
            4
          </button>
          <button onClick={() => handleButtonClick('5')} className={Styles.button}>
            5
          </button>
          <button onClick={() => handleButtonClick('6')} className={Styles.button}>
            6
          </button>
          <button onClick={() => handleButtonClick('-')} className={Styles.button}>
            -
          </button>
        </div>
        <div className={Styles.buttonRow}>
          <button onClick={() => handleButtonClick('1')} className={Styles.button}>
            1
          </button>
          <button onClick={() => handleButtonClick('2')} className={Styles.button}>
            2
          </button>
          <button onClick={() => handleButtonClick('3')} className={Styles.button}>
            3
          </button>
          <button onClick={() => handleButtonClick('*')} className={Styles.button}>
            *
          </button>
        </div>
        <div className={Styles.buttonRow}>
          <button onClick={() => handleButtonClick('0')} className={Styles.button}>
            0
          </button>
          <button onClick={() => handleButtonClick('/')} className={Styles.button}>
            /
          </button>
          <button onClick={() => handleButtonClick('.')} className={Styles.button}>
            .
          </button>
          <button onClick={calculateResult} className={Styles.button}>
            =
          </button>
        </div>
        <button
          onClick={handleClear}
          className={`${Styles.button} ${Styles.clearButton}`}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default Calc
