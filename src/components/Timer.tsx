import React, {useEffect, useState} from 'react';
import '../pages/home.scss';
const formatDigits = (digit: number, length: number) => {
  return (digit + "").padStart(length, "0")
}

export const Timer = () => {
  const [timer, setTimer] = useState("")

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const year = formatDigits(time.getFullYear(), 4)
      const month = formatDigits(time.getMonth() + 1, 2);
      const date = formatDigits(time.getDate(), 2);
      const hour = formatDigits(time.getHours(), 2);
      const minute = formatDigits(time.getMinutes(), 2);
      const seconds = formatDigits(time.getSeconds(), 2);
      const timeString = `${year}年${month}月${date} ${hour}:${minute}:${seconds}`
      setTimer(timeString)
    }, 1000)
  }, [])
  return (
    <div className={"title-timer"}>
      <div>{timer}</div>
    </div>
  );
};
