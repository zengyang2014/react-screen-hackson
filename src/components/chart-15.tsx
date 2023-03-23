import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import "./chart-15.scss";
import { mockData } from "../pageData/mockData";
import { useRecoilState } from "recoil";
import { provinceState } from "../state/store";

export const Chart15 = (appData) => {
  const divRef = useRef(null);
  const [province] = useRecoilState(provinceState);

  const defective = appData.appData.source?.product?.defective || 0


  const currentTotalNumber = 10000
  const currentDefective = 240
  const totalDefective = currentDefective + defective
  const perfectRate = 1 - ((currentDefective + defective) / (currentTotalNumber + defective))

  useEffect(() => {
    if(province === 'China') {
      var myChart = echarts.init(divRef.current);
      const months = [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
      const monthData = months.map((month) => {
        if (province === "China") {
          return (
            mockData.baoding.productStatus.month[month].defective +
            mockData.chengdu.productStatus.month[month].defective +
            mockData.xian.productStatus.month[month].defective +
            mockData.shanghai.productStatus.month[month].defective
          );
        } else {
          return mockData.baoding.productStatus.month[month].defective;
        }
      });
      myChart.setOption(
        createEchartsOptions({
          color: "#F7A110",
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: months,
            splitLine: { show: true, lineStyle: { color: "#073E78" } },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: "#073E78" } },
            axisLabel: {
              formatter(val) {
                return val;
              },
            },
          },
          series: [
            {
              type: "line",
              data: monthData,
              symbol: "circle",
              symbolSize: px(12),
              lineStyle: { width: px(2) },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#F7A110",
                  },
                  {
                    offset: 1,
                    color: "#1B1D52",
                  },
                ]),
              },
            },
          ],
        })
      );
    }
  }, [province]);

  return (
    <div className="年龄段-图3">
      {province === 'China' && <div ref={divRef} className="chart">
        {" "}
      </div>}
      {province === 'HeBei' &&
        <>
          <span className='passOnceSpan1'>投产以来一次合格率</span>
          <span className='passOnceSpan2'>{(perfectRate * 100).toFixed(2)}%</span>
            <span className='passOnceSpan3'>一次未合格个数</span>
            <span className='passOnceSpan4'>{totalDefective}</span>
        </>}
    </div>
  );
};
