import React, { useState, Component } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "../scss/lesson.scss";

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.properties = {
      indicators: false,
      transitionDuration: 300,
      autoplay: false,
      infinite: true,
      arrows: true,
      pauseOnHover: true,
      prevArrow: <div></div>,
      nextArrow: <div></div>,
      onChange: (oldIndex, newIndex) => {},
    };

    this.slideRef = null;

    this.state = {};

    this.scrollSetting = { behavior: "smooth", block: "start" };

    this.lesson_links = [
      {
        name: "線上專人諮詢",
        url: "/contact",
      },
      {
        name: "最新開課資訊",
        url: "/working",
      },
    ];

    this.sections = [
      {
        name: "感覺統合",
      },
      {
        name: "語言理解課程",
      },
      {
        name: "樂高機器人",
      },
      {
        name: "情緒行為課程",
      },
    ];

    this.SectionTitle = this.SectionTitle.bind(this);
  }

  SectionTitle(i) {
    return (
      <div className="section-title" id={`section_${i}`}>
        <div>
          <span>{this.sections[i].name}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="lesson">
        <div id="link-holder">
          <img src="/assets/Image/Lesson/bg1.png"></img>
          <div className="links">
            {this.sections.map((v, i) => {
              return (
                <div
                  className="button_white_opa_hover"
                  onClick={() => {
                    document
                      .getElementById(`section_${i}`)
                      .scrollIntoView(this.scrollSetting);
                  }}
                >
                  {v.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="hybrid-container">
          <div className="background-img-container">
            <img src="/assets/Image/Lesson/bg2.png"></img>
            <img src="/assets/Image/Lesson/bg3.png"></img>
            <img src="/assets/Image/Lesson/bg4.png"></img>
            <img src="/assets/Image/Lesson/bg5.png"></img>
            <img src="/assets/Image/Lesson/bg6.png"></img>
            <img src="/assets/Image/Lesson/bg7.png"></img>
            <img src="/assets/Image/Lesson/bg8.png"></img>
            <img src="/assets/Image/Lesson/bg9.png"></img>
            <img src="/assets/Image/Lesson/bg10.png"></img>
            <img src="/assets/Image/Lesson/bg11.png"></img>
            <img src="/assets/Image/Lesson/bg12.png"></img>
            <img
              src="/assets/Image/Lesson/bg13.png"
              style={{
                marginTop: "-700px",
              }}
            ></img>
          </div>

          <div className="background-container">
            <div></div>
          </div>

          <div className="content-container">
            {this.SectionTitle(0)}
            <div className="content-block">
              <div className="title">什麼是感覺統合?</div>
              <div className="text">
                {
                  "感覺統合的概念是由職能治療師--愛爾絲博士(Dr.Ayres)所提出，並將感覺統合定義為「組織來自身體及環境之感覺的過程，使得身體能在環境中有效率的運用」。\n感覺包括觸覺、感知搖晃的感覺(前庭覺)、覺察身體各部位的感覺(本體覺)、視覺、聽覺、嗅覺、及味覺，接受器接受到訊息後會傳送到大腦，大腦會整合、解釋來自身體與環境的感覺刺激訊息，並跟據得到的訊息，策畫相對應的行為。"
                }
              </div>
            </div>
            <div className="content-block">
              <img
                className="yield img"
                style={{
                  height: "200px",
                }}
              ></img>
            </div>
            <div className="content-block">
              <div className="text">
                {
                  "感覺統合協助孩童認識自己、適應環境、調整學習力，是日後複雜學習 能力的重要基礎。感覺統合在日常的兒童遊戲活動過程中發展出來，並 呈現在動作計畫能力上，大腦就像一個感覺處理機器，透過感官，吸收 大量資訊，藉由視覺、聽覺、動覺等各種感覺，幫助自己與周遭的人事 物互動，並震展出適當的行為。"
                }
              </div>
            </div>
            <div className="content-block">
              <div className="title2">那些孩子需要感覺統合課程訓練?</div>
              <div className="text2">
                {[
                  "討厭被觸碰、不愛洗臉、不愛剪指甲、不能接受較大的聲音。",
                  "不怕跌倒、對疼痛較無反應、對髒沒有反應。",
                  "怕高怕跌倒、不喜愛爬樓梯、易暈眩。",
                  "易寫相反字、衝來衝去、喜旋轉、易撞翻物品或撞到傢俱。",
                  "該使用多大力氣開罐子、手該伸多遠去拿物品、彎腰幅度要多少才能撿到地上物品、行動時容易撞到別人及出現施力不 當等情況。",
                  "專注力問題、易分心、坐不住、發呆恍神及常常漏掉訊息。",
                  "人際互動間題和情緒控制等問題。",
                  "活動量過高或過低，無法讓自己安靜，衝動、缺乏自制力。",
                  "轉換環境、情境很困難。",
                  "語言或動作發展遲緩。",
                  "學習能力不佳或學業成就落後。",
                ].map((v, i) => {
                  return (
                    <div key={i} className="point">
                      {v}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-block">
              <div className="class_lesson">
                <div className="title">開設課程一：遊玩感覺統合</div>
                <div className="text">
                  {
                    "讓寶貝有足夠的刺激輸入，使大腦接獲處理大量的感覺訊息，擁有良好的感覺統合，讓寶貝能排出這些感覺訊息的重要順序，並讓寶貝能更專注於正在進行的活動，進而提高學習效率。"
                  }
                </div>
                <img
                  className="img"
                  src="/assets/Image/Lesson/lesson_1.png"
                ></img>
              </div>
            </div>
            <div className="content-block">
              <img
                className="yield img"
                style={{
                  height: "300px",
                }}
              ></img>
            </div>
            <div className="content-block full">
              <div className="general-container">
                <img src="/assets/Image/Lesson/lesson_2.png"></img>
                <span id="slogan_1">及早治療　發展健全</span>
              </div>
            </div>
            <div className="content-block">
              <div className="title">與環境互動「手部技巧」是關鍵?</div>
              <div className="text">
                {
                  "手是最常用來完成工作、遊戲，手是日常活動的「工具」，當手部技巧不佳時則容易出現上訴情況。然而其中手部技巧發展的好與不好，絕對脫離不了「視覺」。 "
                }
              </div>
            </div>
            <div className="content-block">
              <div className="title">視覺動作整合是什麼?</div>
              <div className="text">
                {
                  "即是一般常聽到的「手眼協調」，指視覺技巧、視覺認知技巧和動 作技巧之間的交互影響。當孩子學習新技巧時，幾乎都需要視覺與 協調的動作技巧來運作執行。"
                }
              </div>

              <div className="img duo neighbor">
                <img
                  src="/assets/Image/Lesson/lesson_3.png"
                  style={{ marginTop: "100px" }}
                ></img>
                <img
                  src="/assets/Image/Lesson/lesson_4.png"
                  style={{ verticalAlign: "top" }}
                ></img>
              </div>
            </div>
            {this.SectionTitle(1)}
            <div className="content-block">
              <div className="title">語言的課程目標</div>
              <div className="text">
                {
                  "從具體到抽象事物的語詞理解與應用、區辨語音、發出語音、理 解語言、表達語言。在句子的表達上，從學習名詞、動詞、形容 詞後、說出簡單的句子、複雜的句子到復合的句子。\n       課程主要用遊戲的方式挑選適合其操作的語文教具，讓孩子在實際動手做的過程中，學習到語言的語意、語用、語句。而在語言遊戲的過程中除了個人操作學習的部分，也有小組活動，鼓勵孩子與同儕一同遊戲，不只能增進語文能力外，也能增進幼兒的人際關係。     "
                }
              </div>
            </div>
            <div className="content-block">
              <div className="title">課程相關教具簡介</div>
              <img
                className="yield img"
                style={{
                  height: "1400px",
                }}
              ></img>
            </div>
            {this.SectionTitle(2)}
            <div className="content-block">
              <div className="title">課程相關教具簡介</div>
              <div className="text">
                {
                  "樂高積木色彩鮮艷、積木方塊精緻、產品組合多樣化、有周邊搭配造型產品，且故事性強烈例如：日本的超合金機器人，蝙蝠 俠等有它的卡通或電影背景，因此兒童選擇樂高積木意願會較 高。而「科學樂高創意課程」更受許多國家所推廣，並列為學 習課程，由此可見積木遊戲對幼童教育理論暨實務的學術研討 會越來越受重視與盛行。 學習目標：盡情發揮想像與創作能力、學習基本數概念、提升語言表達與傾聽能力、培養發現問題、解決問題的能力、提升思考能力、學習社交技巧、獲得感官上的滿足、增進大小肌肉之發展。"
                }
              </div>
            </div>
            <div className="content-block">
              <div className="title">樂高積木的重生</div>
              <div className="text">
                {
                  "從幼童對玩具的需求層面而言，幼童玩積木時目睹瞬間將其擊垮 也是其中的樂趣之一，這顯示了小朋友在玩原木積木時很喜歡做此動作，但樂高較無法滿足此樂趣。因此網路有很多熱衷樂高積木遊戲的人彼此交換經驗與心得，並提供樂高公司改進方向。"
                }
              </div>

              <div className="img neighbor centerize">
                <div className="lego_item">
                  <img src="/assets/Image/Lesson/lego1.png"></img>
                  <div>跑跑小賽車</div>
                </div>
                <div className="lego_item">
                  <img src="/assets/Image/Lesson/lego2.png"></img>
                  <div>積木槍</div>
                </div>
                <div className="lego_item">
                  <img src="/assets/Image/Lesson/lego3.png"></img>
                  <div>投石器</div>
                </div>
                <div className="lego_item">
                  <img src="/assets/Image/Lesson/lego4.png"></img>
                  <div>購物車</div>
                </div>
              </div>
            </div>
            {this.SectionTitle(3)}
            <div className="content-block">
              <div className="title">幼兒的情緒行為</div>
              <div className="text centerize">
                <div>
                  {
                    "幼兒的早期情緒與行為反應經驗，來自於與他人的互動及觀察別人 的情緒表達，精神分析學家Erison提出的情緒發展，其中六歲以前 的幼兒包含了以下三個階段："
                  }
                </div>
                <div className="child_emo">
                  <div className="emo_phase">
                    <div className="title">1</div>
                    <div className="text">
                      {
                        "出生後的第一年屬於「信任與不信任」階段。此一階段若主要照顧者能給嬰兒足夠的溫暖關愛，則可發展出安全感，並對人產生信任。"
                      }
                    </div>
                    <img src="/assets/Image/Lesson/emo_phase_1.png"></img>
                  </div>
                  <div className="emo_phase">
                    <div className="title">2</div>
                    <div className="text">
                      {
                        "二至三歲為「自主性與羞槐懷疑階段：當嬰幼兒進入學步期後開始有自我察覺及獨立感，有不同的個人特質及想法，欲探索、接觸新的事物，此時主要照顧者若能鼓勵幼兒嘗試探 索，則能增進幼兒的自信，並能發展出自我控制及自主性。"
                      }
                    </div>
                    <img src="/assets/Image/Lesson/emo_phase_2.png"></img>
                  </div>
                  <div className="emo_phase">
                    <div className="title">3</div>
                    <div className="text">
                      {
                        "三至六歲為「主動性與內疚感」階段 。此階段的幼兒在身體、語言及智力方面已經發展出更進階的能力。此時 主要照顧者若能鼓勵幼兒發揮創造力 及想像力，並鼓勵積極提問討論、自由選擇參與活動，將能夠使幼兒發展出主動進取的能力。"
                      }
                    </div>
                    <img src="/assets/Image/Lesson/emo_phase_3.png"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-block full">
              <div className="general-container">
                <img
                  src="/assets/Image/Lesson/lesson_5.png"
                  style={{ width: "100%" }}
                ></img>
                <div id="slogan_2">
                  {
                    "理解可能的原因造成情緒來源\n較能找出幫助幼兒減緩情緒行為的方法哦~"
                  }
                </div>
              </div>
            </div>
            <div className="content-block full">
              <div className="ad">
                <img src="/assets/Image/Lesson/bg_last.png"></img>
                <div className="title">{"快來看看童心匯\n最新開課內容!"}</div>
                <div className="lesson_links">
                  {this.lesson_links.map((v, i) => {
                    return (
                      <div
                        className="button_white_opa_hover"
                        onClick={() => {
                          window.location.href = v.url;
                        }}
                      >
                        {v.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
