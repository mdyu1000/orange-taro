import * as functions from 'firebase-functions'
import * as lineServices from "./line/lineServices"
import * as queryString from "querystring"

import { LINE } from "../config"
import { WebhookEvent, validateSignature } from "@line/bot-sdk"

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
            if (event.message.type == "text" && event.source.type != "group") {
                const intent = event.message.text
                actionDispatcher(userId, event.replyToken, intent, timestamp)
            }
            else if(event.message.type == "location"){

            }
            break
        case "postback":
            postbackDispatcher(userId, event.replyToken, event.postback)
            break
        case "follow":
            // follow(userId)
            break
        case "unfollow":
            // unfollow(userId)
            break

    }
}

const actionDispatcher = (userId: string, replyToken: string, intent: string, timestamp: number): void => {
    let lineMessage
    switch (intent) {
        case "合作通路":
            // lineMessage = marketingService.replyChannelImageMap()
            // lineServices.replyMessage(replyToken, lineMessage)
            break
        default:
            break
    }
}

const locationDispatcher = (userId: string, replyToken: string, intent: string, timestamp: number): void => {

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