import { Message } from "@line/bot-sdk"

export const replyHotels = (): Message => {
  const resultMsg: Message ={
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://www.caesarmetro.com/upload/dining/dining98_1440.jpg",
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
                "text": "凱統大飯店",
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
                        "text": "台北市中正區仁愛路二段26號",
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
                        "text": "附近SOGO百貨、頂好商圈、光華電子商場以及華山文藝中心短短走路距離就可到達。透過搭乘捷運可以直達信義商區、南港以及信義世貿、行天宮、西門町商圈或是龍山寺完全不需要轉車。",
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
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.042064,121.533466"
                },
                "height": "sm",
                "style": "link",
                "gravity": "center"
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "電話聯繫",
                  "uri": "tel:0227211162"
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
            "url": "https://pic.pimg.tw/eggface0507/1481550540-499374178_l.jpg",
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
                "text": "華山文旅",
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
                        "text": "台北市中正區金山北路1號",
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
                        "text": "比鄰華山1914文創園區，座落於台北市中心；2分鐘即可步行至忠孝新生站，搭乘捷運一站的距離即抵達忠孝復興站、東門站；台北最便利的交通樞紐「台北車站」亦僅距離我們3分鐘車程，5分鐘車程即可帶您抵達摩登的信義商圈，讓您盡情享受購物及美食的天堂，信義區更有多家台北著名的夜店讓您充分體驗台北的夜生活，",
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
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.044205,121.53044"
                },
                "height": "sm",
                "style": "link",
                "gravity": "center"
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "電話聯繫",
                  "uri": "tel:0223963388"
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