import React, { useState, Component } from "react";

import "../scss/teacher.scss";

export default function Teachers(props) {
  return (
    <div className="teachers">
      
      <div className="bg-1">
        <div className="title">
          <a>優師培訓</a>
        </div>
        <div className="team-title">團隊介紹</div>
        <div className="container">
          <div className="cells">
            {
              // Creater cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="creater-title">
                  <msg>創辦人</msg>
                </div>
                <div className="creater-photo-bg">
                  <div className="creater-photo">
                    <img src="/assets/Image/Teachers/img (1).png"></img>
                  </div>
                </div>
              </div>
              <div className="creater-name">
                <msg>
                  謝協君<submsg> 教授</submsg>
                </msg>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>國立彰化師範大學 特殊教育 博士</firstmsg>
                  <br />
                  <msg>紐約大學（New York University）發展障礙組 碩士</msg>
                  <br />
                  <lastmsg>私立中山醫學大學 職能治療 學士</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>國立清華大學特殊教育學系 專任教授</firstmsg>
                  <br />
                  <msg>國立新竹教育大學特殊教育學系 專任副教授</msg>
                  <br />
                  <msg>私立輔仁大學職能治療學系 專任助理教授</msg>
                  <br />
                  <lastmsg>署立桃園醫院 職能治療師</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (2).png"></img>
                </div>
                <div className="name">
                  <msg>黃姿涵</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>國立清華大學學前特殊教育學位學程</firstmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>100年~新竹縣文化局故事團隊 - 故事老師</firstmsg>
                  <br />
                  <lastmsg>100年~廠商特約說故事（親子餐廳、友善</lastmsg>
                  <br />
                  <msg>公託、親子館、圖書館、百貨公司、繪本館...）</msg>
                  <br />
                  <lastmsg>107年苗栗家庭教育中心志工培訓</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (3).png"></img>
                </div>
                <div className="name">
                  <msg>鄭幸妮</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>國立清華大學學前特殊教育學位學程碩士</firstmsg>
                  <br />
                  <lastmsg>仁德醫護管理專科職能治療副學士</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>國家職能治療師高考合格 職字 003373 號</firstmsg>
                  <br />
                  <msg>長照專業醫療服務人員</msg>
                  <br />
                  <msg>振生醫院小兒職能治療師</msg>
                  <br />
                  <msg>桃園生學校學校系統巡迴職能治療師</msg>
                  <br />
                  <msg>桃園生藍迪機構專聘任職能治療師</msg>
                  <br />
                  <msg>桃園生大崗國小、文欣幼兒園特聘特殊教育研習講師</msg>
                  <br />
                  <lastmsg>宏仁醫院職能治療師</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>專長：</msgtitle>
                  <firstmsg>國立清華大學學前特殊教育學位學程碩士</firstmsg>
                  <br />
                  <lastmsg>仁德醫護管理專科職能治療副學士</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (4).png"></img>
                </div>
                <div className="name">
                  <msg>黃為</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>應用外語研究所 畢業</firstmsg>
                  <br />
                  <lastmsg>國立清華大學學前特教在職碩士專班 研究生</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>私立幼兒園、托嬰中心行政主管</firstmsg>
                  <br />
                  <msg>幼兒美語教室、音樂律動教師</msg>
                  <br />
                  <msg>幼教領域十五年工作經驗</msg>
                  <br />
                  <lastmsg>合格保母證照</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>專業培訓：</msgtitle>
                  <firstmsg>兒少福利機構主管人員專業培訓結業</firstmsg>
                  <br />
                  <msg>華德福幼教師資培訓結業</msg>
                  <br />
                  <msg>兒童美語師資培訓結業</msg>
                  <br />
                  <lastmsg>奧福音樂培訓結業</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (5).png"></img>
                </div>
                <div className="name">
                  <msg>葉佐田</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>私立宏光科技大學物理治療系 畢業</firstmsg>
                  <br />
                  <lastmsg>國立清華大學學前特教研究所 碩一</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>骨科診所物理治療人員</firstmsg>
                  <br />
                  <msg>新竹市兒童發展中心</msg>
                  <br />
                  <msg>新北市晨曦發展中心</msg>
                  <br />
                  <msg>新竹縣華光基金會</msg>
                  <br />
                  <msg>早療教師/巡迴輔導教師</msg>
                  <br />
                  <msg>到宅及到園療癒教師</msg>
                  <br />
                  <msg>偏鄉到宅療癒教師</msg>
                  <br />
                  <lastmsg>私立道禾小學暨幼兒園 特教教師</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (6).png"></img>
                </div>
                <div className="name">
                  <msg>林宜萱</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>現職：</msgtitle>
                  <firstmsg>學前特教老師</firstmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>私立幼兒園、托嬰中心行政主管</firstmsg>
                  <br />
                  <msg>幼兒美語教室、音樂律動教師</msg>
                  <br />
                  <msg>幼教領域十五年工作經驗</msg>
                  <br />
                  <lastmsg>合格保母證照</lastmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>新竹市智障福利協進會暑期守護</firstmsg>
                  <br />
                  <msg>希望種子成長營 特教老師</msg>
                  <br />
                  <lastmsg>聯電聖心課輔中心 課輔老師</lastmsg>
                </div>
              </div>
            </div>
            {
              // Teacher cell
            }
            <div className="cell">
              <div className="profile-container">
                <div className="photo">
                  <img src="/assets/Image/Teachers/img (7).png"></img>
                </div>
                <div className="name">
                  <msg>林宜蓁</msg>
                </div>
              </div>
              <div className="resume-container">
                <div className="resume-cell">
                  <msgtitle>學歷：</msgtitle>
                  <firstmsg>國立清華大學特殊教育學系 學士</firstmsg>
                </div>
                <div className="resume-cell">
                  <msgtitle>經歷：</msgtitle>
                  <firstmsg>國際STEAM教育協會 講師</firstmsg>
                  <br />
                  <msg>107學年台南大學師資培育課程委員會 委員</msg>
                  <br />
                  <msg>國立台南大學特教系110級 系會長</msg>
                  <br />
                  <msg>聯華電子課輔中心 種子老師</msg>
                  <br />
                  <lastmsg>台南寒假短期偏鄉特殊教育育樂營 特教老師</lastmsg>
                </div>
              </div>
            </div>
            {
              //
            }
          </div>
        </div>
      </div>
      <div className="img-child">
        <div className="title">優 師 培 訓 計 畫</div>
        <img src="/assets/Image/Teachers/teacher-child.png" />
      </div>
      <div className="bg-2">
        <div className="img-structure">
          <div className="teaching-philo">
            <div pos="l">培 訓 理 念</div>
            <div pos="r">
              因應早療黃金期的重要性，以及早期療教育人員的短缺，期望透過專業培訓和教師智能檢定，培訓出願意投入特殊教育工作的夥伴們。
            </div>
          </div>
          <img src="/assets/Image/Teachers/teacher-structure.png" />
        </div>
      </div>
      <div className="img-programtitle">
        <img src="/assets/Image/Teachers/teacher-programtitle.png" />
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src="/assets/Image/Teachers/bg-3.png"
          style={{
            width: "100%",
          }}
        ></img>
        <div className="lesson-container">
          <div className="block">
            <div className="lesson">
              <div className="title">特 教 一 般 知 能</div>
              {/* <div className="desc-container">
          <div className="point">1</div>
          <img className="img"></img>
        </div> */}
            </div>
            <div className="lesson">
              <div className="title">課 程 設 計 與 教 學 調 整</div>
            </div>
            <div className="lesson">
              <div className="title">班 級 經 營 育 輔 導</div>
            </div>
          </div>
          <div className="block">
            <div className="lesson">
              <div className="title">身 心 障 礙 學 生 評 量 與 輔 導</div>
            </div>
            <div className="lesson">
              <div className="title">親 師 互 動 與 團 隊 合 作</div>
              <div className="desc-container">
                <div className="point">親 師 合 作 與 家 庭 支 援</div>
                <div className="point">特 教 資 源 整 合 運 用</div>
                <div className="point">專 業 合 作 與 溝 通</div>
                <img className="img" src="/assets/Image/slider0.jpg"></img>
              </div>
            </div>
            <div className="lesson"></div>
          </div>
        </div>
      </div>
      <div className="img-detail">
        <img src="/assets/Image/Teachers/teacher-detail.png"></img>
        <div className="links-container">
          <div className="detail-links">
            <a href="./working" className="link">
              線上專人諮詢
            </a>
            <a href="./working" className="link">
              早療相關資訊
            </a>
            <a href="./working" className="link">
              課程報名
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
