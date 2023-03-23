import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

const dataLength = 8

export const Chart9 = ({data}) => {
  const divRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current);
    const date: string[] = []
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
        data: [3.01, 2.6, 3.65, 3.33, 3.12, 3.40, 3.28, 3.51],
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
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>近期趋势图 - 万kW•h/百辆</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
