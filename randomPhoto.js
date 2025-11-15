// randomPhotos.js (模組版本)

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.TENOR_API_KEY;
const url = "https://tenor.googleapis.com/v2/search";

// 1. 這就是我們要匯出的「工具」
async function getGif() {
    const query = "iu cute";
    const params = {
        'key': API_KEY,
        'q': query,
        'limit': 4
    };
    
    console.log(`(模組): 正在搜尋 '${query}' 的 GIF...`);
    try {
        const response = await axios.get(url, { params: params });
        const data = response.data;

        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomResult = data.results[randomIndex];
            const gifUrl = randomResult.media_formats.gif.url;
            
            console.log("(模組): 🎉 成功找到了！");
            
            // 2. 【重要】回傳 URL，而不是只 console.log
            return gifUrl; 
        } else {
            console.log("(模組): 唉呀，沒有找到 GIF。");
            return null; // 找不到就回傳 null
        }
    } catch (error) {
        console.error(`(模組): 錯誤！ API 請求失敗: ${error.message}`);
        return null; // 出錯也回傳 null
    }
}

// 3. 【重要】在 Node.js 中，使用 module.exports 來「匯出」
//    我們匯出一個物件，裡面包含 getGif 函式
module.exports = {
    getGif: getGif
};

// 4. 【重要】刪除這裡的 getGif() 呼叫！
//    (拿掉這一行)