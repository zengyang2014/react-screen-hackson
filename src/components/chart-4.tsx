import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";
import {headerTextGen} from "./util/headerTextGen";
import FlipNumbers from "react-flip-numbers";
import './chart-4.scss'

export const Chart4 = (data) => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const [province] = useRecoilState(provinceState)

    const [productive, setProductivity] = useState(0)

    const cityData = [
        {name: '保定', 2011: 5},
        {name: '成都', 2011: 4},
        {name: '上海', 2011: 3},
        {name: '西安', 2011: 3},
    ];
    const x = (data) => {
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: data.map(i => i.name),
                axisLabel: {
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: data.map(i => i[2011]),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034F9'
                            }, {
                                offset: 1,
                                color: '#04A1FF'
                            }]),
                        }
                    }
                }
            ]
        }));

    };
    useEffect(() => {
        if (province === 'China') {
            myChart.current = echarts.init(divRef.current);
            x(cityData);
        } else {
            divRef.current
        }
    }, [province]);

    useEffect(() => {
        setProductivity(data.data.source?.product?.qualified || 0)
    }, [data])

    return (
        <div className="bordered daily-productive-sort city">
            <h2>{headerTextGen(province)}当日产量</h2>
            {province === 'HeBei'&&
              <span className='rank' style={{top: '42%'}}><FlipNumbers color='#f7a110' height={50} width={30} background="inherits" play perspective={500} numbers={productive.toString()} /></span>
            }

        </div>
    );
};
