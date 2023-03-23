import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import { useRecoilState } from 'recoil';
import { provinceState, scadaCache } from '../state/store';

export const Chart12 = () => {
    const divRef = useRef(null);
    const [province] = useRecoilState(provinceState)
    const [cache] = useRecoilState(scadaCache)

    useEffect(() => {
        let monthFault = {}
        if(province === 'China'){
            for(let i = 1; i < 13; i++){
                monthFault[i] = Object.values(cache).reduce((result, item)=>{
                    return result + item.faultTime.month[i]
                }, 0)
            }
        }else{
            monthFault = cache.baoding.faultTime.month
        }
        const data = [
            {value: monthFault[4], name: '4'},
            {value: monthFault[5], name: '5'},
            {value: monthFault[6], name: '6'},
            {value: monthFault[7], name: '7'},
            {value: monthFault[8], name: '8'},
            {value: monthFault[9], name: '9'},
            {value: monthFault[10], name: '10'},
            {value: monthFault[11], name: '11'},
            {value: monthFault[12], name: '12'},
            {value: monthFault[1], name: '1'},
            {value: monthFault[2], name: '2'},
            {value: monthFault[3], name: '3'},
        ];
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                textStyle: {color: 'white'},
                itemWidth: px(10),
                itemHeight: px(10),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value;
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['60%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: {show: false},
                    labelLine: {show: false},
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }));
    }, [province, cache]);

    return (
        <div className="chart12">
            <div className="chart" style={{height: px(400)}}>
                <div className="main" ref={divRef}/>
            </div>
        </div>
    );
};
