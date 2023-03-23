import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";
import {headerTextGen} from "./util/headerTextGen";

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const [province] = useRecoilState(provinceState)
    const data = [
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
            x(data);
        } else {
            divRef.current
        }
    }, [province]);

    return (
        <div className="bordered daily-productive-sort">
            <h2>{headerTextGen(province)}日产量排名</h2>
            {province === 'China'&&
                <><div ref={divRef} className="chart"/>
                <div className="legend">
                <span className="first"/> 保定
                <span className="second"/> 成都
                </div>
                </>
            }
            {province === 'HeBei'&&
              <span className='rank'>No. 01</span>
            }

        </div>
    );
};
