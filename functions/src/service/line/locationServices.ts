import { Message } from "@line/bot-sdk"

export const replyViews = (): Message => {
  const resultMsg: Message = {
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://pic.pimg.tw/may1215may/1545747110-895653434_n.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "label": "Line",
              "uri": "https://linecorp.com/"
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "微風南山 Breeze",
                "size": "lg",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "baseline",
                "margin": "md",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "4.0",
                    "flex": 0,
                    "margin": "md",
                    "size": "sm",
                    "color": "#999999"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "margin": "lg",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Place",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "台北市信義區松智路17號",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Time",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "週日 ~ 週三 11:00 ~ 21:30  週四 ~ 週六 (含例假日前夕) 11:00 ~ 22:00",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Introduce",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "位在台北101對面，總面積16200坪， 建築外觀是雙手合掌的造型，象徵傳遞幸福的概念，樓層規劃為B2至7樓，有精品、流行服飾、雜貨、異國美食佳餚，高樓層46至48樓更打造天際餐廳與酒吧，好吃又好逛呢！",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "spacing": "sm",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "路線導航",
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.0342512,121.5646022"
                },
                "height": "sm",
                "style": "link",
                "gravity": "center"
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://scontent.ftpe8-4.fna.fbcdn.net/v/t31.0-8/885682_1180444388648392_8669419615467319290_o.jpg?_nc_cat=102&_nc_ht=scontent.ftpe8-4.fna&oh=5c0f39a10337b9df06f2a204ba17fa13&oe=5D15C91B",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "label": "Line",
              "uri": "https://linecorp.com/"
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Syntrend 三創生活園區",
                "size": "lg",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "baseline",
                "margin": "md",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "4.0",
                    "flex": 0,
                    "margin": "md",
                    "size": "sm",
                    "color": "#999999"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "margin": "lg",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Place",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "台北市中正區市民大道三段2號",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Time",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "11:00–21:30",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Introduce",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "攜手各品牌打造品味生活提案，提供獨特的零售消費體驗，精選與時俱進的話題商品，在此將可以一站滿足對於科技生活、風格家電、動漫文化、子親娛樂、潮流影音的全方位所需，是追求多元與極致品味生活家的絕佳體驗境地。",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "spacing": "sm",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "路線導航",
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.045669,121.531075"
                },
                "height": "sm",
                "style": "link",
                "gravity": "center"
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://blogimgs.sina.tw/myimages/246/63990/images/20130628174646612.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "label": "Line",
              "uri": "https://linecorp.com/"
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "華山 1914 文創園區",
                "size": "xl",
                "weight": "bold"
              },
              {
                "type": "box",
                "layout": "baseline",
                "margin": "md",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "icon",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "4.0",
                    "flex": 0,
                    "margin": "md",
                    "size": "sm",
                    "color": "#999999"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "margin": "lg",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Place",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "台北市中正區八德路一段1號",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Time",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "09:30 - 21:00",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Introduce",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "前身為「台北酒廠」，為市定古蹟。在1999年後，成為提供給藝文界、非營利組織及個人使用的藝術展覽、音樂表演等文化活動場地。此外，園區內也有多間餐廳、咖啡館、店舖、藝廊等商業設施。",
                        "flex": 5,
                        "size": "sm",
                        "color": "#666666",
                        "wrap": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "spacing": "sm",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "路線導航",
                  "uri": "https://www.google.com/maps/search/?api=1&query=華山文創園區"
                },
                "height": "sm",
                "style": "link",
                "gravity": "center"
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://static.wixstatic.com/media/60a047_ccbf3e736c244fd4a813712910f7f93a~mv2_d_5692_3200_s_4_2.png",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
              "type": "uri",
              "label": "Line",
              "uri": "https://linecorp.com/"
            }
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "flex": 0,
            "spacing": "sm",
            "contents": [
              {
                "type": "separator"
              },
              {
                "type": "button",
                "action": {
                  "type": "message",
                  "label": "美食鑑賞",
                  "text": "美食鑑賞"
                }
              },
              {
                "type": "separator"
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "景點遊趣",
                  "uri": "line://nv/location"
                }
              },
              {
                "type": "separator"
              },
              {
                "type": "button",
                "action": {
                  "type": "message",
                  "label": "旅宿推薦",
                  "text": "旅宿推薦"
                }
              },
              {
                "type": "separator"
              }
            ]
          }
        }
      ]
    }
  }

  return resultMsg
}