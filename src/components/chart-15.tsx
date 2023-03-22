import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import "./chart-15.scss"

export const Chart15 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            color: '#F7A110',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2208, 2209, 2210, 2211, 2212, 2301, 2302, 2303],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100;
                    }
                }
            },
            series: [{
                type: 'line',
                data: [
                    0.19, 0.20, 0.26,
                    0.35, 0.26, 0.20,
                    0.08, 0.06
                ],
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
            <div ref={divRef} className="chart">   </div>
        </div>
    );
};
