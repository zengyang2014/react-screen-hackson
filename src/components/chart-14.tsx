import React from 'react';
import "./chart-14.scss"

export const Chart14 = () => {
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
                <td>15</td>
                <td rowSpan={3}>21</td>
            </tr>
            <tr>
                <td>机床加工程序错误</td>
                <td>2</td>
            </tr>
            <tr>
                <td>传送带定位阀错误</td>
                <td>4</td>
            </tr>
            <tr>
                <td rowSpan={3}>裂缝</td>
                <td>加工温度异常</td>
                <td>5</td>
                <td rowSpan={3}>25</td>
            </tr>
            <tr>
                <td>加工参数异常</td>
                <td>2</td>
            </tr>
            <tr>
                <td>加工刀具破损</td>
                <td>18</td>
            </tr>
            <tr>
                <td rowSpan={3}>剐蹭</td>
                <td>机械爪过紧</td>
                <td>10</td>
                <td rowSpan={3}>25</td>
            </tr>
            <tr>
                <td>传送带异物</td>
                <td>8</td>
            </tr>
            <tr>
                <td>机床内异物</td>
                <td>7</td>
            </tr>
            </tbody>
        </table>
    );
};
