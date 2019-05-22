import * as functions from 'firebase-functions'
import * as lineServices from "./line/lineServices"
import * as queryString from "querystring"
import * as util from 'util'

import { LINE } from "../config"
import { WebhookEvent, validateSignature } from "@line/bot-sdk"

import * as locationServices from './line/locationServices'
import * as foodServices from './line/foodServices'
import * as hotelServices from './line/hotelServices'

export const chatbotWebhook = functions.https.onRequest((req, res) => {
    const signature = req.headers["x-line-signature"] as string
    if (validateSignature(JSON.stringify(req.body), LINE.channelSecret, signature)) {
        const events = req.body.events as Array<WebhookEvent>
        for (const event of events)
            eventDispatcher(event)
        res.sendStatus(200)
    } else {
        const message = errorMessage(-1)
        res.status(403).send(message)
    }
})

const eventDispatcher = (event: WebhookEvent): void => {
    const userId = event.source.userId
    const timestamp = event.timestamp

    switch (event.type) {
        case "message":
            console.log(util.inspect(event, false, null, true /* enable colors */))
            if (event.message.type == "text" && event.source.type != "group") {
                const intent = event.message.text
                actionDispatcher(userId, event.replyToken, intent, timestamp)
            }
            else if(event.message.type == "location"){
                locationDispatcher(userId, event.replyToken, timestamp)
            }
            break
        case "postback":
            postbackDispatcher(userId, event.replyToken, event.postback)
            break
    }
}

const actionDispatcher = (userId: string, replyToken: string, intent: string, timestamp: number): void => {
    let lineMessage
    switch (intent) {
        case "美食鑑賞":
            lineMessage = foodServices.replyFoods()
            lineServices.replyMessage(replyToken, lineMessage)
            break
        case "旅宿推薦":
            lineMessage = hotelServices.replyHotels()
            lineServices.replyMessage(replyToken, lineMessage)
            break
        default:
            break
    }
}

const locationDispatcher = (userId: string, replyToken: string, timestamp: number): void => {
  const lineMessage = locationServices.replyViews()
  lineServices.replyMessage(replyToken, lineMessage)
}

export const postbackDispatcher = (userId: string, replyToken:string, postbackData): void => {
    const postback = queryString.parse(postbackData.data)
}

const errorMessage = (result: number): string => {
    let resultMessage

    switch (result) {
        case -1:
            resultMessage = "對不起，我不明白你的意思😢😢😢"
            break
        default:
            break
    }

    return resultMessage
}