import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import "./chart-3.scss"
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";
import {headerTextGen} from "./util/headerTextGen";
import { CityNames, Citys } from '../pageData/geo';
import { mockData } from '../pageData/mockData';


export const Chart3 = () => {
    const divRef = useRef(null);
    const [province] = useRecoilState(provinceState)
    
    useEffect(() => {
        const days = [18, 19, 20, 21, 22, 23, 24]
        var myChart = echarts.init(divRef.current);
        let series = [
            {
                name: CityNames.chengdu,
                type: 'line',
                data: Object.values(mockData.chengdu.productStatus.day).map((item)=>{return item.capacity})
            },
            {
                name: CityNames.shanghai,
                type: 'line',
                data: Object.values(mockData.shanghai.productStatus.day).map((item)=>{return item.capacity})
            },
            {
                name:  CityNames.xian,
                type: 'line',
                data: Object.values(mockData.xian.productStatus.day).map((item)=>{return item.capacity})
            },
            {
                name: CityNames.baoding,
                type: 'line',
                data: Object.values(mockData.baoding.productStatus.day).map((item, key)=>{return item.capacity + key * 30})
            }
        ]

        if(province !== 'China'){
            series = [series[3]]
            console.log(series)
        }
        myChart.clear()
        myChart.setOption(createEchartsOptions({
            legend: {
                bottom: px(10),
                textStyle: {color: 'white'},
                itemWidth: px(30),
                itemHeight: px(16)
            },
            grid: {
                x: px(20),
                x2: px(20),
                y: px(20),
                y2: px(70),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: days,
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: 'value',
                data: [200, 400, 600, 800],
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val;
                    }
                }
            },
            series: series.map(obj => ({
                ...obj,
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)}
            }))
        }));
    }, [province]);

    const className = province === 'China' ? 'bordered daily-productive' : 'bordered daily-productive city'

    return (
        <div className={className}>
            <h2>{headerTextGen(province)}日总产量</h2>
            <div ref={divRef} className="chart"/>
        </div>
    );
};
