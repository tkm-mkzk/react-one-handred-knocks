import { useEffect, useState } from 'react'
import Styles from './Timer.module.css'

const Timer = () => {
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    if (time === 0 && timerActive) {
      alert('タイマー終了！')
      setIsRunning(false)
      setTimerActive(false)
      // 効果音を再生するコードをここに追加
    }
  }, [time, timerActive])

  useEffect(() => {
    let interval: number | null = null

    if (isRunning && time > 0) {
      setTimerActive(true)
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (interval !== null) {
      window.clearInterval(interval)
    }

    return () => {
      if (interval !== null) window.clearInterval(interval)
    }
  }, [isRunning, time])

  const handleStart = () => {
    const min = parseInt(minutes, 10)
    const sec = parseInt(seconds, 10)
    if (!validateInput(min, sec)) return
    setTime(min * 60 + sec)
    setIsRunning(true)
  }

  const validateInput = (min: number, sec: number) => {
    if (min < 0 || min > 59 || isNaN(min) || sec < 0 || sec > 59 || isNaN(sec)) {
      alert('無効な時間です。0から59の間で分と秒を入力してください。')
      return false
    }
    return true
  }

  const formatTime = () => {
    let mins = Math.floor(time / 60)
    let secs = time % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimerActive(false)
    setTime(parseInt(minutes, 10) * 60 + parseInt(seconds, 10))
  }

  return (
    <div className={Styles.centeredContainer}>
      <div className={Styles.timerContainer}>
        <div className={Styles.timerCircle}>
          {!isRunning && time === 0 ? (
            <>
              <input
                type="text"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="分"
                className={Styles.timerInput}
              />
              <span>:</span>
              <input
                type="text"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="秒"
                className={Styles.timerInput}
              />
            </>
          ) : (
            <div className={Styles.timerNumber}>{formatTime()}</div>
          )}
        </div>
        <div className={Styles.timerControls}>
          <button className={Styles.timerButton} onClick={handleStart}>
            スタート
          </button>
          <button
            className={Styles.timerButton}
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            一時停止
          </button>
          <button className={Styles.timerButton} onClick={resetTimer}>
            リセット
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer
