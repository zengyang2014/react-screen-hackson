import React, {useEffect, useState} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from "../components/chart-1";
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart5} from "../components/chart-5";
import {Chart6} from "../components/chart-6";
import {Chart7} from '../components/chart-7';
import {Chart9} from '../components/chart-9';
import {Chart12} from "../components/chart-12";
import {Chart13} from "../components/chart-13";
import {Chart14} from "../components/chart-14";
import {Chart15} from "../components/chart-15";
import {px} from "../shared/px";
import {Timer}from '../components/Timer'
import {useRecoilState} from "recoil";
import {provinceState} from "../state/store";
import {headerTextGen} from "../components/util/headerTextGen";


export const Home = ({data}) => {
  const year = new Date().getFullYear();
  const [province] = useRecoilState(provinceState)

  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}} className={"title"}>
        <div className={"title-text"}>
          工易赛博坦智能汽车制造产线
        </div>
        <Timer/>
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
        <section className="section4" style={{height: "100%"}}>
            <Chart6/>
        </section>
        <section className="section7">
          <div className="bordered 年龄段" style={{height: `${px(380)}px`}}>
            <h2>{headerTextGen(province)}能效统计</h2>
            <div className="charts">
              <Chart7/>
              {/* 能效统计 */}
              <Chart9 data={data}/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 defective-percentage" style={{height: '50%'}}>
            <h2>{headerTextGen(province)}次品趋势图</h2>
            <div className="charts">
              <Chart15/>
            </div>
          </div>
          <div className="bordered row2 non-failure-time" style={{height: "47%"}}>
            <h2>{headerTextGen(province)}产线月故障时间 （秒）</h2>
            <div className="charts" style={{height: `${px(350)} !important`}}>
              <Chart12/>
              <Chart13/>
            </div>
          </div>
        </section>
        <section className="section6">
          <div className="bordered row3 chart-14-box">
            <h2>{headerTextGen(province)}次品原因分析</h2>
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
