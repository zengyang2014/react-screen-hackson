import React, {useEffect, useRef, useState} from "react";
import "./chart-15.scss";
import "./chart-16.scss"

const _ = (str: string | number) => {
  return (str + '').padStart(2, "0")
}

const format = (time: Date) => {
  return `${time.getFullYear()}-${_(time.getMonth() + 1 + '')}-${_(time.getDate())} ${time.getHours()}:${_(time.getMinutes())}:${_(time.getSeconds())}`
}

export const Chart16 = ({appData}) => {

  const [data, setData] = useState([])
  const [oldData, setOldData] = useState([])

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
    if (appData?.source?.faultReason){
      let faultIndex = -1;
      const newData = appData.source.faultReason;
      for (let i = 0; i < newData.length; i++) {
        if (oldData[i] !== newData[i] && newData[i] > 0){
          faultIndex = i;
          setOldData(appData.source.faultReason)
          break
        }
      }
      if (faultIndex !== -1){
        setData([
          {reason: faultIndex, date: new Date()},
          ...data
        ])
      }
    }
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
