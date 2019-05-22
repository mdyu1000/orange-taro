import { Message } from "@line/bot-sdk"

export const replyFoods = (): Message => {
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
            "url": "https://www.travel.taipei/image/8159/1024x768",
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
                "text": "勺勺客",
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
                        "text": "台北市中正區杭州南路一段27號",
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
                        "text": "11:30-14:30、17:30-21:30 (周一公休)",
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
                        "text": "勺勺客屬於比較少見的陝西餐館。近期更換新址重新裝潢過後，新店寬敞整潔，更適合一家人或與朋友一起用餐。有趣的菜名在點菜時也是一項樂趣。每道菜都有自己的特色，雖然不是常見的料理，但吃過的人都一致好評是口碑好店，更有不少人成為常客。",
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
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.0419628,121.5263143"
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
            "url": "https://lh5.googleusercontent.com/p/AF1QipNXVURSNL8TE7XKkYs8hvnhZPkCABtp8g8K2ygZ=w408-h272-k-no",
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
                "text": "阿才的店",
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
                        "text": "Time",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "17:00-01:00 (周一公休)",
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
                        "text": "就像是台式居酒屋一樣，在這裡可以感受到台灣特有的熱情氛圍。  台式熱炒料理每道都好美味下飯，店內氣氛熱絡是個十分適合跟朋友大口喝啤酒吃飯聊天的好地方。 新店面乾淨寬敞充滿濃濃台灣復古味。",
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
                  "uri": "https://www.google.com/maps/search/?api=1&query=25.0380625,121.5268601"
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