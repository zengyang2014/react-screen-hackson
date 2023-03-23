import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from "../shared/px";
import { useRecoilState } from 'recoil';
import { provinceState, scadaCache } from '../state/store';
export const Chart13 = () => {
    const divRef = useRef(null);
    const [province] = useRecoilState(provinceState)
    const [cache] = useRecoilState(scadaCache)
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
    useEffect(() => {
        var myChart = echarts.init(divRef.current);

        myChart.setOption(createEchartsOptions({
            xAxis: {
                data: data.map(i => i.name),
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },

            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(value) {
                        return (value);
                    }
                }
            },
            series: [{
                type: 'bar',
                data: data.map(i => i.value),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                }, {
                    offset: 1,
                    color: '#1E34FA'
                }]),
            }]
        }));
    }, [province, cache]);

    return (
        <div ref={divRef} className="chart">
        </div>
    );
};
