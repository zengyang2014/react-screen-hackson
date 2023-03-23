import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
import "./chart-1.scss";
import { useRecoilState } from "recoil";
import { provinceState } from "../state/store";
import { headerTextGen } from "./util/headerTextGen";
import { CityNames } from "../pageData/geo";
import { mockData } from "../pageData/mockData";

export const Chart1 = () => {
  const divRef = useRef(null);
  const [province] = useRecoilState(provinceState);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    const mouth = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
    const mouthCapacity = mouth.map((item) => {
      if (province === "China") {
        return (
          mockData.baoding.productStatus.month[item].capacity +
          mockData.xian.productStatus.month[item].capacity +
          mockData.chengdu.productStatus.month[item].capacity +
          mockData.shanghai.productStatus.month[item].capacity
        );
      } else {
        return mockData.baoding.productStatus.month[item].capacity;
      }
    });
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: mouth,
          axisTick: false,
          axisLabel: {
            fontSize: px(6),
            formatter(val) {
              console.log(val);
              if (val.length > 2) {
                const arr = val.split("");
                arr.splice(2, 0, "\n");
                return arr.join("");
              } else {
                return val;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLabel: {
            fontSize: 6,
          },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: mouthCapacity,
          },
        ],
      })
    );
  }, [province]);

  return (
    <div className="monthly-productive bordered">
      <h2>{headerTextGen(province)}月总产量</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
