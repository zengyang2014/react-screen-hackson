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
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', province === 'HeBei' ? baoding : china);
    const chinaGeoCoordMap = {
      '黑龙江': [127.9688, 45.368],
      '内蒙古': [110.3467, 41.4899],
      "吉林": [125.8154, 44.2584],
      '北京市': [116.4551, 40.2539],
      "辽宁": [123.1238, 42.1216],
      "河北": [114.4995, 38.1006],
      "天津": [117.4219, 39.4189],
      "山西": [112.3352, 37.9413],
      "陕西": [109.1162, 34.2004],
      "甘肃": [103.5901, 36.3043],
      "宁夏": [106.3586, 38.1775],
      "青海": [101.4038, 36.8207],
      "新疆": [87.9236, 43.5883],
      "西藏": [91.11, 29.97],
      "四川": [103.9526, 30.7617],
      "重庆": [108.384366, 30.439702],
      "山东": [117.1582, 36.8701],
      "河南": [113.4668, 34.6234],
      "江苏": [118.8062, 31.9208],
      "安徽": [117.29, 32.0581],
      "湖北": [114.3896, 30.6628],
      "浙江": [119.5313, 29.8773],
      "福建": [119.4543, 25.9222],
      "江西": [116.0046, 28.6633],
      "湖南": [113.0823, 28.2568],
      "贵州": [106.6992, 26.7682],
      "云南": [102.9199, 25.4663],
      "广东": [113.12244, 23.009505],
      "广西": [108.479, 23.1152],
      "海南": [110.3893, 19.8516],
      '上海': [121.4648, 31.2891]
    };
    var chinaDatas = [
      [{
        name: '黑龙江',
        value: 0
      }],    [{
        name: '内蒙古',
        value: 0
      }],    [{
        name: '吉林',
        value: 0
      }],    [{
        name: '辽宁',
        value: 0
      }],    [{
        name: '河北',
        value: 0
      }],    [{
        name: '天津',
        value: 0
      }],    [{
        name: '山西',
        value: 0
      }],    [{
        name: '陕西',
        value: 0
      }],    [{
        name: '甘肃',
        value: 0
      }],    [{
        name: '宁夏',
        value: 0
      }],    [{
        name: '青海',
        value: 0
      }],    [{
        name: '新疆',
        value: 0
      }],[{
        name: '西藏',
        value: 0
      }],    [{
        name: '四川',
        value: 0
      }],    [{
        name: '重庆',
        value: 0
      }],    [{
        name: '山东',
        value: 0
      }],    [{
        name: '河南',
        value: 0
      }],    [{
        name: '江苏',
        value: 0
      }],    [{
        name: '安徽',
        value: 0
      }],    [{
        name: '湖北',
        value: 0
      }],    [{
        name: '浙江',
        value: 0
      }],    [{
        name: '福建',
        value: 0
      }],    [{
        name: '江西',
        value: 0
      }],    [{
        name: '湖南',
        value: 0
      }],    [{
        name: '贵州',
        value: 0
      }],[{
        name: '广西',
        value: 0
      }],    [{
        name: '海南',
        value: 0
      }],    [{
        name: '上海',
        value: 1
      }]
    ];
    const convertData = function (data) {
      const res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551, 40.2539];//中心点地理坐标
        if (fromCoord && toCoord) {
          res.push([{
            coord: fromCoord,
            value: dataItem[0].value
          }, {
            coord: toCoord,
          }]);
        }
      }
      return res;
    };


    const options = createEchartsOptions({
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
        }
      ],
      geo: {
        show: true,
        map: "CN",
        componentType: 'geo'
      }
    })
    if (province !== "HeBei") {
    //   debugger
      options.series.push({
        type: 'lines',
        coordinateSystem:"geo",
        zlevel: 2,
        effect: {
          show: true,
          period: 0.8, //箭头指向速度，值越小速度越快
          trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          normal: {
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            curveness: .3 //尾迹线条曲直度
          }
        },
        data: [
          {coords: [
              [102.065735,30.658462], [115.4, 39.5006]
            ], value: 1},
          {coords: [
              [109.59069,36.096291], [115.4, 39.5006]
            ], value: 1},
          {coords: [
              [121.490317,31.222771], [115.4, 39.5006]
            ], value: 1},
        ]
      })
    }

    myChart.setOption(options)

    myChart.on('click', (eventParam) => {
      if (eventParam.name === '河北省') {
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
      {province === 'HeBei' && <button className='return-button' onClick={returnToChina}>返回</button>}
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
