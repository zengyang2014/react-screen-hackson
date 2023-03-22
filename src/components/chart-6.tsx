import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';
import baoding from '../geo/baoding.json'
import "./chart-6.scss"
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";
import {headerTextGen} from "./util/headerTextGen";


export const Chart6 = () => {
    const [province, setProvince] = useRecoilState(provinceState)
    const divRef = useRef(null);
    const colors = {'BaoDing': '#BB31F7', 'ChengDu': '#15B8FD', 'ShangHai': '#06E1EE', 'XiAn': '#04FBEE'};

    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', province === 'HeBei'? baoding : china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '河北省', value: 1},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['BaoDing'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '四川省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['ChengDu'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '上海市', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['ShangHai'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '陕西省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['XiAn'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '莲池区', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['XiAn'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
            ]
        }));

        myChart.on('click', (eventParam) => {
            if(eventParam.name === '河北省') {
                setProvince('HeBei')
            }
        })
    }, [province]);

    const returnToChina = (event) => {
      setProvince('China')
    }

    return (
        <div className="bordered the-map">
            <h2>{headerTextGen(province)}工厂分布地</h2>
            {province === 'HeBei'&&<button className='return-button' onClick={returnToChina}>返回</button>}
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    );
};
