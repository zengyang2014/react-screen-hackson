import React from 'react';
import { useRecoilState } from 'recoil';
import { provinceState, scadaCache } from '../state/store';
import "./chart-14.scss"

export const Chart14 = () => {
  const [province] = useRecoilState(provinceState)
  const [cache] = useRecoilState(scadaCache)
  let displayNumber = []
  if (province === 'China') {
    for(let i =0; i < 9; i++){
      displayNumber[i] = cache.baoding.defectiveReason[i] + cache.chengdu.defectiveReason[i] + cache.xian.defectiveReason[i] + cache.shanghai.defectiveReason[i]
    }
  }else{
    displayNumber = cache.baoding.defectiveReason
  }
  return (
    <table className={"chart-14"}>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={3}>破损</td>
          <td>机器人校准失败</td>
          <td>{displayNumber[0]}</td>
          <td rowSpan={3}>21</td>
        </tr>
        <tr>
          <td>机床加工程序错误</td>
          <td>{displayNumber[1]}</td>
        </tr>
        <tr>
          <td>传送带定位阀错误</td>
          <td>{displayNumber[2]}</td>
        </tr>
        <tr>
          <td rowSpan={3}>裂缝</td>
          <td>加工温度异常</td>
          <td>{displayNumber[3]}</td>
          <td rowSpan={3}>25</td>
        </tr>
        <tr>
          <td>加工参数异常</td>
          <td>{displayNumber[4]}</td>
        </tr>
        <tr>
          <td>加工刀具破损</td>
          <td>{displayNumber[5]}</td>
        </tr>
        <tr>
          <td rowSpan={3}>剐蹭</td>
          <td>机械爪过紧</td>
          <td>{displayNumber[6]}</td>
          <td rowSpan={3}>25</td>
        </tr>
        <tr>
          <td>传送带异物</td>
          <td>{displayNumber[7]}</td>
        </tr>
        <tr>
          <td>机床内异物</td>
          <td>{displayNumber[8]}</td>
        </tr>
      </tbody>
    </table>
  );
};
