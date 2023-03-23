import React, {useEffect, useRef, useState} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";
import {useRecoilState} from "recoil";
import {powerUsageState} from "../state/store";
import {provinceState} from "../state/store";

export const Chart7=()=>{

  const [powerUsage, setPowerUsage] = useRecoilState(powerUsageState)
    const [power, setPower] = useState(3.56)
  const [province] = useRecoilState(provinceState)

  useEffect(() => {
    const defaultPower = province === 'China' ? 3.56 : 1
    const interval = setInterval(() => {
      setPowerUsage(powerUsage + (Math.random() - 0.5) * 0.01)
      setPower(defaultPower + (Math.random() - 0.5) * 0.01)
    }, 1000)
    return () =>{
      clearInterval(interval)
    }
  }, [province])

    return (
        <div className="年龄段-图1">
            <div className="chart">
              <div className="text"><span style={{fontSize: 36, fontWeight: 700}}>{(powerUsage).toFixed(5)}</span><br/>万KW•h</div>
            </div>
            <div className="legend">
                <span className="male"/>每百辆车耗电
            </div>
        </div>
    )
}
