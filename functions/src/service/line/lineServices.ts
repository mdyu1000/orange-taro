import { Client, Message } from "@line/bot-sdk"
import { LINE } from "../../config"
import * as functions from 'firebase-functions'
import * as cors from 'cors';
import * as queryString from "querystring"
import axios from "axios"
import * as jwt from "jsonwebtoken"
import * as _ from "lodash"
import * as util from "util"

const lineClient = new Client(LINE)
const corsHandler = cors({ origin: true });

// export const verifyLineUser = functions.https.onRequest((req, res) => {
//     corsHandler(req, res, async () => {
//         const code = req.body.code as string
//         const redirectUri = req.body.redirectUri as string

//         const lineTokenResult = await axios.post("https://api.line.me/oauth2/v2.1/token", queryString.stringify({
//             grant_type: "authorization_code",
//             code: code,
//             redirect_uri: redirectUri,
//             client_id: LINE_LOGIN.channelId,
//             client_secret: LINE_LOGIN.channelSecret
//         }), {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded"
//                 }
//             }).catch(error => {
//                 console.log("lineVerify failed:", error)
//                 return null
//             })

//         if (lineTokenResult) {
//             const idToken = jwt.verify(lineTokenResult.data.id_token, LINE_LOGIN.channelSecret) as any
//             const lineId = idToken.sub
//             res.status(200).send(lineId)
//         } else
//             res.status(403).send("Line login failed!")
//     })
// })

export const getName = async (userId: string): Promise<string> => {
    const profile = await lineClient.getProfile(userId)
    return profile.displayName
}

export const toTextMessage = (message: string): Message => {
    const textMessage: Message = {
        type: "text",
        text: message
    }
    return textMessage
}

export const replyMessage = (replyToken: string, lineMessage: Message | Message[]): Promise<any> => {
    return lineClient.replyMessage(replyToken, lineMessage)
}

export const pushMessage = (userId: string, lineMessage: Message | Message[]): Promise<any> => {
    return lineClient.pushMessage(userId, lineMessage)
}