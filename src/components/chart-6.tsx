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
import coordinates from '../geo/citys.json'


export const Chart6 = () => {
  const [province, setProvince] = useRecoilState(provinceState)
  const divRef = useRef(null);
  const colors = {'BaoDing': '#BB31F7', 'ChengDu': '#15B8FD', 'ShangHai': '#06E1EE', 'XiAn': '#04FBEE'};

  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', province === 'HeBei' ? baoding : china);
    const options = createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '保定市', value: 1},
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
            {name: '成都市', value: 100},
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
            {name: '莲池区', value: 100},
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
        }
      ],
      geo: {
        show: true,
        map: "CN",
        componentType: 'geo'
      }
    })
    if (province !== "HeBei") {
      const common = {
        type: 'lines',
        coordinateSystem: "geo",
        zlevel: 200000,
        effect: {
          show: true,
          period: 0.8, //箭头指向速度，值越小速度越快
          trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: .3, //尾迹线条曲直度
          color: "#ffdc60"
        }
      }

      options.series.push({
        ...common,
        data: [
          {
            coords: [
              coordinates["成都市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["西安市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["上海市"], coordinates["保定市"]
            ], value: 1
          },
        ]
      })
      options.series.push({
        ...common,
        lineStyle: {
          ...common.lineStyle,
          color: "#9fe080"
        },
        data: [
          {
            coords: [
              coordinates["珠海市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["乌鲁木齐市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["齐齐哈尔市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["沈阳市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["海口市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["拉萨市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["厦门市"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["台湾省"], coordinates["保定市"]
            ], value: 1
          },
          {
            coords: [
              coordinates["天津市"], coordinates["保定市"]
            ], value: 1
          }
        ]
      })
    }

    myChart.setOption(options)

    myChart.on('click', (eventParam) => {
      if (eventParam.name === '河北省') {
        setProvince('HeBei')
      }
    })
    return () => {
      myChart.dispose()
    }
  }, [province]);

  const returnToChina = (event) => {
    setProvince('China')
  }

  return (
    <div className="bordered the-map">
      <h2>{headerTextGen(province)}工厂分布地</h2>
      {province === 'HeBei' && <button className='return-button' onClick={returnToChina}>返回</button>}
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
