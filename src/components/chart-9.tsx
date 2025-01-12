import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {useRecoilValue} from "recoil";
import {powerUsageState} from "../state/store";
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";

const dataLength = 8

export const Chart9 = ({data}) => {
  const divRef = useRef(null);
  const [province] = useRecoilState(provinceState)

  const powerUsage = useRecoilValue(powerUsageState)

  useEffect(() => {
    const chart = echarts.init(divRef.current);
    const date: string[] = []
    const powerValue = province === 'China' ? [3.01, 2.6, 3.65, 3.33, 3.12, 3.40, 3.28, 3.51] : [1.01, 1.6, 1.65, 1.33, 1.12, 1.40, 1.28, 1.51]
    let now = new Date()
    Array(dataLength).fill(0).forEach(() => {
      date.push(`${now.getDate()}/${now.getMonth()}`);
      now = new Date(now.getTime() - 3600 * 1000 * 24)
    })

    chart.setOption(createEchartsOptions({
      grid: {
        left: 30,
        top: 10,
        bottom: 20
      },
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date.reverse() || [],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val;
          },
          fontSize: 10
        }
      },
      series: [{
        type: 'line',
        data: powerValue,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    }));
  }, [province]);

  return (
    <div className="年龄段-图3">
      <h3>近期趋势图 - 万kW•h/百辆</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
