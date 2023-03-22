import React, {useEffect, useRef, useState} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from "../shared/create-echarts-options";
import {px} from "../shared/px";

export const Chart7=()=>{

    const [power, setPower] = useState(3.56)

  useEffect(() => {
    const interval = setInterval(() => {
      setPower(power + (Math.random() - 0.5) * 0.01)
    }, 1000)
    return () =>{
      clearInterval(interval)
    }
  }, [])

    return (
        <div className="年龄段-图1">
            <div className="chart">
              <div className="text"><span style={{fontSize: 36, fontWeight: 700}}>{(power).toFixed(5)}</span><br/>万KW•h</div>
            </div>
            <div className="legend">
                <span className="male"/>每百辆车耗电
            </div>
        </div>
    )
}
