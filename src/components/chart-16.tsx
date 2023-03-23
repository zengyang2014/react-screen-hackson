import React, {useEffect, useRef} from "react";
import "./chart-15.scss";
import "./chart-16.scss"

const _ = (str: string | number) => {
  return (str + '').padStart(2, "0")
}

const format = (time: Date) => {
  return `${time.getFullYear()}-${_(time.getMonth() + 1 + '')}-${_(time.getDate())} ${time.getHours()}:${_(time.getMinutes())}:${_(time.getSeconds())}`
}

export const Chart16 = (appData) => {

  const data = [
    {
      id: 1,
      date: new Date(),
      reason: 6,
      location: "保定工厂",
    },
    {
      id: 2,
      date: new Date(),
      reason: 5,
      location: "保定工厂",
    },
    {
      id: 3,
      date: new Date(),
      reason: 1,
      location: "保定工厂",
    },
    {
      id: 4,
      date: new Date(),
      reason: 3,
      location: "保定工厂",
    },
    {
      id: 5,
      date: new Date(),
      reason: 3,
      location: "保定工厂",
    }
  ]

  const reasonArray = [
    "机器人校准失败",
    "机床加工程序错误",
    "传送带定位阀错误",
    "加工温度异常",
    "加工参数异常",
    "加工刀具破损",
    "机械爪过紧",
    "传送带异物",
    "机床内异物"]

  useEffect(() => {
    console.log(appData)
  }, [appData])

  return (
    <div className="chart-16-box" style={{flex: "grow"}}>
      <ul>
        {data.map((d, index) =>
          <li key={d.id} className={`list-item ${index === 0? 'spark': ''}`}>
            <span>{format(d.date)}</span>,
            因【<span>[{reasonArray[d.reason]}</span>】产品生产不合格
          </li>
        )}
      </ul>
    </div>
  );
};
