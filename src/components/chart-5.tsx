import React from "react";
import { useRecoilState } from "recoil";
import { mockData } from "../pageData/mockData";
import { scadaCache } from "../state/store";

export const Chart5 = (appData) => {
  const defective = appData.appData.source?.product?.defective || 0
  const qualified = appData.appData.source?.product?.qualified || 0
  const totalUsed = defective + qualified

  const [scada] = useRecoilState(scadaCache);
  const allA =
    scada.baoding.inventory.materialA +
    mockData.chengdu.inventory.materialA +
    mockData.shanghai.inventory.materialA +
    mockData.xian.inventory.materialA;
  const allB =
    scada.baoding.inventory.materialB +
    mockData.chengdu.inventory.materialB +
    mockData.shanghai.inventory.materialB +
    mockData.xian.inventory.materialB;
  const allC =
    scada.baoding.inventory.materialC +
    mockData.chengdu.inventory.materialC +
    mockData.shanghai.inventory.materialC +
    mockData.xian.inventory.materialC;
  return (
    <div className="战果">
      <h2>全国用料库存</h2>
      <table>
        <thead>
          <tr>
            <th>用料</th>
            <th>保定</th>
            <th>成都</th>
            <th>上海</th>
            <th>西安</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>材料A</td>
            <td>{scada.baoding.inventory.materialA - totalUsed}</td>
            <td>{mockData.chengdu.inventory.materialA}</td>
            <td>{mockData.shanghai.inventory.materialA}</td>
            <td>{mockData.xian.inventory.materialA}</td>
            <td>{allA - totalUsed}</td>
          </tr>
          <tr>
            <td>材料B</td>
            <td>{scada.baoding.inventory.materialB - totalUsed}</td>
            <td>{mockData.chengdu.inventory.materialB}</td>
            <td>{mockData.shanghai.inventory.materialB}</td>
            <td>{mockData.xian.inventory.materialB}</td>
            <td>{allB - totalUsed}</td>
          </tr>
          <tr>
            <td>材料C</td>
            <td>{scada.baoding.inventory.materialC - totalUsed}</td>
            <td>{mockData.chengdu.inventory.materialC}</td>
            <td>{mockData.shanghai.inventory.materialC}</td>
            <td>{mockData.xian.inventory.materialC}</td>
            <td>{allC - totalUsed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
