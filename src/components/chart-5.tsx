import React from 'react';

export const Chart5 = () => {
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
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>8</td>
        </tr>
        <tr>
          <td>材料B</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>8</td>
        </tr>
        <tr>
          <td>材料C</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>8</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
