import { useState } from 'react'
import Styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className={Styles.counterContainer}>
      <div className={Styles.card}>
        <h1 className={Styles.counterTitle}>React Counter</h1>
        <div className={Styles.counter}>{count}</div>
        <div className={Styles.buttons}>
          <button className={`${Styles.increment} ${Styles.button}`} onClick={increment}>
            +
          </button>
          <button className={`${Styles.decrement} ${Styles.button}`} onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
