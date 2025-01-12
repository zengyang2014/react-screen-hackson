import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart11 = () => {
    const divRef = useRef(null);
    const colors = ['#F46064', '#F38E1C'];
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            color: colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
                {
                    startAngle: -20,
                    type: 'pie',
                    radius: ['25%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: true, length: 0},
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    data: [
                        {value: 0.99999999, name: '良品率'},
                        {value: 0.00000001, name: '次品率'},
                    ]
                }
            ]
        }));
    }, []);

    return (
        <div className="chart11">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
            <div className="legend">
                <span style={{background: colors[0]}} />刑事
                <span style={{background: colors[1]}} />民事
                <span style={{background: colors[2]}} />经济
                <span style={{background: colors[3]}} />其他
            </div>
        </div>
    );
};
