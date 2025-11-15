import requests
import json
import random
from dotenv import load_dotenv
import os

# --- 1. 設定你的 API 金鑰和參數 ---
# ⚠️ 務必替換成你自己的 API Key
load_dotenv()
API_KEY = os.getenv("TENOR_API_KEY")

# 你想搜尋的關鍵字
query = "iu cute"

# 搜尋的端點
url = "https://tenor.googleapis.com/v2/search"

# 準備要發送的參數
params = {
    'key': API_KEY,
    'q': query,
    'limit': 4  # 只要 1 張結果
}

# --- 2. 發出 API 請求 ---
print(f"正在搜尋 '{query}' 的 GIF...")
try:
    response = requests.get(url, params=params)
    response.raise_for_status() # 如果請求失敗 (例如 404, 500)，會在這裡拋出錯誤

    # --- 3. 解析回傳的 JSON ---
    data = response.json()
    print(data['results'])
    if data['results']:
        # 取得第一張 GIF
        first_result = data['results'][random.randint(0, len(data['results']) - 1)]
        
        # 取得 'gif' 格式的 URL
        gif_url = first_result['media_formats']['gif']['url']
        
        print("🎉 成功找到了！")
        print(f"GIF 網址是: {gif_url}")
        
        print("\n下一步：把這個網址貼到瀏覽器的 <img> src 標籤中！")
    else:
        print(f"唉呀，沒有找到 '{query}' 的 GIF。")
        
except requests.exceptions.RequestException as e:
    print(f"錯誤！ API 請求失敗: {e}")
    if response:
        print(f"錯誤訊息: {response.text}")