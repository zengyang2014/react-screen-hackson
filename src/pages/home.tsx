import React, {useEffect, useState} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart5} from "../components/chart-5";
import {Chart6} from "../components/chart-6";
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';
import {Chart9} from '../components/chart-9';
import {Chart10} from "../components/chart-10";
import {Chart11} from "../components/chart-11";
import {Chart12} from "../components/chart-12";
import {Chart13} from "../components/chart-13";
import {Chart14} from "../components/chart-14";
import {Chart15} from "../components/chart-15";
import {px} from "../shared/px";

const formatDigits = (digit: number, length: number) => {
  return (digit + "").padStart(length, "0")
}

export const Home = () => {
  const year = new Date().getFullYear();

  const [timer, setTimer] = useState("")

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const year = formatDigits(time.getFullYear(), 4)
      const month = formatDigits(time.getMonth() + 1, 2);
      const date = formatDigits(time.getDate(), 2);
      const hour = formatDigits(time.getHours(), 2);
      const minute = formatDigits(time.getMinutes(), 2);
      const seconds = formatDigits(time.getSeconds(), 2);
      const timeString = `${year}年${month}月${date} ${hour}:${minute}:${seconds}`
      setTimer(timeString)
    }, 1000)
  }, [])

  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}} className={"title"}>
        <div className={"title-text"}>
          工易赛博坦智能汽车制造产线
        </div>
        <div className={"title-timer"}>
          <div>
            {timer}
          </div>
        </div>
      </header>
      <main>
        <section className="section1">
          <Chart1></Chart1>
          <Chart2></Chart2>
        </section>
        <section className="section2">
          <Chart3/>
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="section4">
          <div className="bordered">
            <Chart6/>
          </div>
          <div className="bordered 年龄段" style={{height: `${px(370)}px`}}>
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 defective-percentage">
            <h2>次品趋势图</h2>
            <div className="charts">
              <Chart15/>
            </div>
          </div>
          <div className="bordered row2 non-failure-time" style={{height: `${px(390)}px`}}>
            <h2>平均故障时间</h2>
            <div className="charts" style={{height: `${px(350)} !important`}}>
              <Chart12/>
              <Chart13/>
            </div>
          </div>
        </section>
        <section>
          <div className="bordered row3 chart-14-box">
            <h2>次品原因分析</h2>
            <Chart14/>
          </div>
        </section>
      </main>
      <footer>
        &copy; Hackathon Team 5 工易赛博坦 {year} 智能汽车生产线
      </footer>
    </div>
  );
};
