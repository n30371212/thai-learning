window.taiData = (() => {
  const rawVocabData = [
    { id: 1, thai: "สวัสดี", pinyin: "sa-wat-dee", meaning: "你好", category: "問候" },
    { id: 2, thai: "ขอบคุณ", pinyin: "khop-khun", meaning: "謝謝", category: "問候" },
    { id: 3, thai: "ขอโทษ", pinyin: "kho-thot", meaning: "對不起", category: "問候" },
    { id: 4, thai: "ไม่เป็นไร", pinyin: "mai pen rai", meaning: "沒關係", category: "常用" },
    { id: 5, thai: "ใช่", pinyin: "chai", meaning: "是/對", category: "常用" },
    { id: 6, thai: "ไม่", pinyin: "mai", meaning: "不/沒有", category: "常用" },
    { id: 7, thai: "ผม", pinyin: "phom", meaning: "我 (男)", category: "代詞" },
    { id: 8, thai: "ฉัน", pinyin: "chan", meaning: "我 (女)", category: "代詞" },
    { id: 9, thai: "คุณ", pinyin: "khun", meaning: "你", category: "代詞" },
    { id: 10, thai: "เขา", pinyin: "khao", meaning: "他/她", category: "代詞" },
    { id: 11, thai: "อะไร", pinyin: "a-rai", meaning: "什麼", category: "疑問" },
    { id: 12, thai: "ที่ไหน", pinyin: "tee nai", meaning: "在哪裡", category: "疑問" },
    { id: 13, thai: "เมื่อไหร่", pinyin: "muea rai", meaning: "什麼時候", category: "疑問" },
    { id: 14, thai: "เท่าไหร่", pinyin: "thao-rai", meaning: "多少錢", category: "疑問" },
    { id: 15, thai: "ใคร", pinyin: "khrai", meaning: "誰", category: "疑問" },
    { id: 16, thai: "กิน", pinyin: "gin", meaning: "吃", category: "動詞" },
    { id: 17, thai: "ดื่ม", pinyin: "duem", meaning: "喝", category: "動詞" },
    { id: 18, thai: "ไป", pinyin: "pai", meaning: "去", category: "動詞" },
    { id: 19, thai: "มา", pinyin: "ma", meaning: "來", category: "動詞" },
    { id: 20, thai: "ชอบ", pinyin: "chob", meaning: "喜歡", category: "動詞" },
    { id: 21, thai: "รัก", pinyin: "rak", meaning: "愛", category: "動詞" },
    { id: 22, thai: "ทำ", pinyin: "tham", meaning: "做", category: "動詞" },
    { id: 23, thai: "ดู", pinyin: "du", meaning: "看", category: "動詞" },
    { id: 24, thai: "ฟัง", pinyin: "fang", meaning: "聽", category: "動詞" },
    { id: 25, thai: "พูด", pinyin: "phut", meaning: "說", category: "動詞" },
    { id: 26, thai: "นอน", pinyin: "non", meaning: "睡覺", category: "動詞" },
    { id: 27, thai: "เอา", pinyin: "ao", meaning: "要 (物品)", category: "動詞" },
    { id: 28, thai: "บ้าน", pinyin: "baan", meaning: "家", category: "地點" },
    { id: 29, thai: "โรงเรียน", pinyin: "rong-rian", meaning: "學校", category: "地點" },
    { id: 30, thai: "ห้องน้ำ", pinyin: "hong nam", meaning: "洗手間", category: "地點" },
    { id: 31, thai: "ร้านอาหาร", pinyin: "ran a-han", meaning: "餐廳", category: "地點" },
    { id: 32, thai: "น้ำ", pinyin: "nam", meaning: "水", category: "飲食" },
    { id: 33, thai: "ข้าว", pinyin: "khao", meaning: "飯", category: "飲食" },
    { id: 34, thai: "เงิน", pinyin: "ngoen", meaning: "錢", category: "物品" },
    { id: 35, thai: "งาน", pinyin: "ngan", meaning: "工作", category: "物品" },
    { id: 36, thai: "สวย", pinyin: "suay", meaning: "漂亮", category: "形容" },
    { id: 37, thai: "อร่อย", pinyin: "a-roi", meaning: "好吃", category: "形容" },
    { id: 38, thai: "ร้อน", pinyin: "ron", meaning: "熱", category: "形容" },
    { id: 39, thai: "หนาว", pinyin: "nao", meaning: "冷", category: "形容" },
    { id: 40, thai: "ใหญ่", pinyin: "yai", meaning: "大", category: "形容" },
    { id: 41, thai: "เล็ก", pinyin: "lek", meaning: "小", category: "形容" },
    { id: 42, thai: "เผ็ด", pinyin: "phet", meaning: "辣", category: "形容" },
    { id: 43, thai: "หนึ่ง", pinyin: "nueng", meaning: "一 (1)", category: "數字" },
    { id: 44, thai: "สอง", pinyin: "song", meaning: "二 (2)", category: "數字" },
    { id: 45, thai: "สาม", pinyin: "sam", meaning: "三 (3)", category: "數字" },
    { id: 46, thai: "สี่", pinyin: "si", meaning: "四 (4)", category: "數字" },
    { id: 47, thai: "ห้า", pinyin: "ha", meaning: "五 (5)", category: "數字" },
    { id: 48, thai: "สิบ", pinyin: "sip", meaning: "十 (10)", category: "數字" },
    { id: 49, thai: "ร้อย", pinyin: "roi", meaning: "百 (100)", category: "數字" },
    { id: 50, thai: "วันนี้", pinyin: "wan-nee", meaning: "今天", category: "時間" },
    { id: 51, thai: "พรุ่งนี้", pinyin: "phrung-ni", meaning: "明天", category: "時間" },
    { id: 52, thai: "เมื่อวาน", pinyin: "muea-wan", meaning: "昨天", category: "時間" },
    { id: 53, thai: "ตอนนี้", pinyin: "ton-ni", meaning: "現在", category: "時間" },
    { id: 54, thai: "เร็ว", pinyin: "reo", meaning: "快", category: "副詞" },
    { id: 55, thai: "ช้า", pinyin: "cha", meaning: "慢", category: "副詞" },
    { id: 56, thai: "สนุก", pinyin: "sa-nuk", meaning: "好玩", category: "情緒" },
    { id: 57, thai: "เบื่อ", pinyin: "beua", meaning: "無聊", category: "情緒" },
    { id: 58, thai: "หิว", pinyin: "hiu", meaning: "餓", category: "感覺" },
    { id: 59, thai: "กระหายน้ำ", pinyin: "kra-hai-nam", meaning: "渴", category: "感覺" },
    { id: 60, thai: "เจ็บ", pinyin: "jep", meaning: "痛", category: "感覺" },
    { id: 61, thai: "สุขภาพ", pinyin: "suk-kha-phaap", meaning: "健康", category: "名詞" },
    { id: 62, thai: "โรงพยาบาล", pinyin: "rong-pha-yaa-baan", meaning: "醫院", category: "地點" },
    { id: 63, thai: "ร้านกาแฟ", pinyin: "ran-ga-fae", meaning: "咖啡店", category: "地點" },
    { id: 64, thai: "ตลาด", pinyin: "ta-lat", meaning: "市場", category: "地點" },
    { id: 65, thai: "สนามบิน", pinyin: "sa-nam-bin", meaning: "機場", category: "地點" },
    { id: 66, thai: "รถไฟฟ้า", pinyin: "rot-fai-faa", meaning: "捷運", category: "交通" },
    { id: 67, thai: "แท็กซี่", pinyin: "thaek-si", meaning: "計程車", category: "交通" },
    { id: 68, thai: "รถเมล์", pinyin: "rot-me", meaning: "公車", category: "交通" },
    { id: 69, thai: "รถไฟ", pinyin: "rot-fai", meaning: "火車", category: "交通" },
    { id: 70, thai: "จักรยาน", pinyin: "jak-kra-yaan", meaning: "腳踏車", category: "交通" },
    { id: 71, thai: "เสื้อ", pinyin: "seua", meaning: "衣服", category: "服飾" },
    { id: 72, thai: "กางเกง", pinyin: "kang-keng", meaning: "褲子", category: "服飾" },
    { id: 73, thai: "รองเท้า", pinyin: "rong-thao", meaning: "鞋子", category: "服飾" },
    { id: 74, thai: "หมวก", pinyin: "muak", meaning: "帽子", category: "服飾" },
    { id: 75, thai: "กระเป๋า", pinyin: "kra-pao", meaning: "包包", category: "物品" },
    { id: 76, thai: "หนังสือ", pinyin: "nang-seu", meaning: "書", category: "物品" },
    { id: 77, thai: "ปากกา", pinyin: "pak-kaa", meaning: "筆", category: "物品" },
    { id: 78, thai: "สมุด", pinyin: "sa-mut", meaning: "筆記本", category: "物品" },
    { id: 79, thai: "โทรศัพท์", pinyin: "tho-ra-sap", meaning: "電話", category: "物品" },
    { id: 80, thai: "คอมพิวเตอร์", pinyin: "khom-phiu-toe", meaning: "電腦", category: "物品" },
    { id: 81, thai: "อาหารเช้า", pinyin: "a-han-chao", meaning: "早餐", category: "飲食" },
    { id: 82, thai: "อาหารกลางวัน", pinyin: "a-han-klang-wan", meaning: "午餐", category: "飲食" },
    { id: 83, thai: "อาหารเย็น", pinyin: "a-han-yen", meaning: "晚餐", category: "飲食" },
    { id: 84, thai: "ขนม", pinyin: "kha-nom", meaning: "點心", category: "飲食" },
    { id: 85, thai: "กาแฟ", pinyin: "ga-fae", meaning: "咖啡", category: "飲品" },
    { id: 86, thai: "ชา", pinyin: "cha", meaning: "茶", category: "飲品" },
    { id: 87, thai: "น้ำผลไม้", pinyin: "nam-phon-la-mai", meaning: "果汁", category: "飲品" },
    { id: 88, thai: "เบียร์", pinyin: "bia", meaning: "啤酒", category: "飲品" },
    { id: 89, thai: "หวาน", pinyin: "wan", meaning: "甜", category: "形容" },
    { id: 90, thai: "เค็ม", pinyin: "khem", meaning: "鹹", category: "形容" },
    { id: 91, thai: "เปรี้ยว", pinyin: "priao", meaning: "酸", category: "形容" },
    { id: 92, thai: "ขม", pinyin: "khom", meaning: "苦", category: "形容" },
    { id: 93, thai: "สั้น", pinyin: "san", meaning: "短", category: "形容" },
    { id: 94, thai: "ยาว", pinyin: "yao", meaning: "長", category: "形容" },
    { id: 95, thai: "หนัก", pinyin: "nak", meaning: "重", category: "形容" },
    { id: 96, thai: "เบา", pinyin: "bao", meaning: "輕", category: "形容" },
    { id: 97, thai: "แพง", pinyin: "phaeng", meaning: "貴", category: "形容" },
    { id: 98, thai: "ถูก", pinyin: "thuk", meaning: "便宜", category: "形容" },
    { id: 99, thai: "เพื่อน", pinyin: "pheuan", meaning: "朋友", category: "人物" },
    { id: 100, thai: "ครอบครัว", pinyin: "khrop-khrua", meaning: "家庭", category: "人物" },
    { id: 101, thai: "ศูนย์", pinyin: "suun", meaning: "零", category: "數字" },
    { id: 102, thai: "หก", pinyin: "hok", meaning: "六 (6)", category: "數字" },
    { id: 103, thai: "เจ็ด", pinyin: "jet", meaning: "七 (7)", category: "數字" },
    { id: 104, thai: "แปด", pinyin: "paet", meaning: "八 (8)", category: "數字" },
    { id: 105, thai: "เก้า", pinyin: "kao", meaning: "九 (9)", category: "數字" },
    { id: 106, thai: "สิบเอ็ด", pinyin: "sip-et", meaning: "十一", category: "數字" },
    { id: 107, thai: "สิบสอง", pinyin: "sip-song", meaning: "十二", category: "數字" },
    { id: 108, thai: "สิบสาม", pinyin: "sip-sam", meaning: "十三", category: "數字" },
    { id: 109, thai: "สิบสี่", pinyin: "sip-si", meaning: "十四", category: "數字" },
    { id: 110, thai: "สิบห้า", pinyin: "sip-ha", meaning: "十五", category: "數字" },
    { id: 111, thai: "สิบหก", pinyin: "sip-hok", meaning: "十六", category: "數字" },
    { id: 112, thai: "สิบเจ็ด", pinyin: "sip-jet", meaning: "十七", category: "數字" },
    { id: 113, thai: "สิบแปด", pinyin: "sip-paet", meaning: "十八", category: "數字" },
    { id: 114, thai: "สิบเก้า", pinyin: "sip-kao", meaning: "十九", category: "數字" },
    { id: 115, thai: "ยี่สิบ", pinyin: "yee-sip", meaning: "二十", category: "數字" },
    { id: 116, thai: "ยี่สิบเอ็ด", pinyin: "yee-sip-et", meaning: "二十一", category: "數字" },
    { id: 117, thai: "ยี่สิบสอง", pinyin: "yee-sip-song", meaning: "二十二", category: "數字" },
    { id: 118, thai: "สามสิบ", pinyin: "sam-sip", meaning: "三十", category: "數字" },
    { id: 119, thai: "สี่สิบ", pinyin: "si-sip", meaning: "四十", category: "數字" },
    { id: 120, thai: "ห้าสิบ", pinyin: "ha-sip", meaning: "五十", category: "數字" },
    { id: 121, thai: "หกสิบ", pinyin: "hok-sip", meaning: "六十", category: "數字" },
    { id: 122, thai: "เจ็ดสิบ", pinyin: "jet-sip", meaning: "七十", category: "數字" },
    { id: 123, thai: "แปดสิบ", pinyin: "paet-sip", meaning: "八十", category: "數字" },
    { id: 124, thai: "เก้าสิบ", pinyin: "kao-sip", meaning: "九十", category: "數字" },
    { id: 125, thai: "หนึ่งพัน", pinyin: "nueng-phan", meaning: "一千", category: "數字" },
    { id: 126, thai: "หมื่น", pinyin: "muen", meaning: "一萬", category: "數字" },
    { id: 127, thai: "แสน", pinyin: "saen", meaning: "十萬", category: "數字" },
    { id: 128, thai: "ล้าน", pinyin: "laan", meaning: "一百萬", category: "數字" },
    { id: 129, thai: "วันจันทร์", pinyin: "wan-jan", meaning: "星期一", category: "時間" },
    { id: 130, thai: "วันอังคาร", pinyin: "wan-ang-khan", meaning: "星期二", category: "時間" },
    { id: 131, thai: "วันพุธ", pinyin: "wan-phut", meaning: "星期三", category: "時間" },
    { id: 132, thai: "วันพฤหัสบดี", pinyin: "wan-pa-rue-hat", meaning: "星期四", category: "時間" },
    { id: 133, thai: "วันศุกร์", pinyin: "wan-suk", meaning: "星期五", category: "時間" },
    { id: 134, thai: "วันเสาร์", pinyin: "wan-sao", meaning: "星期六", category: "時間" },
    { id: 135, thai: "วันอาทิตย์", pinyin: "wan-aa-thit", meaning: "星期日", category: "時間" },
    { id: 136, thai: "เช้า", pinyin: "chao", meaning: "早上", category: "時間" },
    { id: 137, thai: "บ่าย", pinyin: "baai", meaning: "下午", category: "時間" },
    { id: 138, thai: "เย็น", pinyin: "yen", meaning: "傍晚", category: "時間" },
    { id: 139, thai: "กลางคืน", pinyin: "klang-khuen", meaning: "夜晚", category: "時間" },
    { id: 140, thai: "ฤดูร้อน", pinyin: "rue-du-ron", meaning: "夏天", category: "季節" },
    { id: 141, thai: "ฤดูฝน", pinyin: "rue-du-fon", meaning: "雨季", category: "季節" },
    { id: 142, thai: "ฤดูหนาว", pinyin: "rue-du-nao", meaning: "冬天", category: "季節" },
    { id: 143, thai: "ฤดูใบไม้ผลิ", pinyin: "rue-du-bai-mai-pli", meaning: "春天", category: "季節" },
    { id: 144, thai: "ฤดูใบไม้ร่วง", pinyin: "rue-du-bai-mai-ruang", meaning: "秋天", category: "季節" },
    { id: 145, thai: "มกราคม", pinyin: "mok-kha-raa-kom", meaning: "一月", category: "月份" },
    { id: 146, thai: "กุมภาพันธ์", pinyin: "kum-phaa-phan", meaning: "二月", category: "月份" },
    { id: 147, thai: "มีนาคม", pinyin: "mee-naa-kom", meaning: "三月", category: "月份" },
    { id: 148, thai: "เมษายน", pinyin: "mae-sa-yon", meaning: "四月", category: "月份" },
    { id: 149, thai: "พฤษภาคม", pinyin: "phreut-sa-phaa-kom", meaning: "五月", category: "月份" },
    { id: 150, thai: "มิถุนายน", pinyin: "mi-thu-naa-yon", meaning: "六月", category: "月份" },
    { id: 151, thai: "กรกฎาคม", pinyin: "ka-ra-ka-daa-kom", meaning: "七月", category: "月份" },
    { id: 152, thai: "สิงหาคม", pinyin: "sing-haa-kom", meaning: "八月", category: "月份" },
    { id: 153, thai: "กันยายน", pinyin: "kan-yaa-yon", meaning: "九月", category: "月份" },
    { id: 154, thai: "ตุลาคม", pinyin: "tu-laa-kom", meaning: "十月", category: "月份" },
    { id: 155, thai: "พฤศจิกายน", pinyin: "phreut-sa-ji-gaa-yon", meaning: "十一月", category: "月份" },
    { id: 156, thai: "ธันวาคม", pinyin: "than-waa-kom", meaning: "十二月", category: "月份" },
    { id: 157, thai: "แดง", pinyin: "daeng", meaning: "紅色", category: "顏色" },
    { id: 158, thai: "น้ำเงิน", pinyin: "nam-ngern", meaning: "藍色", category: "顏色" },
    { id: 159, thai: "เขียว", pinyin: "khieow", meaning: "綠色", category: "顏色" },
    { id: 160, thai: "เหลือง", pinyin: "lueang", meaning: "黃色", category: "顏色" },
    { id: 161, thai: "ม่วง", pinyin: "muang", meaning: "紫色", category: "顏色" },
    { id: 162, thai: "ชมพู", pinyin: "chom-phu", meaning: "粉紅", category: "顏色" },
    { id: 163, thai: "ดำ", pinyin: "dam", meaning: "黑色", category: "顏色" },
    { id: 164, thai: "ขาว", pinyin: "khao", meaning: "白色", category: "顏色" },
    { id: 165, thai: "น้ำตาล", pinyin: "nam-tan", meaning: "棕色", category: "顏色" },
    { id: 166, thai: "เทา", pinyin: "thao", meaning: "灰色", category: "顏色" },
    { id: 167, thai: "ทอง", pinyin: "thong", meaning: "金色", category: "顏色" },
    { id: 168, thai: "ส้ม", pinyin: "som", meaning: "橘色", category: "顏色" },
    { id: 169, thai: "สุนัข", pinyin: "su-nak", meaning: "狗", category: "動物" },
    { id: 170, thai: "แมว", pinyin: "maeo", meaning: "貓", category: "動物" },
    { id: 171, thai: "ช้าง", pinyin: "chaang", meaning: "大象", category: "動物" },
    { id: 172, thai: "ม้า", pinyin: "maa", meaning: "馬", category: "動物" },
    { id: 173, thai: "วัว", pinyin: "wua", meaning: "牛", category: "動物" },
    { id: 174, thai: "ควาย", pinyin: "khwaai", meaning: "水牛", category: "動物" },
    { id: 175, thai: "หมู", pinyin: "muu", meaning: "豬", category: "動物" },
    { id: 176, thai: "ไก่", pinyin: "gai", meaning: "雞", category: "動物" },
    { id: 177, thai: "เป็ด", pinyin: "ped", meaning: "鴨", category: "動物" },
    { id: 178, thai: "ห่าน", pinyin: "haan", meaning: "鵝", category: "動物" },
    { id: 179, thai: "ปลา", pinyin: "plaa", meaning: "魚", category: "動物" },
    { id: 180, thai: "กุ้ง", pinyin: "gung", meaning: "蝦", category: "動物" },
    { id: 181, thai: "ปู", pinyin: "puu", meaning: "螃蟹", category: "動物" },
    { id: 182, thai: "ปลาหมึก", pinyin: "plaa-muek", meaning: "花枝", category: "動物" },
    { id: 183, thai: "ปลาฉลาม", pinyin: "plaa-cha-laam", meaning: "鯊魚", category: "動物" },
    { id: 184, thai: "ปลากระเบน", pinyin: "plaa-kra-ben", meaning: "魟魚", category: "動物" },
    { id: 185, thai: "เต่า", pinyin: "tao", meaning: "烏龜", category: "動物" },
    { id: 186, thai: "งู", pinyin: "nguu", meaning: "蛇", category: "動物" },
    { id: 187, thai: "ลิง", pinyin: "ling", meaning: "猴子", category: "動物" },
    { id: 188, thai: "เสือ", pinyin: "seua", meaning: "老虎", category: "動物" },
    { id: 189, thai: "สิงโต", pinyin: "sing-to", meaning: "獅子", category: "動物" },
    { id: 190, thai: "หมี", pinyin: "mee", meaning: "熊", category: "動物" },
    { id: 191, thai: "หมาป่า", pinyin: "maa-paa", meaning: "狼", category: "動物" },
    { id: 192, thai: "จิ้งจอก", pinyin: "jing-jok", meaning: "狐狸", category: "動物" },
    { id: 193, thai: "กระต่าย", pinyin: "kra-taai", meaning: "兔子", category: "動物" },
    { id: 194, thai: "แพะ", pinyin: "phae", meaning: "山羊", category: "動物" },
    { id: 195, thai: "แกะ", pinyin: "gae", meaning: "綿羊", category: "動物" },
    { id: 196, thai: "กวาง", pinyin: "kwang", meaning: "鹿", category: "動物" },
    { id: 197, thai: "นก", pinyin: "nok", meaning: "鳥", category: "動物" },
    { id: 198, thai: "นกฮูก", pinyin: "nok-hook", meaning: "貓頭鷹", category: "動物" },
    { id: 199, thai: "ผีเสื้อ", pinyin: "phi-seua", meaning: "蝴蝶", category: "動物" },
    { id: 200, thai: "แมลงวัน", pinyin: "ma-laeng-wan", meaning: "蒼蠅", category: "動物" },
    { id: 201, thai: "ยุง", pinyin: "yung", meaning: "蚊子", category: "動物" },
    { id: 202, thai: "มด", pinyin: "mot", meaning: "螞蟻", category: "動物" },
    { id: 203, thai: "แมงมุม", pinyin: "maeng-mum", meaning: "蜘蛛", category: "動物" },
    { id: 204, thai: "จระเข้", pinyin: "jo-ra-khe", meaning: "鱷魚", category: "動物" },
    { id: 205, thai: "ฮิปโปโปเตมัส", pinyin: "hip-po-po-te-mat", meaning: "河馬", category: "動物" },
    { id: 206, thai: "จิงโจ้", pinyin: "jing-jo", meaning: "袋鼠", category: "動物" },
    { id: 207, thai: "เพนกวิน", pinyin: "pen-gwin", meaning: "企鵝", category: "動物" },
    { id: 208, thai: "มะม่วง", pinyin: "ma-muang", meaning: "芒果", category: "水果" },
    { id: 209, thai: "กล้วย", pinyin: "kluai", meaning: "香蕉", category: "水果" },
    { id: 210, thai: "สับปะรด", pinyin: "sap-pa-rot", meaning: "鳳梨", category: "水果" },
    { id: 211, thai: "แตงโม", pinyin: "taeng-mo", meaning: "西瓜", category: "水果" },
    { id: 212, thai: "ลิ้นจี่", pinyin: "lin-jee", meaning: "荔枝", category: "水果" },
    { id: 213, thai: "ทุเรียน", pinyin: "thu-rian", meaning: "榴槤", category: "水果" },
    { id: 214, thai: "เงาะ", pinyin: "ngo", meaning: "紅毛丹", category: "水果" },
    { id: 215, thai: "ฝรั่ง", pinyin: "fa-rang", meaning: "芭樂", category: "水果" },
    { id: 216, thai: "แอปเปิล", pinyin: "aep-pil", meaning: "蘋果", category: "水果" },
    { id: 217, thai: "ส้มโอ", pinyin: "som-o", meaning: "文旦", category: "水果" },
    { id: 218, thai: "มะนาว", pinyin: "ma-nao", meaning: "萊姆", category: "水果" },
    { id: 219, thai: "มะพร้าว", pinyin: "ma-phrao", meaning: "椰子", category: "水果" },
    { id: 220, thai: "องุ่น", pinyin: "a-ngun", meaning: "葡萄", category: "水果" },
    { id: 221, thai: "กีวี", pinyin: "kii-wii", meaning: "奇異果", category: "水果" },
    { id: 222, thai: "เชอร์รี", pinyin: "cher-rii", meaning: "櫻桃", category: "水果" },
    { id: 223, thai: "บลูเบอร์รี", pinyin: "blu-ber-ri", meaning: "藍莓", category: "水果" },
    { id: 224, thai: "สตรอว์เบอร์รี", pinyin: "straw-ber-ri", meaning: "草莓", category: "水果" },
    { id: 225, thai: "มะละกอ", pinyin: "ma-la-kor", meaning: "木瓜", category: "水果" },
    { id: 226, thai: "แคนตาลูป", pinyin: "khaen-ta-loop", meaning: "哈密瓜", category: "水果" },
    { id: 227, thai: "ลูกพีช", pinyin: "luk-peech", meaning: "水蜜桃", category: "水果" },
    { id: 228, thai: "ลูกแพร์", pinyin: "luk-phae", meaning: "梨子", category: "水果" },
    { id: 229, thai: "มังคุด", pinyin: "mang-khut", meaning: "山竹", category: "水果" },
    { id: 230, thai: "ลองกอง", pinyin: "long-gong", meaning: "龍宮果", category: "水果" },
    { id: 231, thai: "เสาวรส", pinyin: "saao-wa-rot", meaning: "百香果", category: "水果" },
    { id: 232, thai: "แก้วมังกร", pinyin: "kaew-mang-kon", meaning: "火龍果", category: "水果" },
    { id: 233, thai: "เมลอน", pinyin: "me-lon", meaning: "蜜瓜", category: "水果" },
    { id: 234, thai: "ลูกพลับ", pinyin: "luk-plap", meaning: "柿子", category: "水果" },
    { id: 235, thai: "ขนุน", pinyin: "kha-nun", meaning: "菠蘿蜜", category: "水果" },
    { id: 236, thai: "ลำไย", pinyin: "lam-yai", meaning: "龍眼", category: "水果" },
    { id: 237, thai: "มะยม", pinyin: "ma-yom", meaning: "泰國醋栗", category: "水果" },
    { id: 238, thai: "มะเขือเทศ", pinyin: "ma-kuea-thet", meaning: "番茄", category: "蔬菜" },
    { id: 239, thai: "แตงกวา", pinyin: "taeng-gwa", meaning: "小黃瓜", category: "蔬菜" },
    { id: 240, thai: "คะน้า", pinyin: "kha-naa", meaning: "芥藍", category: "蔬菜" },
    { id: 241, thai: "กะหล่ำปลี", pinyin: "ka-lam-pli", meaning: "高麗菜", category: "蔬菜" },
    { id: 242, thai: "ผักบุ้ง", pinyin: "phak-bung", meaning: "空心菜", category: "蔬菜" },
    { id: 243, thai: "ผักกาด", pinyin: "phak-kat", meaning: "萵苣", category: "蔬菜" },
    { id: 244, thai: "ผักชี", pinyin: "phak-chee", meaning: "香菜", category: "蔬菜" },
    { id: 245, thai: "โหระพา", pinyin: "ho-ra-pha", meaning: "羅勒", category: "蔬菜" },
    { id: 246, thai: "กะเพรา", pinyin: "ka-phrao", meaning: "打拋葉", category: "蔬菜" },
    { id: 247, thai: "มะเขือยาว", pinyin: "ma-kuea-yao", meaning: "茄子", category: "蔬菜" },
    { id: 248, thai: "แครอท", pinyin: "khae-rot", meaning: "紅蘿蔔", category: "蔬菜" },
    { id: 249, thai: "หอมใหญ่", pinyin: "hom-yai", meaning: "洋蔥", category: "蔬菜" },
    { id: 250, thai: "กระเทียม", pinyin: "kra-thiam", meaning: "大蒜", category: "蔬菜" },
    { id: 251, thai: "ขิง", pinyin: "khing", meaning: "薑", category: "蔬菜" },
    { id: 252, thai: "พริก", pinyin: "phrik", meaning: "辣椒", category: "蔬菜" },
    { id: 253, thai: "มันฝรั่ง", pinyin: "man-fa-rang", meaning: "馬鈴薯", category: "蔬菜" },
    { id: 254, thai: "มันเทศ", pinyin: "man-thet", meaning: "地瓜", category: "蔬菜" },
    { id: 255, thai: "ข้าวโพด", pinyin: "khao-phot", meaning: "玉米", category: "蔬菜" },
    { id: 256, thai: "ถั่วลิสง", pinyin: "thua-li-song", meaning: "花生", category: "蔬菜" },
    { id: 257, thai: "ถั่วเขียว", pinyin: "thua-khieow", meaning: "綠豆", category: "蔬菜" },
    { id: 258, thai: "หน่อไม้", pinyin: "nor-mai", meaning: "竹筍", category: "蔬菜" },
    { id: 259, thai: "เห็ด", pinyin: "het", meaning: "菇類", category: "蔬菜" },
    { id: 260, thai: "ฟักทอง", pinyin: "fak-thong", meaning: "南瓜", category: "蔬菜" },
    { id: 261, thai: "กะหล่ำดอก", pinyin: "ka-lam-dok", meaning: "花椰菜", category: "蔬菜" },
    { id: 262, thai: "บรอกโคลี", pinyin: "brok-kho-lee", meaning: "綠花椰", category: "蔬菜" },
    { id: 263, thai: "บวบ", pinyin: "buap", meaning: "絲瓜", category: "蔬菜" },
    { id: 264, thai: "ครู", pinyin: "khruu", meaning: "老師", category: "職業" },
    { id: 265, thai: "แพทย์", pinyin: "phaet", meaning: "醫生", category: "職業" },
    { id: 266, thai: "พยาบาล", pinyin: "pha-yaa-baan", meaning: "護理師", category: "職業" },
    { id: 267, thai: "วิศวกร", pinyin: "wit-sa-wa-kon", meaning: "工程師", category: "職業" },
    { id: 268, thai: "โปรแกรมเมอร์", pinyin: "pro-gram-mer", meaning: "程式設計師", category: "職業" },
    { id: 269, thai: "ทนายความ", pinyin: "tha-naai-khwam", meaning: "律師", category: "職業" },
    { id: 270, thai: "นักธุรกิจ", pinyin: "nak-thu-ra-kit", meaning: "企業家", category: "職業" },
    { id: 271, thai: "พนักงานขาย", pinyin: "pha-nak-ngan-khaai", meaning: "業務員", category: "職業" },
    { id: 272, thai: "เชฟ", pinyin: "chef", meaning: "主廚", category: "職業" },
    { id: 273, thai: "คนขับรถ", pinyin: "khon-khap-rot", meaning: "司機", category: "職業" },
    { id: 274, thai: "นักบิน", pinyin: "nak-bin", meaning: "飛行員", category: "職業" },
    { id: 275, thai: "พนักงานต้อนรับ", pinyin: "pha-nak-ngan-ton-rap", meaning: "接待員", category: "職業" },
    { id: 276, thai: "ช่างภาพ", pinyin: "chang-phaap", meaning: "攝影師", category: "職業" },
    { id: 277, thai: "ช่างไฟฟ้า", pinyin: "chang-fai-faa", meaning: "電工", category: "職業" },
    { id: 278, thai: "ช่างไม้", pinyin: "chang-mai", meaning: "木工", category: "職業" },
    { id: 279, thai: "เกษตรกร", pinyin: "ka-set-sa-kon", meaning: "農夫", category: "職業" },
    { id: 280, thai: "ชาวประมง", pinyin: "chao-pra-mong", meaning: "漁夫", category: "職業" },
    { id: 281, thai: "ทหาร", pinyin: "tha-han", meaning: "軍人", category: "職業" },
    { id: 282, thai: "ตำรวจ", pinyin: "tam-ruat", meaning: "警察", category: "職業" },
    { id: 283, thai: "นักดนตรี", pinyin: "nak-don-trii", meaning: "樂手", category: "職業" },
    { id: 284, thai: "นักร้อง", pinyin: "nak-rong", meaning: "歌手", category: "職業" },
    { id: 285, thai: "นักเต้น", pinyin: "nak-ten", meaning: "舞者", category: "職業" },
    { id: 286, thai: "นักแสดง", pinyin: "nak-sa-daeng", meaning: "演員", category: "職業" },
    { id: 287, thai: "นักข่าว", pinyin: "nak-khao", meaning: "記者", category: "職業" },
    { id: 288, thai: "นักวิทยาศาสตร์", pinyin: "nak-wit-tha-ya-sat", meaning: "科學家", category: "職業" },
    { id: 289, thai: "นักเขียน", pinyin: "nak-khian", meaning: "作家", category: "職業" },
    { id: 290, thai: "มัคคุเทศก์", pinyin: "mak-khu-thet", meaning: "導遊", category: "職業" },
    { id: 291, thai: "นักออกแบบ", pinyin: "nak-ok-baep", meaning: "設計師", category: "職業" },
    { id: 292, thai: "ผู้จัดการ", pinyin: "phu-jud-kaan", meaning: "經理", category: "職業" },
    { id: 293, thai: "ช่างเสริมสวย", pinyin: "chang-serm-suay", meaning: "美髮師", category: "職業" },
    { id: 294, thai: "นักบัญชี", pinyin: "nak-ban-chee", meaning: "會計師", category: "職業" },
    { id: 295, thai: "ดีใจ", pinyin: "dee-jai", meaning: "開心", category: "情緒" },
    { id: 296, thai: "เสียใจ", pinyin: "sia-jai", meaning: "傷心", category: "情緒" },
    { id: 297, thai: "โกรธ", pinyin: "grot", meaning: "生氣", category: "情緒" },
    { id: 298, thai: "กลัว", pinyin: "glua", meaning: "害怕", category: "情緒" },
    { id: 299, thai: "ประหลาดใจ", pinyin: "pra-laat-jai", meaning: "驚訝", category: "情緒" },
    { id: 300, thai: "ภูมิใจ", pinyin: "phum-jai", meaning: "驕傲", category: "情緒" },
    { id: 301, thai: "กังวล", pinyin: "kang-won", meaning: "擔心", category: "情緒" },
    { id: 302, thai: "ตื่นเต้น", pinyin: "tuun-ten", meaning: "興奮", category: "情緒" },
    { id: 303, thai: "ผ่อนคลาย", pinyin: "phon-khlaai", meaning: "放鬆", category: "情緒" },
    { id: 304, thai: "เหงา", pinyin: "ngao", meaning: "寂寞", category: "情緒" },
    { id: 305, thai: "อิจฉา", pinyin: "it-chaa", meaning: "嫉妒", category: "情緒" },
    { id: 306, thai: "ละอาย", pinyin: "la-aai", meaning: "害羞", category: "情緒" },
    { id: 307, thai: "สับสน", pinyin: "sap-son", meaning: "困惑", category: "情緒" },
    { id: 308, thai: "ขี้เกียจ", pinyin: "khi-kiat", meaning: "懶惰", category: "情緒" },
    { id: 309, thai: "ขยัน", pinyin: "kha-yan", meaning: "勤奮", category: "情緒" },
    { id: 310, thai: "มีความหวัง", pinyin: "mee-khwam-wang", meaning: "有希望", category: "情緒" },
    { id: 311, thai: "หมดหวัง", pinyin: "mot-wang", meaning: "絕望", category: "情緒" },
    { id: 312, thai: "ประหม่า", pinyin: "pra-maa", meaning: "緊張", category: "情緒" },
    { id: 313, thai: "พอใจ", pinyin: "phor-jai", meaning: "滿意", category: "情緒" },
    { id: 314, thai: "เบิกบาน", pinyin: "boek-baan", meaning: "欣喜", category: "情緒" },
    { id: 315, thai: "โศกเศร้า", pinyin: "sok-sao", meaning: "悲傷", category: "情緒" },
    { id: 316, thai: "สงบ", pinyin: "sa-ngop", meaning: "平靜", category: "情緒" },
    { id: 317, thai: "หงุดหงิด", pinyin: "ngut-ngit", meaning: "煩躁", category: "情緒" },
    { id: 318, thai: "ไฟแรง", pinyin: "fai-raeng", meaning: "充滿幹勁", category: "情緒" },
    { id: 319, thai: "หัว", pinyin: "hua", meaning: "頭", category: "身體" },
    { id: 320, thai: "ใบหน้า", pinyin: "bai-naa", meaning: "臉", category: "身體" },
    { id: 321, thai: "ผม", pinyin: "phom", meaning: "頭髮", category: "身體" },
    { id: 322, thai: "ตา", pinyin: "taa", meaning: "眼睛", category: "身體" },
    { id: 323, thai: "หู", pinyin: "huu", meaning: "耳朵", category: "身體" },
    { id: 324, thai: "จมูก", pinyin: "ja-mook", meaning: "鼻子", category: "身體" },
    { id: 325, thai: "ปาก", pinyin: "paak", meaning: "嘴巴", category: "身體" },
    { id: 326, thai: "ฟัน", pinyin: "fan", meaning: "牙齒", category: "身體" },
    { id: 327, thai: "ลิ้น", pinyin: "lin", meaning: "舌頭", category: "身體" },
    { id: 328, thai: "คอ", pinyin: "kho", meaning: "脖子", category: "身體" },
    { id: 329, thai: "ไหล่", pinyin: "lai", meaning: "肩膀", category: "身體" },
    { id: 330, thai: "แขน", pinyin: "khaen", meaning: "手臂", category: "身體" },
    { id: 331, thai: "ข้อศอก", pinyin: "kho-sok", meaning: "手肘", category: "身體" },
    { id: 332, thai: "มือ", pinyin: "mue", meaning: "手", category: "身體" },
    { id: 333, thai: "นิ้ว", pinyin: "niu", meaning: "手指", category: "身體" },
    { id: 334, thai: "หน้าอก", pinyin: "na-ok", meaning: "胸部", category: "身體" },
    { id: 335, thai: "หลัง", pinyin: "lang", meaning: "背部", category: "身體" },
    { id: 336, thai: "ท้อง", pinyin: "thong", meaning: "肚子", category: "身體" },
    { id: 337, thai: "ขา", pinyin: "kha", meaning: "腿", category: "身體" },
    { id: 338, thai: "เข่า", pinyin: "khao", meaning: "膝蓋", category: "身體" },
    { id: 339, thai: "เท้า", pinyin: "tao", meaning: "腳", category: "身體" },
    { id: 340, thai: "นิ้วเท้า", pinyin: "niu-tao", meaning: "腳趾", category: "身體" },
    { id: 341, thai: "หัวใจ", pinyin: "hua-jai", meaning: "心臟", category: "身體" },
    { id: 342, thai: "สมอง", pinyin: "sa-mong", meaning: "大腦", category: "身體" },
    { id: 343, thai: "ผิว", pinyin: "phiu", meaning: "皮膚", category: "身體" },
    { id: 344, thai: "ปอด", pinyin: "pod", meaning: "肺", category: "身體" },
    { id: 345, thai: "ตับ", pinyin: "tab", meaning: "肝", category: "身體" },
    { id: 346, thai: "ไต", pinyin: "tai", meaning: "腎", category: "身體" },
    { id: 347, thai: "โต๊ะ", pinyin: "to", meaning: "桌子", category: "家庭" },
    { id: 348, thai: "เก้าอี้", pinyin: "kao-ii", meaning: "椅子", category: "家庭" },
    { id: 349, thai: "โซฟา", pinyin: "so-faa", meaning: "沙發", category: "家庭" },
    { id: 350, thai: "เตียง", pinyin: "tiang", meaning: "床", category: "家庭" },
    { id: 351, thai: "หมอน", pinyin: "mon", meaning: "枕頭", category: "家庭" },
    { id: 352, thai: "ผ้าห่ม", pinyin: "pha-hom", meaning: "棉被", category: "家庭" },
    { id: 353, thai: "พรม", pinyin: "phrom", meaning: "地毯", category: "家庭" },
    { id: 354, thai: "ตู้เย็น", pinyin: "tu-yen", meaning: "冰箱", category: "家庭" },
    { id: 355, thai: "เตาอบ", pinyin: "tao-ob", meaning: "烤箱", category: "家庭" },
    { id: 356, thai: "ไมโครเวฟ", pinyin: "mai-khro-wave", meaning: "微波爐", category: "家庭" },
    { id: 357, thai: "เครื่องซักผ้า", pinyin: "khruang-sak-pha", meaning: "洗衣機", category: "家庭" },
    { id: 358, thai: "เครื่องปรับอากาศ", pinyin: "khruang-prap-a-kat", meaning: "冷氣", category: "家庭" },
    { id: 359, thai: "พัดลม", pinyin: "phat-lom", meaning: "電扇", category: "家庭" },
    { id: 360, thai: "โทรทัศน์", pinyin: "tho-ra-that", meaning: "電視", category: "家庭" },
    { id: 361, thai: "รีโมต", pinyin: "ri-mot", meaning: "遙控器", category: "家庭" },
    { id: 362, thai: "โคมไฟ", pinyin: "khom-fai", meaning: "燈", category: "家庭" },
    { id: 363, thai: "นาฬิกา", pinyin: "na-li-gaa", meaning: "時鐘", category: "家庭" },
    { id: 364, thai: "จาน", pinyin: "jaan", meaning: "盤子", category: "家庭" },
    { id: 365, thai: "ชาม", pinyin: "chaam", meaning: "碗", category: "家庭" },
    { id: 366, thai: "ช้อน", pinyin: "chon", meaning: "湯匙", category: "家庭" },
    { id: 367, thai: "ส้อม", pinyin: "som", meaning: "叉子", category: "家庭" },
    { id: 368, thai: "มีด", pinyin: "mit", meaning: "刀", category: "家庭" },
    { id: 369, thai: "แก้ว", pinyin: "kaew", meaning: "杯子", category: "家庭" },
    { id: 370, thai: "กระทะ", pinyin: "kra-tha", meaning: "平底鍋", category: "家庭" },
    { id: 371, thai: "หม้อ", pinyin: "mor", meaning: "鍋子", category: "家庭" },
    { id: 372, thai: "ถังขยะ", pinyin: "thang-kha-ya", meaning: "垃圾桶", category: "家庭" },
    { id: 373, thai: "ไม้กวาด", pinyin: "mai-gwaa", meaning: "掃把", category: "家庭" },
    { id: 374, thai: "ที่ตักผง", pinyin: "thi-tak-phong", meaning: "畚箕", category: "家庭" },
    { id: 375, thai: "เรือ", pinyin: "ruea", meaning: "船", category: "交通" },
    { id: 376, thai: "เรือด่วน", pinyin: "ruea-duan", meaning: "快艇", category: "交通" },
    { id: 377, thai: "เรือเฟอร์รี", pinyin: "ruea-fer-ri", meaning: "渡輪", category: "交通" },
    { id: 378, thai: "เรือบรรทุก", pinyin: "ruea-ban-thuk", meaning: "貨船", category: "交通" },
    { id: 379, thai: "เรือหางยาว", pinyin: "ruea-hang-yao", meaning: "長尾船", category: "交通" },
    { id: 380, thai: "รถจักรยานยนต์", pinyin: "rot-jak-ka-yaan-yon", meaning: "機車", category: "交通" },
    { id: 381, thai: "รถบรรทุก", pinyin: "rot-ban-thuk", meaning: "卡車", category: "交通" },
    { id: 382, thai: "รถยนต์", pinyin: "rot-yon", meaning: "汽車", category: "交通" },
    { id: 383, thai: "รถสปอร์ต", pinyin: "rot-sa-port", meaning: "跑車", category: "交通" },
    { id: 384, thai: "รถตำรวจ", pinyin: "rot-tam-ruat", meaning: "警車", category: "交通" },
    { id: 385, thai: "รถพยาบาล", pinyin: "rot-pha-yaa-baan", meaning: "救護車", category: "交通" },
    { id: 386, thai: "รถดับเพลิง", pinyin: "rot-dap-ploeng", meaning: "消防車", category: "交通" },
    { id: 387, thai: "รถไฟใต้ดิน", pinyin: "rot-fai-tai-din", meaning: "地鐵", category: "交通" },
    { id: 388, thai: "รถราง", pinyin: "rot-raang", meaning: "路面電車", category: "交通" },
    { id: 389, thai: "เรือบิน", pinyin: "ruea-bin", meaning: "飛機", category: "交通" },
    { id: 390, thai: "เฮลิคอปเตอร์", pinyin: "he-li-khop-ter", meaning: "直升機", category: "交通" },
    { id: 391, thai: "เรือเหาะ", pinyin: "ruea-hor", meaning: "飛艇", category: "交通" },
    { id: 392, thai: "รถม้า", pinyin: "rot-maa", meaning: "馬車", category: "交通" },
    { id: 393, thai: "รถสามล้อ", pinyin: "rot-sam-law", meaning: "三輪車", category: "交通" },
    { id: 394, thai: "รถตุ๊กตุ๊ก", pinyin: "rot-tuk-tuk", meaning: "嘟嘟車", category: "交通" },
    { id: 395, thai: "แท็บเล็ต", pinyin: "thaeb-let", meaning: "平板", category: "科技" },
    { id: 396, thai: "สมาร์ตโฟน", pinyin: "smart-phon", meaning: "智慧型手機", category: "科技" },
    { id: 397, thai: "หูฟัง", pinyin: "hu-fang", meaning: "耳機", category: "科技" },
    { id: 398, thai: "ลำโพง", pinyin: "lam-phong", meaning: "喇叭", category: "科技" },
    { id: 399, thai: "กล้องถ่ายรูป", pinyin: "klong-thai-ruup", meaning: "相機", category: "科技" },
    { id: 400, thai: "เมาส์", pinyin: "mao", meaning: "滑鼠", category: "科技" },
    { id: 401, thai: "คีย์บอร์ด", pinyin: "khi-bord", meaning: "鍵盤", category: "科技" },
    { id: 402, thai: "หน้าจอ", pinyin: "na-jor", meaning: "螢幕", category: "科技" },
    { id: 403, thai: "โปรเจคเตอร์", pinyin: "pro-jek-ter", meaning: "投影機", category: "科技" },
    { id: 404, thai: "ดิจิทัลเพน", pinyin: "di-ji-ton-pen", meaning: "數位筆", category: "科技" },
    { id: 405, thai: "ฮาร์ดดิสก์", pinyin: "hard-disk", meaning: "硬碟", category: "科技" },
    { id: 406, thai: "แฟลชไดรฟ์", pinyin: "flash-drive", meaning: "隨身碟", category: "科技" },
    { id: 407, thai: "ไวไฟ", pinyin: "wai-fai", meaning: "無線網路", category: "科技" },
    { id: 408, thai: "คลาวด์", pinyin: "cloud", meaning: "雲端", category: "科技" },
    { id: 409, thai: "ซอฟต์แวร์", pinyin: "soft-ware", meaning: "軟體", category: "科技" },
    { id: 410, thai: "เฟิร์มแวร์", pinyin: "firm-ware", meaning: "韌體", category: "科技" },
    { id: 411, thai: "แอปพลิเคชัน", pinyin: "app-pli-khae-shan", meaning: "應用程式", category: "科技" },
    { id: 412, thai: "โค้ด", pinyin: "code", meaning: "程式碼", category: "科技" },
    { id: 413, thai: "บอต", pinyin: "bot", meaning: "機器人", category: "科技" },
    { id: 414, thai: "ภูเขา", pinyin: "phu-khao", meaning: "山", category: "自然" },
    { id: 415, thai: "แม่น้ำ", pinyin: "mae-nam", meaning: "河流", category: "自然" },
    { id: 416, thai: "ทะเล", pinyin: "tha-lay", meaning: "大海", category: "自然" },
    { id: 417, thai: "มหาสมุทร", pinyin: "ma-haa-sa-mut", meaning: "海洋", category: "自然" },
    { id: 418, thai: "ทะเลสาบ", pinyin: "tha-lay-saap", meaning: "湖泊", category: "自然" },
    { id: 419, thai: "น้ำตก", pinyin: "nam-tok", meaning: "瀑布", category: "自然" },
    { id: 420, thai: "ป่า", pinyin: "paa", meaning: "森林", category: "自然" },
    { id: 421, thai: "ทุ่งนา", pinyin: "thung-naa", meaning: "稻田", category: "自然" },
    { id: 422, thai: "ท้องฟ้า", pinyin: "thong-faa", meaning: "天空", category: "自然" },
    { id: 423, thai: "เมฆ", pinyin: "mek", meaning: "雲", category: "自然" },
    { id: 424, thai: "สายรุ้ง", pinyin: "saai-rung", meaning: "彩虹", category: "自然" },
    { id: 425, thai: "พระอาทิตย์", pinyin: "phra-aa-thit", meaning: "太陽", category: "自然" },
    { id: 426, thai: "พระจันทร์", pinyin: "phra-jan", meaning: "月亮", category: "自然" },
    { id: 427, thai: "ดาว", pinyin: "dao", meaning: "星星", category: "自然" },
    { id: 428, thai: "ลม", pinyin: "lom", meaning: "風", category: "自然" },
    { id: 429, thai: "ฝน", pinyin: "fon", meaning: "雨", category: "自然" },
    { id: 430, thai: "หิมะ", pinyin: "hi-ma", meaning: "雪", category: "自然" },
    { id: 431, thai: "ฟ้าผ่า", pinyin: "faa-pha", meaning: "閃電", category: "自然" },
    { id: 432, thai: "แผ่นดินไหว", pinyin: "phaen-din-wai", meaning: "地震", category: "自然" },
    { id: 433, thai: "คลื่น", pinyin: "khluen", meaning: "海浪", category: "自然" },
    { id: 434, thai: "หมอก", pinyin: "mok", meaning: "霧", category: "自然" },
    { id: 435, thai: "ดอกไม้", pinyin: "dok-mai", meaning: "花", category: "自然" },
    { id: 436, thai: "ต้นไม้", pinyin: "ton-mai", meaning: "樹", category: "自然" },
    { id: 437, thai: "ใบไม้", pinyin: "bai-mai", meaning: "樹葉", category: "自然" },
    { id: 438, thai: "ทราย", pinyin: "saai", meaning: "沙", category: "自然" },
    { id: 439, thai: "มหาวิทยาลัย", pinyin: "ma-haa-wit-tha-yaa-lai", meaning: "大學", category: "教育" },
    { id: 440, thai: "ห้องเรียน", pinyin: "hong-rian", meaning: "教室", category: "教育" },
    { id: 441, thai: "หนังสือเรียน", pinyin: "nang-seu-rian", meaning: "課本", category: "教育" },
    { id: 442, thai: "ดินสอ", pinyin: "din-sor", meaning: "鉛筆", category: "教育" },
    { id: 443, thai: "ยางลบ", pinyin: "yaang-lob", meaning: "橡皮擦", category: "教育" },
    { id: 444, thai: "กระเป๋านักเรียน", pinyin: "kra-pao-nak-rian", meaning: "書包", category: "教育" },
    { id: 445, thai: "การบ้าน", pinyin: "kaan-baan", meaning: "作業", category: "教育" },
    { id: 446, thai: "ตารางสอน", pinyin: "ta-raang-son", meaning: "課表", category: "教育" },
    { id: 447, thai: "สอบ", pinyin: "sop", meaning: "考試", category: "教育" },
    { id: 448, thai: "คะแนน", pinyin: "kha-naen", meaning: "成績", category: "教育" },
    { id: 449, thai: "ประกาศนียบัตร", pinyin: "pra-kat-ni-ya-bat", meaning: "證書", category: "教育" },
    { id: 450, thai: "วิชาคณิตศาสตร์", pinyin: "wi-chaa-kha-nit-sat", meaning: "數學", category: "教育" },
    { id: 451, thai: "วิชาวิทยาศาสตร์", pinyin: "wi-chaa-wit-tha-ya-sat", meaning: "自然", category: "教育" },
    { id: 452, thai: "วิชาภาษาไทย", pinyin: "wi-chaa-pha-saa-thai", meaning: "泰文課", category: "教育" },
    { id: 453, thai: "วิชาภาษาอังกฤษ", pinyin: "wi-chaa-pha-saa-ang-grit", meaning: "英文課", category: "教育" },
    { id: 454, thai: "ห้องสมุด", pinyin: "hong-sa-mut", meaning: "圖書館", category: "教育" },
    { id: 455, thai: "สนามกีฬา", pinyin: "sa-nam-kii-laa", meaning: "運動場", category: "教育" },
    { id: 456, thai: "ชมรม", pinyin: "chom-rom", meaning: "社團", category: "教育" },
    { id: 457, thai: "ทุนการศึกษา", pinyin: "thun-kaan-suek-saa", meaning: "獎學金", category: "教育" },
    { id: 458, thai: "ปริญญา", pinyin: "pa-rin-yaa", meaning: "學位", category: "教育" },
    { id: 459, thai: "ปฐมวัย", pinyin: "pa-thom-wai", meaning: "幼兒教育", category: "教育" },
    { id: 460, thai: "มัธยม", pinyin: "mat-tha-yom", meaning: "中學", category: "教育" },
    { id: 461, thai: "อาจารย์", pinyin: "aa-jaan", meaning: "教授", category: "教育" },
    { id: 462, thai: "วิทยาเขต", pinyin: "wit-tha-yaa-khet", meaning: "校區", category: "教育" },
    { id: 463, thai: "ผัดไทย", pinyin: "phat-thai", meaning: "泰式炒河粉", category: "料理" },
    { id: 464, thai: "ต้มยำกุ้ง", pinyin: "tom-yum-gung", meaning: "冬蔭功", category: "料理" },
    { id: 465, thai: "แกงเขียวหวาน", pinyin: "gaeng-khiao-wan", meaning: "綠咖哩", category: "料理" },
    { id: 466, thai: "ส้มตำ", pinyin: "som-tam", meaning: "青木瓜沙拉", category: "料理" },
    { id: 467, thai: "ข้าวมันไก่", pinyin: "khao-man-gai", meaning: "海南雞飯", category: "料理" },
    { id: 468, thai: "ข้าวผัด", pinyin: "khao-phat", meaning: "炒飯", category: "料理" },
    { id: 469, thai: "ต้มข่าไก่", pinyin: "tom-kha-gai", meaning: "椰奶雞湯", category: "料理" },
    { id: 470, thai: "ลาบ", pinyin: "laap", meaning: "東北辣拌", category: "料理" },
    { id: 471, thai: "น้ำพริก", pinyin: "nam-phrik", meaning: "辣醬", category: "料理" },
    { id: 472, thai: "ไข่เจียว", pinyin: "khai-jiao", meaning: "煎蛋", category: "料理" },
    { id: 473, thai: "ไข่ดาว", pinyin: "khai-dao", meaning: "荷包蛋", category: "料理" },
    { id: 474, thai: "หมูกระทะ", pinyin: "muu-gra-tha", meaning: "燒肉火鍋", category: "料理" },
    { id: 475, thai: "หมูปิ้ง", pinyin: "muu-bping", meaning: "烤豬肉串", category: "料理" },
    { id: 476, thai: "ไก่ทอด", pinyin: "gai-thot", meaning: "炸雞", category: "料理" },
    { id: 477, thai: "เนื้อย่าง", pinyin: "nuea-yang", meaning: "烤牛肉", category: "料理" },
    { id: 478, thai: "ปลาทอด", pinyin: "plaa-thot", meaning: "炸魚", category: "料理" },
    { id: 479, thai: "ก๋วยเตี๋ยว", pinyin: "guai-tiao", meaning: "米粉湯", category: "料理" },
    { id: 480, thai: "ขนมจีน", pinyin: "kha-nom-jeen", meaning: "米線", category: "料理" },
    { id: 481, thai: "ข้าวเหนียวมะม่วง", pinyin: "khao-niao-ma-muang", meaning: "芒果糯米", category: "料理" },
    { id: 482, thai: "ข้าวต้ม", pinyin: "khao-tom", meaning: "白粥", category: "料理" },
    { id: 483, thai: "ข้าวแกง", pinyin: "khao-gaeng", meaning: "泰式便當", category: "料理" },
    { id: 484, thai: "แกงพะแนง", pinyin: "gaeng-pha-naeng", meaning: "帕能咖哩", category: "料理" },
    { id: 485, thai: "ผัดกะเพรา", pinyin: "phat-kra-phrao", meaning: "打拋", category: "料理" },
    { id: 486, thai: "ผัดซีอิ๊ว", pinyin: "phat-see-iew", meaning: "醬油炒麵", category: "料理" },
    { id: 487, thai: "ผัดขี้เมา", pinyin: "phat-khi-mao", meaning: "醉翁炒麵", category: "料理" },
    { id: 488, thai: "ข้าวหมูแดง", pinyin: "khao-muu-daeng", meaning: "叉燒飯", category: "料理" },
    { id: 489, thai: "ข้าวขาหมู", pinyin: "khao-kha-muu", meaning: "豬腳飯", category: "料理" },
    { id: 490, thai: "ข้าวหมูกรอบ", pinyin: "khao-muu-krop", meaning: "脆皮豬飯", category: "料理" },
    { id: 491, thai: "ยำทะเล", pinyin: "yam-tha-lay", meaning: "海鮮涼拌", category: "料理" },
    { id: 492, thai: "ยำวุ้นเส้น", pinyin: "yam-woon-sen", meaning: "粉絲涼拌", category: "料理" },
    { id: 493, thai: "ซุปหน่อไม้", pinyin: "sup-nor-mai", meaning: "竹筍湯", category: "料理" },
    { id: 494, thai: "ซุปกระดูก", pinyin: "sup-kra-duuk", meaning: "骨湯", category: "料理" },
    { id: 495, thai: "โจ๊ก", pinyin: "jok", meaning: "稀飯", category: "料理" },
    { id: 496, thai: "บะหมี่", pinyin: "ba-mee", meaning: "蛋麵", category: "料理" },
    { id: 497, thai: "ซูชิ", pinyin: "su-shi", meaning: "壽司", category: "料理" },
    { id: 498, thai: "พิซซ่า", pinyin: "phit-saa", meaning: "披薩", category: "料理" },
    { id: 499, thai: "แซนด์วิช", pinyin: "saen-wich", meaning: "三明治", category: "料理" },
    { id: 500, thai: "ฮอทดอก", pinyin: "hot-dok", meaning: "熱狗", category: "料理" },
  ];

  const consonantData = [
    { char: "ก", name: "ko kai", class: "mid", meaning: "雞" },
    { char: "ข", name: "kho khai", class: "high", meaning: "蛋" },
    { char: "ฃ", name: "kho khuat", class: "high", meaning: "瓶" },
    { char: "ค", name: "kho khwai", class: "low", meaning: "水牛" },
    { char: "ฅ", name: "kho khon", class: "low", meaning: "人" },
    { char: "ฆ", name: "kho ra-khang", class: "low", meaning: "鐘" },
    { char: "ง", name: "ngo ngu", class: "low", meaning: "蛇" },
    { char: "จ", name: "jo jan", class: "mid", meaning: "盤子" },
    { char: "ฉ", name: "cho ching", class: "high", meaning: "鈸" },
    { char: "ช", name: "cho chang", class: "low", meaning: "大象" },
    { char: "ซ", name: "so so", class: "low", meaning: "鎖鏈" },
    { char: "ฌ", name: "cho choe", class: "low", meaning: "樹" },
    { char: "ญ", name: "yo ying", class: "low", meaning: "女人" },
    { char: "ด", name: "do dek", class: "mid", meaning: "小孩" },
    { char: "ต", name: "to tao", class: "mid", meaning: "烏龜" },
    { char: "ถ", name: "tho thung", class: "high", meaning: "袋子" },
    { char: "ท", name: "tho thahan", class: "low", meaning: "士兵" },
    { char: "ธ", name: "tho thong", class: "low", meaning: "旗" },
    { char: "น", name: "no nu", class: "low", meaning: "老鼠" },
    { char: "บ", name: "bo baimai", class: "mid", meaning: "葉子" },
    { char: "ป", name: "po pla", class: "mid", meaning: "魚" },
    { char: "ผ", name: "pho phueng", class: "high", meaning: "蜜蜂" },
    { char: "ฝ", name: "fo fa", class: "high", meaning: "蓋子" },
    { char: "พ", name: "pho phan", class: "low", meaning: "盤子" },
    { char: "ฟ", name: "fo fan", class: "low", meaning: "牙齒" },
    { char: "ภ", name: "pho sam-phao", class: "low", meaning: "帆船" },
    { char: "ม", name: "mo ma", class: "low", meaning: "馬" },
    { char: "ย", name: "yo yak", class: "low", meaning: "巨人" },
    { char: "ร", name: "ro ruea", class: "low", meaning: "船" },
    { char: "ล", name: "lo ling", class: "low", meaning: "猴子" },
    { char: "ว", name: "wo waen", class: "low", meaning: "戒指" },
    { char: "ศ", name: "so sala", class: "high", meaning: "涼亭" },
    { char: "ษ", name: "so rue-si", class: "high", meaning: "隱士" },
    { char: "ส", name: "so suea", class: "high", meaning: "老虎" },
    { char: "ห", name: "ho hip", class: "high", meaning: "箱子" },
    { char: "ฬ", name: "lo chu-la", class: "low", meaning: "風箏" },
    { char: "อ", name: "o ang", class: "mid", meaning: "盆" },
    { char: "ฮ", name: "ho nok-huk", class: "low", meaning: "貓頭鷹" }
  ];

  const vowelData = [
    { char: "-ะ", name: "sara a", type: "short" },
    { char: "-า", name: "sara aa", type: "long" },
    { char: "อิ", name: "sara i", type: "short" },
    { char: "อี", name: "sara ii", type: "long" },
    { char: "อึ", name: "sara ue", type: "short" },
    { char: "อื", name: "sara uue", type: "long" },
    { char: "อุ", name: "sara u", type: "short" },
    { char: "อู", name: "sara uu", type: "long" },
    { char: "เ-ะ", name: "sara e", type: "short" },
    { char: "เ-", name: "sara ee", type: "long" },
    { char: "แ-ะ", name: "sara ae", type: "short" },
    { char: "แ-", name: "sara aae", type: "long" },
    { char: "โ-ะ", name: "sara o", type: "short" },
    { char: "โ-", name: "sara oo", type: "long" },
    { char: "เ-าะ", name: "sara or", type: "short" },
    { char: "-อ", name: "sara oor", type: "long" },
    { char: "เ-อะ", name: "sara oe", type: "short" },
    { char: "เ-อ", name: "sara ooe", type: "long" },
    { char: "เ-ียะ", name: "sara ia (短)", type: "short" },
    { char: "เ-ีย", name: "sara iia (長)", type: "long" },
    { char: "เ-ือะ", name: "sara uea (短)", type: "short" },
    { char: "เ-ือ", name: "sara uuea (長)", type: "long" },
    { char: "อัวะ", name: "sara ua (短)", type: "short" },
    { char: "อัว", name: "sara uua (長)", type: "long" },
    { char: "ำ", name: "sara am", type: "special" },
    { char: "ใ", name: "mai muan (ai)", type: "special" },
    { char: "ไ", name: "mai malai (ai)", type: "special" },
    { char: "เ-า", name: "sara ao", type: "special" }
  ];
  // --- 新增的情境題庫 (放在 return 之前) ---
  const situationData = [
    {
      id: 1,
      category: "交通",
      level: "初級",
      audioText: "ไปสุขุมวิทซอย 11 ครับ", // 這是要播放的聲音
      context: "你是一名計程車司機，乘客上車後說了這句話。",
      question: "乘客想去哪裡？",
      options: [
        { text: "機場", isCorrect: false },
        { text: "素坤逸 11 巷", isCorrect: true },
        { text: "火車站", isCorrect: false }
      ],
      explanation: "乘客說 'Pai Sukhumvit Soi 11 khrap' (去 Sukhumvit 11 巷)。"
    },
    {
      id: 2,
      category: "購物",
      level: "初級",
      audioText: "อันนี้เท่าไหร่คะ",
      context: "你在夜市擺攤，一位女客人指著衣服問你。",
      question: "客人在問什麼？",
      options: [
        { text: "這件多少錢？", isCorrect: true },
        { text: "這件有大號嗎？", isCorrect: false },
        { text: "這件有其他顏色嗎？", isCorrect: false }
      ],
      explanation: "她說 'An ni thao-rai kha' (這個多少錢？)。"
    },
    {
      id: 3,
      category: "禮貌",
      level: "基礎",
      audioText: "ขอโทษครับ",
      context: "你在走路時不小心撞到人，對方說了這句話。",
      question: "對方在表達什麼？",
      options: [
        { text: "謝謝", isCorrect: false },
        { text: "你好", isCorrect: false },
        { text: "對不起/不好意思", isCorrect: true }
      ],
      explanation: "對方說 'Kho thot khrap' (對不起/抱歉)。"
    },
    {
      id: 4,
      category: "飲食",
      level: "初級",
      audioText: "ไม่เผ็ด",
      context: "服務生問你要不要辣，你聽到朋友這樣回答。",
      question: "你的朋友想吃多辣？",
      options: [
        { text: "超級辣", isCorrect: false },
        { text: "一點點辣", isCorrect: false },
        { text: "不辣", isCorrect: true }
      ],
      explanation: "他說 'Mai phet' (不辣)。Mai = 不，Phet = 辣。"
    },
    {
      id: 5,
      category: "問候",
      level: "初級",
      audioText: "สบายดีไหม",
      context: "很久沒見的泰國朋友打電話給你，第一句問你這個。",
      question: "你該如何回答最適合？",
      options: [
        { text: "สบายดี (我很好)", isCorrect: true },
        { text: "ราคาถูก (價格便宜)", isCorrect: false },
        { text: "ไม่ชอบ (不喜歡)", isCorrect: false }
      ],
      explanation: "他問 'Sabai dee mai' (你好嗎？/過得好嗎？)。回答 'Sabai dee' (很好) 是最標準的。"
    },
    // --- 記得要在前一題 (ID: 5) 後面加逗號，然後貼上以下內容 ---
    {
        id: 6,
        category: "餐廳",
        level: "初級",
        audioText: "เก็บตังค์ด้วยครับ",
        context: "你吃完飯了，舉手跟服務生說這句話。",
        question: "你想做什麼？",
        options: [
          { text: "點餐", isCorrect: false },
          { text: "結帳 (埋單)", isCorrect: true },
          { text: "上廁所", isCorrect: false }
        ],
        explanation: "他說 'Gep tang duay khrap'。Gep tang (收錢) = 結帳的意思。也可以說 'Check bin'。"
      },
      {
        id: 7,
        category: "生活",
        level: "初級",
        audioText: "ห้องน้ำอยู่ที่ไหนครับ",
        context: "你在百貨公司很著急地問警衛。",
        question: "你在找什麼地方？",
        options: [
          { text: "電梯", isCorrect: false },
          { text: "出口", isCorrect: false },
          { text: "廁所", isCorrect: true }
        ],
        explanation: "他說 'Hong nam yu tee nai khrap' (廁所在哪裡？)。Hong nam = 廁所。"
      },
      {
        id: 8,
        category: "飲食",
        level: "中級",
        audioText: "เอาลาเต้เย็น หวานน้อยครับ",
        context: "你在咖啡廳點飲料。",
        question: "這位客人想要的甜度是？",
        options: [
          { text: "少糖 (微糖)", isCorrect: true },
          { text: "正常甜", isCorrect: false },
          { text: "完全不加糖", isCorrect: false }
        ],
        explanation: "他說 'Wan noi' (少甜/微糖)。如果是正常甜是 'Wan pok-ka-ti'，不甜是 'Mai wan'。"
      },
      {
        id: 9,
        category: "飲食",
        level: "初級",
        audioText: "ใส่ถุงกลับบ้านครับ",
        context: "你在路邊攤買泰式炒河粉 (Pad Thai)。",
        question: "你想怎麼吃？",
        options: [
          { text: "在這裡吃", isCorrect: false },
          { text: "外帶 (打包)", isCorrect: true },
          { text: "請他外送", isCorrect: false }
        ],
        explanation: "他說 'Sai thung klab baan' (裝袋回家) = 外帶。Sai thung = 裝袋子。"
      },
      {
        id: 10,
        category: "購物",
        level: "中級",
        audioText: "ลดหน่อยได้ไหมครับ",
        context: "你在市集看到一個喜歡的包包，但覺得太貴了。",
        question: "這句話的目的是什麼？",
        options: [
          { text: "詢問是否有新貨", isCorrect: false },
          { text: "殺價 (求打折)", isCorrect: true },
          { text: "詢問能否刷卡", isCorrect: false }
        ],
        explanation: "他說 'Lot noi dai mai' (可以降一點嗎？)。Lot = 降/減。"
      },
      {
        id: 11,
        category: "交通",
        level: "初級",
        audioText: "เลี้ยวซ้ายข้างหน้า",
        context: "你搭計程車快到家了，你正在指揮司機。",
        question: "你要司機怎麼走？",
        options: [
          { text: "前面左轉", isCorrect: true },
          { text: "前面右轉", isCorrect: false },
          { text: "前面直走", isCorrect: false }
        ],
        explanation: "他說 'Liao sai khang na'。Liao sai = 左轉，Liao khwa = 右轉，Trong pai = 直走。"
      },
      {
        id: 12,
        category: "健康",
        level: "中級",
        audioText: "ผมรู้สึกไม่สบาย",
        context: "你打電話給老闆請假，因為身體不舒服。",
        question: "你怎麼了？",
        options: [
          { text: "我很生氣", isCorrect: false },
          { text: "我很餓", isCorrect: false },
          { text: "我不舒服 (生病)", isCorrect: true }
        ],
        explanation: "他說 'Phom ru-suek mai sabai' (我覺得不舒服/生病了)。Mai sabai = 生病。"
      },
      {
        id: 13,
        category: "時間",
        level: "初級",
        audioText: "ตอนนี้กี่โมงแล้วครับ",
        context: "你的手機沒電了，在路上問路人。",
        question: "你在問什麼？",
        options: [
          { text: "現在幾點了？", isCorrect: true },
          { text: "這多少錢？", isCorrect: false },
          { text: "要去哪裡？", isCorrect: false }
        ],
        explanation: "他說 'Ton ni gi mong laew' (現在幾點了？)。Gi mong = 幾點。"
      },
      {
        id: 14,
        category: "社交",
        level: "初級",
        audioText: "แล้วเจอกันใหม่นะ",
        context: "跟朋友聚餐結束，準備各自回家。",
        question: "這句話適合在什麼時候說？",
        options: [
          { text: "初次見面", isCorrect: false },
          { text: "道別 (下次見)", isCorrect: true },
          { text: "道歉", isCorrect: false }
        ],
        explanation: "他說 'Laew jer gan mai na' (然後/下次 再見面吧) = 下次見/拜拜。"
      },
      {
        id: 15,
        category: "住宿",
        level: "中級",
        audioText: "ขอเช็คอินครับ",
        context: "你剛抵達預訂的飯店，走到櫃檯。",
        question: "你想辦理什麼手續？",
        options: [
          { text: "退房 (Check-out)", isCorrect: false },
          { text: "寄放行李", isCorrect: false },
          { text: "入住 (Check-in)", isCorrect: true }
        ],
        explanation: "泰文直接借用英文，說 'Kho Check-in khrap' (我想 Check-in)。"
      },
      // --- 記得在前一題 (ID: 15) 後面加逗號，然後貼上 ---
    {
        id: 16,
        category: "緊急",
        level: "初級",
        audioText: "ช่วยด้วย",
        context: "你在路上看到有人跌倒受傷，或者你自己遇到麻煩。",
        question: "這句話的意思是？",
        options: [
          { text: "你好嗎", isCorrect: false },
          { text: "救命 / 幫忙一下", isCorrect: true },
          { text: "再見", isCorrect: false }
        ],
        explanation: "他說 'Chuay duay' (救命/幫幫我)。這是遇到緊急狀況時最重要的字。"
      },
      {
        id: 17,
        category: "交通",
        level: "初級",
        audioText: "จอดตรงนี้ครับ",
        context: "搭計程車或摩托計程車，已經到了目的地。",
        question: "你想跟司機說什麼？",
        options: [
          { text: "請停在這裡", isCorrect: true },
          { text: "請開快一點", isCorrect: false },
          { text: "請開慢一點", isCorrect: false }
        ],
        explanation: "他說 'Jod trong nee khrap'。Jod = 停，Trong nee = 這裡。"
      },
      {
        id: 18,
        category: "飲食",
        level: "中級",
        audioText: "ไม่เอาน้ำแข็ง",
        context: "你在點泰式奶茶或可樂，但你不想喝太冰。",
        question: "你跟店員提出了什麼要求？",
        options: [
          { text: "多加一點冰", isCorrect: false },
          { text: "不要冰塊 (去冰)", isCorrect: true },
          { text: "不要加糖", isCorrect: false }
        ],
        explanation: "他說 'Mai ao nam khaeng'。Mai ao = 不要，Nam khaeng = 冰塊。"
      },
      {
        id: 19,
        category: "社交",
        level: "初級",
        audioText: "คุณชื่ออะไรครับ",
        context: "剛認識一位泰國新朋友，想進一步認識對方。",
        question: "你在問對方什麼？",
        options: [
          { text: "你幾歲？", isCorrect: false },
          { text: "你家在哪？", isCorrect: false },
          { text: "你叫什麼名字？", isCorrect: true }
        ],
        explanation: "他說 'Khun chue arai khrap'。Chue = 名字，Arai = 什麼。"
      },
      {
        id: 20,
        category: "溝通",
        level: "中級",
        audioText: "ไม่เข้าใจ",
        context: "泰國朋友講了一長串泰文，但你聽不太懂。",
        question: "你該怎麼反應？",
        options: [
          { text: "我不明白/聽不懂", isCorrect: true },
          { text: "我同意", isCorrect: false },
          { text: "沒問題", isCorrect: false }
        ],
        explanation: "他說 'Mai khao jai' (不明白)。Khao jai = 明白/理解。"
      },
      {
        id: 21,
        category: "旅遊",
        level: "中級",
        audioText: "ถ่ายรูปให้หน่อยได้ไหมครับ",
        context: "你在景點，想請路人幫你和風景合照。",
        question: "你在請求什麼？",
        options: [
          { text: "請問廁所在哪？", isCorrect: false },
          { text: "可以幫我拍照嗎？", isCorrect: true },
          { text: "這附近有餐廳嗎？", isCorrect: false }
        ],
        explanation: "他說 'Thai rup hai noi dai mai'。Thai rup = 拍照，Hai noi = 幫忙一下。"
      },
      {
        id: 22,
        category: "餐廳",
        level: "初級",
        audioText: "ขอเมนูหน่อยครับ",
        context: "剛坐進餐廳，桌上空空的。",
        question: "你需要什麼？",
        options: [
          { text: "請給我菜單", isCorrect: true },
          { text: "請給我水", isCorrect: false },
          { text: "請給我帳單", isCorrect: false }
        ],
        explanation: "他說 'Kho menu noi khrap'。Kho = 給我/請求，Menu = 菜單。"
      },
      {
        id: 23,
        category: "一般",
        level: "中級",
        audioText: "รอสักครู่ครับ",
        context: "你去櫃檯詢問事情，櫃檯人員正在講電話，他對你說這句話。",
        question: "他請你做什麼？",
        options: [
          { text: "請稍等一下", isCorrect: true },
          { text: "請明天再來", isCorrect: false },
          { text: "請大聲一點", isCorrect: false }
        ],
        explanation: "他說 'Ror sak khru' (稍等片刻)。Ror = 等待。"
      },
      {
        id: 24,
        category: "購物",
        level: "中級",
        audioText: "รับบัตรเครดิตไหมครับ",
        context: "你身上現金不夠，想問店員付款方式。",
        question: "你在問什麼？",
        options: [
          { text: "可以收現金嗎？", isCorrect: false },
          { text: "可以轉帳嗎？", isCorrect: false },
          { text: "可以刷信用卡嗎？", isCorrect: true }
        ],
        explanation: "他說 'Rap bat credit mai khrap'。Rap = 收，Bat credit = 信用卡。"
      },
      {
        id: 25,
        category: "飲食",
        level: "中級",
        audioText: "หิวข้าว",
        context: "已經下午兩點了，你摸著肚子對朋友說。",
        question: "你的感覺是什麼？",
        options: [
          { text: "我很渴", isCorrect: false },
          { text: "我很累", isCorrect: false },
          { text: "我肚子餓", isCorrect: true }
        ],
        explanation: "他說 'Hiw khao' (餓飯) = 肚子餓。如果是口渴是 'Hiw nam' (渴水)。"
      },
      // --- 記得在前一題 (ID: 25) 後面加逗號，然後貼上 ---
    {
        id: 26,
        category: "按摩",
        level: "中級",
        audioText: "เจ็บครับ เบาๆ หน่อย",
        context: "你正在享受泰式按摩，但師傅按得太大力了。",
        question: "你想跟師傅說什麼？",
        options: [
          { text: "請按大力一點", isCorrect: false },
          { text: "好痛，請輕一點", isCorrect: true },
          { text: "這裡不要按", isCorrect: false }
        ],
        explanation: "他說 'Jep khrap, bao bao noi'。Jep = 痛，Bao bao = 輕輕的。如果要大力一點是 'Nak nak' (重重)。"
      },
      {
        id: 27,
        category: "便利商店",
        level: "初級",
        audioText: "เวฟไหมคะ",
        context: "你在泰國 7-11 買便當，店員結帳時問你這句話。",
        question: "店員在問什麼？",
        options: [
          { text: "要不要微波加熱？", isCorrect: true },
          { text: "要不要袋子？", isCorrect: false },
          { text: "有會員卡嗎？", isCorrect: false }
        ],
        explanation: "這是泰國 7-11 經典用語！'Wave mai kha' 來自 Microwave (微波)。"
      },
      {
        id: 28,
        category: "天氣",
        level: "初級",
        audioText: "วันนี้ร้อนมาก",
        context: "你走出飯店，感受到泰國的太陽，忍不住說了一句。",
        question: "天氣如何？",
        options: [
          { text: "下大雨", isCorrect: false },
          { text: "很涼爽", isCorrect: false },
          { text: "今天非常熱", isCorrect: true }
        ],
        explanation: "他說 'Wan ni ron mak'。Wan ni = 今天，Ron = 熱，Mak = 非常。"
      },
      {
        id: 29,
        category: "網路",
        level: "中級",
        audioText: "รหัสไวไฟคืออะไรครับ",
        context: "你剛到咖啡廳坐下，拿出筆電。",
        question: "你在問店員什麼？",
        options: [
          { text: "廁所密碼是什麼？", isCorrect: false },
          { text: "WiFi 密碼是什麼？", isCorrect: true },
          { text: "這杯飲料是什麼？", isCorrect: false }
        ],
        explanation: "他說 'Rahat Wifi khue arai khrap'。Rahat = 密碼，Khue = 是。"
      },
      {
        id: 30,
        category: "交通",
        level: "中級",
        audioText: "ไกลไหมครับ",
        context: "你想去一個景點，但不確定走路能不能到，你問路人。",
        question: "你在問什麼？",
        options: [
          { text: "會很遠嗎？", isCorrect: true },
          { text: "在附近嗎？", isCorrect: false },
          { text: "要多少錢？", isCorrect: false }
        ],
        explanation: "他說 'Glai mai khrap' (遠嗎？)。注意聲調：Glai (中音) 是遠，Klai (三聲) 是近。"
      },
      {
        id: 31,
        category: "飲食",
        level: "中級",
        audioText: "ไม่ใส่ผงชูรส",
        context: "你在路邊攤點青木瓜沙拉 (Som Tam)，你特別交代老闆。",
        question: "你的飲食需求是？",
        options: [
          { text: "不要加辣", isCorrect: false },
          { text: "不要加味精", isCorrect: true },
          { text: "不要加糖", isCorrect: false }
        ],
        explanation: "他說 'Mai sai phong-chu-rot'。Mai sai = 不放，Phong-chu-rot = 味精。"
      },
      {
        id: 32,
        category: "社交",
        level: "初級",
        audioText: "คุณมาจากไหนครับ",
        context: "你在背包客棧認識新朋友，大家在聊天。",
        question: "這句話在問什麼？",
        options: [
          { text: "你要去哪裡？", isCorrect: false },
          { text: "你來自哪裡？(哪國人)", isCorrect: true },
          { text: "你幾歲？", isCorrect: false }
        ],
        explanation: "他說 'Khun ma jak nai khrap'。Ma jak = 來自，Nai = 哪裡。"
      },
      {
        id: 33,
        category: "個人物品",
        level: "初級",
        audioText: "มือถือหาย",
        context: "你摸摸口袋，突然驚慌失措地大叫。",
        question: "發生什麼事了？",
        options: [
          { text: "肚子痛", isCorrect: false },
          { text: "錢包不見了", isCorrect: false },
          { text: "手機不見了", isCorrect: true }
        ],
        explanation: "他說 'Mue thue hai'。Mue thue = 手機，Hai = 消失/不見。"
      },
      {
        id: 34,
        category: "讚美",
        level: "初級",
        audioText: "น่ารักจังเลย",
        context: "你看到朋友帶了一隻小狗，或是看到可愛的小孩。",
        question: "你在表達什麼？",
        options: [
          { text: "真可愛", isCorrect: true },
          { text: "真漂亮 (形容風景)", isCorrect: false },
          { text: "真好吃", isCorrect: false }
        ],
        explanation: "他說 'Narak jang loei'。Narak = 可愛，Jang loei = 真的/超級。"
      },
      {
        id: 35,
        category: "交通",
        level: "中級",
        audioText: "รถติดมาก",
        context: "你打電話給朋友說你會遲到，因為曼谷的交通狀況。",
        question: "遲到的原因是什麼？",
        options: [
          { text: "司機迷路", isCorrect: false },
          { text: "下大雨", isCorrect: false },
          { text: "塞車非常嚴重", isCorrect: true }
        ],
        explanation: "他說 'Rot tit mak'。Rot = 車，Tit = 卡住/黏住，Rot tit = 塞車。"
      },
      // --- 記得在前一題 (ID: 35) 後面加逗號，然後貼上 ---
    {
        id: 36,
        category: "溝通",
        level: "中級",
        audioText: "พูดช้าๆ หน่อยได้ไหมครับ",
        context: "泰國人說話太快，你聽得一頭霧水。",
        question: "你想請對方怎麼做？",
        options: [
          { text: "請再說一次", isCorrect: false },
          { text: "請說慢一點", isCorrect: true },
          { text: "請說大聲一點", isCorrect: false }
        ],
        explanation: "他說 'Phut cha-cha noi dai mai khrap'。Phut = 說，Cha-cha = 慢慢地。"
      },
      {
        id: 37,
        category: "購物",
        level: "中級",
        audioText: "ขอลองได้ไหมครับ",
        context: "你在服飾店看到一件喜歡的衣服，拿起來走向店員。",
        question: "你想做什麼？",
        options: [
          { text: "請問有新的嗎？", isCorrect: false },
          { text: "請問可以試穿嗎？", isCorrect: true },
          { text: "請問可以退貨嗎？", isCorrect: false }
        ],
        explanation: "他說 'Kho long dai mai khrap'。Kho = 請求，Long = 試 (試穿/嘗試)。"
      },
      {
        id: 38,
        category: "感受",
        level: "初級",
        audioText: "สนุกมาก",
        context: "朋友問你昨天去參加潑水節 (Songkran) 的感覺如何。",
        question: "你的回答是？",
        options: [
          { text: "非常累", isCorrect: false },
          { text: "非常熱", isCorrect: false },
          { text: "非常好玩", isCorrect: true }
        ],
        explanation: "他說 'Sanuk mak'。Sanuk = 好玩/樂趣。這是泰國文化中很重要的詞。"
      },
      {
        id: 39,
        category: "交通",
        level: "中級",
        audioText: "ไปสนามบินสุวรรณภูมิ",
        context: "你要回國了，上計程車告訴司機目的地。",
        question: "你要去哪裡？",
        options: [
          { text: "去廊曼機場 (舊機場)", isCorrect: false },
          { text: "去蘇凡納布機場 (新機場)", isCorrect: true },
          { text: "去火車站", isCorrect: false }
        ],
        explanation: "他說 'Pai Sanam-bin Suvarnabhumi'。Sanam-bin = 機場。"
      },
      {
        id: 40,
        category: "生活",
        level: "初級",
        audioText: "ไปอาบน้ำก่อนนะ",
        context: "天氣很熱，你剛回到家，滿身大汗地對室友說。",
        question: "你要去做什麼？",
        options: [
          { text: "去吃飯", isCorrect: false },
          { text: "去睡覺", isCorrect: false },
          { text: "去洗澡", isCorrect: true }
        ],
        explanation: "他說 'Pai ap-nam gon na'。Ap-nam = 洗澡，Gon = 先 (先去洗澡)。"
      },
      {
        id: 41,
        category: "結帳",
        level: "中級",
        audioText: "ไม่ต้องทอนครับ",
        context: "搭計程車車資 95 銖，你給了司機 100 銖並說了這句話。",
        question: "這句話的意思是？",
        options: [
          { text: "不用找錢了 (不用找零)", isCorrect: true },
          { text: "一定要找錢", isCorrect: false },
          { text: "我沒有零錢", isCorrect: false }
        ],
        explanation: "他說 'Mai tong thon khrap'。Thon = 找錢。這通常用於給小費。"
      },
      {
        id: 42,
        category: "地點",
        level: "初級",
        audioText: "เซเว่นอยู่ที่ไหน",
        context: "半夜肚子餓，你想買宵夜，於是問飯店櫃檯。",
        question: "你在找什麼店？",
        options: [
          { text: "藥局", isCorrect: false },
          { text: "全家便利商店", isCorrect: false },
          { text: "7-11 便利商店", isCorrect: true }
        ],
        explanation: "他說 'Seven yu tee nai'。泰國人習慣直接叫 7-11 為 'Seven'。"
      },
      {
        id: 43,
        category: "健康",
        level: "中級",
        audioText: "ปวดหัว",
        context: "你去藥局買藥，藥劑師問你哪裡不舒服。",
        question: "你的症狀是？",
        options: [
          { text: "肚子痛", isCorrect: false },
          { text: "頭痛", isCorrect: true },
          { text: "喉嚨痛", isCorrect: false }
        ],
        explanation: "他說 'Puat hua'。Puat = 痛/痠痛，Hua = 頭。"
      },
      {
        id: 44,
        category: "飲食",
        level: "中級",
        audioText: "ขอน้ำเปล่า 1 ขวด",
        context: "進餐廳坐下，不想喝飲料，只想喝最基本的。",
        question: "你點了什麼？",
        options: [
          { text: "一杯冰塊", isCorrect: false },
          { text: "一瓶水 (白開水)", isCorrect: true },
          { text: "一瓶啤酒", isCorrect: false }
        ],
        explanation: "他說 'Kho nam-plao nueng khuat'。Nam-plao = 白水/礦泉水，Khuat = 瓶。"
      },
      {
        id: 45,
        category: "祝福",
        level: "初級",
        audioText: "ขอให้โชคดี",
        context: "朋友要去考試，或是要出遠門旅行，你對他說這句話。",
        question: "這句話是什麼意思？",
        options: [
          { text: "祝你好運", isCorrect: true },
          { text: "路上小心", isCorrect: false },
          { text: "早日康復", isCorrect: false }
        ],
        explanation: "他說 'Kho hai chok-dee'。Chok-dee = 好運。"
      },
      // --- 記得在前一題 (ID: 45) 後面加逗號，然後貼上 ---
    {
        id: 46,
        category: "飲食",
        level: "初級",
        audioText: "อร่อยมาก",
        context: "你吃完了一頓大餐，廚師或店員問你味道如何。",
        question: "你的評價是？",
        options: [
          { text: "非常辣", isCorrect: false },
          { text: "非常難吃", isCorrect: false },
          { text: "非常好吃", isCorrect: true }
        ],
        explanation: "他說 'Aroi mak'。Aroi = 好吃，Mak = 非常。"
      },
      {
        id: 47,
        category: "交通",
        level: "中級",
        audioText: "ช่วยเปิดมิเตอร์ด้วยครับ",
        context: "上計程車後，司機喊價 300 銖，但你想照里程算。",
        question: "你想跟司機說什麼？",
        options: [
          { text: "請開冷氣", isCorrect: false },
          { text: "請跳錶 (By Meter)", isCorrect: true },
          { text: "請開快一點", isCorrect: false }
        ],
        explanation: "他說 'Chuay poed meter duay khrap'。Poed = 開，Meter = 跳錶/計程表。"
      },
      {
        id: 48,
        category: "交通",
        level: "初級",
        audioText: "ตรงไปเรื่อยๆ",
        context: "你正在指路，目的地不在左邊也不在右邊。",
        question: "你要司機怎麼走？",
        options: [
          { text: "一直直走", isCorrect: true },
          { text: "前面迴轉", isCorrect: false },
          { text: "停車", isCorrect: false }
        ],
        explanation: "他說 'Trong pai rueai-rueai'。Trong pai = 直走，Rueai-rueai = 繼續/一直。"
      },
      {
        id: 49,
        category: "飲食",
        level: "初級",
        audioText: "อิ่มแล้ว",
        context: "泰國朋友想再幫你點一盤菜，但你已經吃不下了。",
        question: "你的狀態是？",
        options: [
          { text: "我很餓", isCorrect: false },
          { text: "我吃飽了", isCorrect: true },
          { text: "我喝醉了", isCorrect: false }
        ],
        explanation: "他說 'Im laew'。Im = 飽，Laew = 了 (已經)。"
      },
      {
        id: 50,
        category: "疑問",
        level: "初級",
        audioText: "อันนี้คืออะไร",
        context: "你在路邊攤看到一個沒看過的食物，很好奇。",
        question: "你在問什麼？",
        options: [
          { text: "這是什麼？", isCorrect: true },
          { text: "這多少錢？", isCorrect: false },
          { text: "廁所在哪？", isCorrect: false }
        ],
        explanation: "他說 'An ni khue arai'。An ni = 這個，Khue = 是，Arai = 什麼。"
      },
      {
        id: 51,
        category: "付款",
        level: "中級",
        audioText: "สแกนจ่ายได้ไหมครับ",
        context: "現在泰國很流行手機支付，你想問店家能不能用。",
        question: "你在問什麼？",
        options: [
          { text: "可以刷卡嗎？", isCorrect: false },
          { text: "可以付現嗎？", isCorrect: false },
          { text: "可以掃碼 (QR Code) 付款嗎？", isCorrect: true }
        ],
        explanation: "他說 'Scan jai dai mai khrap'。Scan = 掃描，Jai = 付款。泰國路邊攤幾乎都能掃碼。"
      },
      {
        id: 52,
        category: "感受",
        level: "初級",
        audioText: "ง่วงนอน",
        context: "開了一整天的會，或是玩了一整天，你打了一個哈欠。",
        question: "你的感覺是？",
        options: [
          { text: "想睡覺 (睏)", isCorrect: true },
          { text: "很無聊", isCorrect: false },
          { text: "肚子餓", isCorrect: false }
        ],
        explanation: "他說 'Nguang non'。Nguang = 睏，Non = 睡覺。"
      },
      {
        id: 53,
        category: "生活",
        level: "初級",
        audioText: "ขอทิชชู่หน่อยครับ",
        context: "在餐廳吃飯嘴巴髒了，或是上廁所發現沒衛生紙。",
        question: "你在請求什麼？",
        options: [
          { text: "請給我水", isCorrect: false },
          { text: "請給我菜單", isCorrect: false },
          { text: "請給我衛生紙", isCorrect: true }
        ],
        explanation: "他說 'Kho thitt-chu noi khrap'。Thitt-chu = Tissue (衛生紙)。"
      },
      {
        id: 54,
        category: "地點",
        level: "中級",
        audioText: "อยู่ใกล้ๆ",
        context: "你問路人 7-11 在哪，他指著轉角說這句話。",
        question: "距離遠嗎？",
        options: [
          { text: "非常遠", isCorrect: false },
          { text: "就在附近 (很近)", isCorrect: true },
          { text: "要搭車才會到", isCorrect: false }
        ],
        explanation: "他說 'Yu klai klai'。Klai (三聲) = 近。注意跟 Glai (平聲/遠) 的區別。"
      },
      {
        id: 55,
        category: "拒絕",
        level: "初級",
        audioText: "ไม่เป็นไรครับ",
        context: "路邊有嘟嘟車司機一直問你要不要搭車，但你不想。",
        question: "這句話在這個情境下的意思是？",
        options: [
          { text: "沒關係 (原諒對方)", isCorrect: false },
          { text: "沒關係，不用了 (委婉拒絕)", isCorrect: true },
          { text: "好的，謝謝", isCorrect: false }
        ],
        explanation: "雖然 'Mai pen rai' 常指「沒關係」，但在拒絕推銷時，它也是「不用了，謝謝」的禮貌說法。"
      },
      // --- 記得在前一題 (ID: 55) 後面加逗號，然後貼上 ---
    {
        id: 56,
        category: "緊急",
        level: "中級",
        audioText: "ฉันหลงทาง",
        context: "你在曼谷的小巷子裡繞了很久，找不到飯店，不得不向路人求助。",
        question: "發生了什麼事？",
        options: [
          { text: "我錢包掉了", isCorrect: false },
          { text: "我迷路了", isCorrect: true },
          { text: "我餓了", isCorrect: false }
        ],
        explanation: "他說 'Chan long thang'。Long thang = 迷路。"
      },
      {
        id: 57,
        category: "購物",
        level: "初級",
        audioText: "ชิมได้ไหมครับ",
        context: "你在水上市場看到看起來很好看的水果，想試試看味道。",
        question: "你在問老闆什麼？",
        options: [
          { text: "可以試吃嗎？", isCorrect: true },
          { text: "可以算便宜一點嗎？", isCorrect: false },
          { text: "這個很甜嗎？", isCorrect: false }
        ],
        explanation: "他說 'Chim dai mai khrap'。Chim = 嚐/試吃。在泰國市集通常都可以試吃。"
      },
      {
        id: 58,
        category: "天氣",
        level: "初級",
        audioText: "ฝนตกหนัก",
        context: "原本大太陽，突然天空變黑，朋友看著窗外說。",
        question: "天氣怎麼了？",
        options: [
          { text: "出大太陽", isCorrect: false },
          { text: "下大雨", isCorrect: true },
          { text: "下雪了", isCorrect: false }
        ],
        explanation: "他說 'Fon tok nak'。Fon tok = 下雨，Nak = 重/大 (形容雨勢大)。"
      },
      {
        id: 59,
        category: "社交",
        level: "初級",
        audioText: "คิดถึงมาก",
        context: "你回國後打電話給泰國的好朋友或戀人。",
        question: "你在表達什麼感情？",
        options: [
          { text: "非常生氣", isCorrect: false },
          { text: "非常想念", isCorrect: true },
          { text: "非常討厭", isCorrect: false }
        ],
        explanation: "他說 'Khit thueng mak'。Khit thueng = 想念/思念。"
      },
      {
        id: 60,
        category: "生活",
        level: "中級",
        audioText: "แบตหมด",
        context: "你想拿手機出來拍照，結果螢幕全黑打不開，你無奈地說。",
        question: "手機怎麼了？",
        options: [
          { text: "手機壞了", isCorrect: false },
          { text: "手機沒電了", isCorrect: true },
          { text: "手機沒訊號", isCorrect: false }
        ],
        explanation: "他說 'Baet mot'。Baet = Battery (電池)，Mot = 完/盡/沒有了。"
      },
      {
        id: 61,
        category: "社交",
        level: "中級",
        audioText: "ขอโทษที่มาช้า",
        context: "約好下午兩點見面，但你因為塞車兩點半才到。",
        question: "你見面第一句話該說什麼？",
        options: [
          { text: "抱歉我遲到了", isCorrect: true },
          { text: "我也剛到", isCorrect: false },
          { text: "你去哪裡了？", isCorrect: false }
        ],
        explanation: "他說 'Kho-thot tee ma cha'。Ma cha = 來晚了/遲到。"
      },
      {
        id: 62,
        category: "購物",
        level: "中級",
        audioText: "มีไซส์ใหญ่กว่านี้ไหมครับ",
        context: "這件衣服很喜歡，但穿起來太緊了。",
        question: "你在問店員什麼？",
        options: [
          { text: "有其他的顏色嗎？", isCorrect: false },
          { text: "有小一點的尺寸嗎？", isCorrect: false },
          { text: "有大一點的尺寸嗎？", isCorrect: true }
        ],
        explanation: "他說 'Mi sai yai kwa ni mai'。Sai = Size，Yai kwa = 比這大。"
      },
      {
        id: 63,
        category: "金融",
        level: "中級",
        audioText: "แลกเงินที่ไหนครับ",
        context: "你剛到機場，身上只有美金，想找地方換泰銖。",
        question: "你在找什麼地方？",
        options: [
          { text: "ATM 提款機", isCorrect: false },
          { text: "換錢所 (匯兌處)", isCorrect: true },
          { text: "退稅櫃台", isCorrect: false }
        ],
        explanation: "他說 'Laek ngoen tee nai khrap'。Laek = 交換，Ngoen = 錢。"
      },
      {
        id: 64,
        category: "溝通",
        level: "初級",
        audioText: "พูดเล่น",
        context: "朋友跟你說了一個很誇張的消息，看你嚇一跳後，他笑著說這句話。",
        question: "他的意思是？",
        options: [
          { text: "我是認真的", isCorrect: false },
          { text: "我說謊", isCorrect: false },
          { text: "開玩笑的 / 說著玩的", isCorrect: true }
        ],
        explanation: "他說 'Phut len'。Phut = 說，Len = 玩。意思就是開玩笑 (Joking)。"
      },
      {
        id: 65,
        category: "安全",
        level: "初級",
        audioText: "อันตราย",
        context: "你想走捷徑穿過工地，警衛把你攔下來大喊。",
        question: "警衛在警告你什麼？",
        options: [
          { text: "這裡很漂亮", isCorrect: false },
          { text: "這裡很危險", isCorrect: true },
          { text: "這裡有冷氣", isCorrect: false }
        ],
        explanation: "他說 'Antarai'。意思是危險 (Dangerous)。看到這個標誌要小心。"
      },
      // --- 記得在前一題 (ID: 65) 後面加逗號，然後貼上 ---
    {
        id: 66,
        category: "交通",
        level: "中級",
        audioText: "ขับช้าๆ หน่อยครับ",
        context: "計程車司機開得像賽車一樣快，你覺得很害怕。",
        question: "你想跟司機說什麼？",
        options: [
          { text: "請開快一點", isCorrect: false },
          { text: "請開慢一點", isCorrect: true },
          { text: "請停車", isCorrect: false }
        ],
        explanation: "他說 'Khap cha-cha noi khrap'。Khap = 開(車)，Cha-cha = 慢慢地。"
      },
      {
        id: 67,
        category: "飲食",
        level: "中級",
        audioText: "กินเจ",
        context: "朋友約你去吃海鮮餐廳，但你因為信仰或習慣不能吃肉。",
        question: "你跟朋友說你的飲食習慣是？",
        options: [
          { text: "我吃素 (齋)", isCorrect: true },
          { text: "我吃很辣", isCorrect: false },
          { text: "我不吃牛肉", isCorrect: false }
        ],
        explanation: "他說 'Gin Jay'。Gin = 吃，Jay = 齋。泰國的齋戒節 (Tesagan Gin Jay) 很有名。"
      },
      {
        id: 68,
        category: "購物",
        level: "初級",
        audioText: "แพงไป",
        context: "在市集問完價格後，你搖搖頭準備離開。",
        question: "你覺得這個商品的價格如何？",
        options: [
          { text: "太便宜了", isCorrect: false },
          { text: "太貴了", isCorrect: true },
          { text: "剛剛好", isCorrect: false }
        ],
        explanation: "他說 'Phaeng pai'。Phaeng = 貴，Pai = 去/太過 (放在形容詞後)。"
      },
      {
        id: 69,
        category: "時間",
        level: "中級",
        audioText: "นานไหมครับ",
        context: "你在餐廳等菜等很久了，或者問司機去目的地要多久。",
        question: "你在問什麼？",
        options: [
          { text: "難嗎？", isCorrect: false },
          { text: "久嗎？(要很久嗎？)", isCorrect: true },
          { text: "遠嗎？", isCorrect: false }
        ],
        explanation: "他說 'Nan mai khrap'。Nan = 久。"
      },
      {
        id: 70,
        category: "健康",
        level: "中級",
        audioText: "มีไข้",
        context: "你覺得身體發燙、發冷，去藥局買藥。",
        question: "你的症狀是？",
        options: [
          { text: "咳嗽", isCorrect: false },
          { text: "發燒", isCorrect: true },
          { text: "流鼻水", isCorrect: false }
        ],
        explanation: "他說 'Mi khai'。Mi = 有，Khai = 發燒 (Fever)。"
      },
      {
        id: 71,
        category: "地點",
        level: "中級",
        audioText: "อยู่ตรงข้ามโรงแรม",
        context: "你問路人便利商店在哪，他指著對面說。",
        question: "便利商店的位置是？",
        options: [
          { text: "在飯店裡面", isCorrect: false },
          { text: "在飯店後面", isCorrect: false },
          { text: "在飯店對面", isCorrect: true }
        ],
        explanation: "他說 'Yu trong-kham rong-raem'。Trong-kham = 對面，Rong-raem = 飯店。"
      },
      {
        id: 72,
        category: "感受",
        level: "初級",
        audioText: "เหนื่อยมาก",
        context: "爬山爬了一整天，或是工作加班到深夜。",
        question: "你現在的感覺是？",
        options: [
          { text: "非常餓", isCorrect: false },
          { text: "非常累", isCorrect: true },
          { text: "非常開心", isCorrect: false }
        ],
        explanation: "他說 'Nueai mak'。Nueai = 累。"
      },
      {
        id: 73,
        category: "緊急",
        level: "中級",
        audioText: "กระเป๋าตังค์หาย",
        context: "你付錢時發現包包被割破了，驚慌地對警察說。",
        question: "你掉了什麼？",
        options: [
          { text: "護照不見了", isCorrect: false },
          { text: "手機不見了", isCorrect: false },
          { text: "錢包不見了", isCorrect: true }
        ],
        explanation: "他說 'Krapao tang hai'。Krapao = 包，Tang = 錢 (Satang)，Krapao tang = 錢包。"
      },
      {
        id: 74,
        category: "電話",
        level: "中級",
        audioText: "โทรผิดครับ",
        context: "你接到一通陌生電話，對方講了一堆你聽不懂的名字。",
        question: "你應該跟對方說什麼？",
        options: [
          { text: "打錯電話了", isCorrect: true },
          { text: "請稍等一下", isCorrect: false },
          { text: "你好嗎", isCorrect: false }
        ],
        explanation: "他說 'Tho phit khrap'。Tho = 打電話，Phit = 錯。"
      },
      {
        id: 75,
        category: "社交",
        level: "中級",
        audioText: "ขอนั่งตรงนี้ได้ไหมครับ",
        context: "在美食街或捷運上，看到有一個空位。",
        question: "你在問什麼？",
        options: [
          { text: "請問廁所在這裡嗎？", isCorrect: false },
          { text: "請問這多少錢？", isCorrect: false },
          { text: "請問我可以坐這裡嗎？", isCorrect: true }
        ],
        explanation: "他說 'Kho nang trong nee dai mai'。Nang = 坐，Trong nee = 這裡。"
      },
      // --- 記得在前一題 (ID: 75) 後面加逗號，然後貼上 ---
    {
        id: 76,
        category: "住宿",
        level: "中級",
        audioText: "แอร์ไม่เย็น",
        context: "你在飯店房間打電話給櫃檯，抱怨房間的問題。",
        question: "房間發生了什麼事？",
        options: [
          { text: "沒熱水", isCorrect: false },
          { text: "冷氣不冷", isCorrect: true },
          { text: "馬桶不通", isCorrect: false }
        ],
        explanation: "他說 'Air mai yen'。Air = 冷氣 (Air-con)，Yen = 冷/涼。泰國很熱，冷氣不冷是大事！"
      },
      {
        id: 77,
        category: "溝通",
        level: "初級",
        audioText: "ไม่รู้",
        context: "路人問你路，但你也是觀光客，你聳聳肩回答。",
        question: "你的意思是？",
        options: [
          { text: "我不要", isCorrect: false },
          { text: "我不去", isCorrect: false },
          { text: "我不知道", isCorrect: true }
        ],
        explanation: "他說 'Mai ru'。Ru = 知道。這是最直接的回答。"
      },
      {
        id: 78,
        category: "購物",
        level: "中級",
        audioText: "มีสีอื่นไหม",
        context: "你看中一件T恤，但不想買架上展示的顏色。",
        question: "你在問店員什麼？",
        options: [
          { text: "有別的尺寸嗎？", isCorrect: false },
          { text: "有新的嗎？", isCorrect: false },
          { text: "有別的顏色嗎？", isCorrect: true }
        ],
        explanation: "他說 'Mi si uen mai'。Si = 顏色，Uen = 其他/別的。"
      },
      {
        id: 79,
        category: "時間",
        level: "初級",
        audioText: "พรุ่งนี้",
        context: "朋友約你見面，你問他什麼時候。",
        question: "朋友說的時間是？",
        options: [
          { text: "今天", isCorrect: false },
          { text: "明天", isCorrect: true },
          { text: "昨天", isCorrect: false }
        ],
        explanation: "他說 'Phrung ni' = 明天。Wan ni = 今天，Muea wan = 昨天。"
      },
      {
        id: 80,
        category: "社交",
        level: "中級",
        audioText: "โสด",
        context: "在酒吧聊天，有人問你有沒有男女朋友，你回答這個字。",
        question: "你的感情狀態是？",
        options: [
          { text: "已婚", isCorrect: false },
          { text: "單身", isCorrect: true },
          { text: "有對象了", isCorrect: false }
        ],
        explanation: "他說 'Sot' (單身)。"
      },
      {
        id: 81,
        category: "否定",
        level: "初級",
        audioText: "ไม่ใช่",
        context: "警察指著地上的垃圾問是不是你的，你急忙否認。",
        question: "你的回答是？",
        options: [
          { text: "不是 / 不對", isCorrect: true },
          { text: "沒有 / 不在", isCorrect: false },
          { text: "不知道", isCorrect: false }
        ],
        explanation: "他說 'Mai chai'。Chai = 是/對，Mai chai = 不是/不對。"
      },
      {
        id: 82,
        category: "地點",
        level: "初級",
        audioText: "ทางออก",
        context: "你在捷運站 (BTS) 裡迷失方向，抬頭看指示牌找這兩個字。",
        question: "你在找什麼？",
        options: [
          { text: "入口", isCorrect: false },
          { text: "售票處", isCorrect: false },
          { text: "出口", isCorrect: true }
        ],
        explanation: "他說 'Thang ok'。Thang = 路，Ok = 出。Thang ok = 出口 (Exit)。"
      },
      {
        id: 83,
        category: "飲食",
        level: "中級",
        audioText: "หวานปกติ",
        context: "店員問你飲料甜度，你不想太甜也不想無糖。",
        question: "你選擇的甜度是？",
        options: [
          { text: "少糖", isCorrect: false },
          { text: "全糖 (正常甜)", isCorrect: true },
          { text: "無糖", isCorrect: false }
        ],
        explanation: "他說 'Wan pok-ka-ti'。Pok-ka-ti = 正常 (Normal)。在泰國，'正常甜' 通常非常甜！"
      },
      {
        id: 84,
        category: "感受",
        level: "初級",
        audioText: "เบื่อ",
        context: "外面下大雨哪裡都不能去，你癱在沙發上嘆氣。",
        question: "你的感覺是？",
        options: [
          { text: "很餓", isCorrect: false },
          { text: "很無聊 / 厭煩", isCorrect: true },
          { text: "很冷", isCorrect: false }
        ],
        explanation: "他說 'Buea' (無聊/厭倦)。也可以說 'Na buea' (真無聊)。"
      },
      {
        id: 85,
        category: "餐廳",
        level: "中級",
        audioText: "เติมน้ำหน่อยครับ",
        context: "你在餐廳吃飯，杯子空了，揮手叫服務生。",
        question: "你需要什麼服務？",
        options: [
          { text: "請幫我加水", isCorrect: true },
          { text: "請幫我收盤子", isCorrect: false },
          { text: "請給我帳單", isCorrect: false }
        ],
        explanation: "他說 'Toem nam noi khrap'。Toem = 加/填滿，Nam = 水。"
      },
      // --- 記得在前一題 (ID: 85) 後面加逗號，然後貼上 ---
    {
        id: 86,
        category: "購物",
        level: "初級",
        audioText: "ขอดูก่อนครับ",
        context: "店員很熱情地一直向你推銷，但你目前還不想買，只想隨意逛逛。",
        question: "你想跟店員說什麼？",
        options: [
          { text: "我先看看 (隨便逛逛)", isCorrect: true },
          { text: "我要買這個", isCorrect: false },
          { text: "這個我不喜歡", isCorrect: false }
        ],
        explanation: "他說 'Kho du gon khrap'。Kho = 請求，Du = 看，Gon = 先。意思就是「讓我先看看」。"
      },
      {
        id: 87,
        category: "健康",
        level: "中級",
        audioText: "ปวดท้อง",
        context: "可能吃了太辣的東西，你按著肚子對朋友說。",
        question: "你不舒服的症狀是？",
        options: [
          { text: "頭痛", isCorrect: false },
          { text: "牙齒痛", isCorrect: false },
          { text: "肚子痛", isCorrect: true }
        ],
        explanation: "他說 'Puat thong'。Puat = 痛，Thong = 肚子。"
      },
      {
        id: 88,
        category: "情緒",
        level: "中級",
        audioText: "ใจเย็นๆ",
        context: "朋友因為塞車非常生氣，一直在抱怨，你安撫他。",
        question: "你叫朋友做什麼？",
        options: [
          { text: "開快一點", isCorrect: false },
          { text: "冷靜一點", isCorrect: true },
          { text: "大聲一點", isCorrect: false }
        ],
        explanation: "他說 'Jai yen yen'。Jai = 心，Yen = 涼。讓心涼下來 = 冷靜 (Calm down)。"
      },
      {
        id: 89,
        category: "交通",
        level: "中級",
        audioText: "สถานีต่อไป",
        context: "你在搭 BTS (空鐵) 或 MRT (地鐵) 時，廣播傳來這句話。",
        question: "廣播在說什麼？",
        options: [
          { text: "終點站", isCorrect: false },
          { text: "下一站", isCorrect: true },
          { text: "請小心間隙", isCorrect: false }
        ],
        explanation: "他說 'Sathanee tor pai'。Sathanee = 車站，Tor pai = 下一個 (Next)。"
      },
      {
        id: 90,
        category: "飲食",
        level: "初級",
        audioText: "เอาเหมือนกัน",
        context: "你看到隔壁桌吃的東西看起來很好吃，或是朋友點了一樣你想吃的。",
        question: "你跟服務生說什麼？",
        options: [
          { text: "我要一樣的", isCorrect: true },
          { text: "我不要這個", isCorrect: false },
          { text: "我要兩份", isCorrect: false }
        ],
        explanation: "他說 'Ao muean gan'。Muean gan = 一樣 (Same)。這在點餐時超好用！"
      },
      {
        id: 91,
        category: "安全",
        level: "初級",
        audioText: "ระวัง",
        context: "走路時地上有坑洞，或是朋友後面有機車衝過來，你大喊。",
        question: "你在提醒什麼？",
        options: [
          { text: "快跑", isCorrect: false },
          { text: "小心", isCorrect: true },
          { text: "安靜", isCorrect: false }
        ],
        explanation: "他說 'Ra-wang' (小心/注意)。"
      },
      {
        id: 92,
        category: "一般",
        level: "初級",
        audioText: "ไม่มีปัญหา",
        context: "朋友擔心麻煩到你，你拍拍胸脯跟他說。",
        question: "你的意思是？",
        options: [
          { text: "我有問題", isCorrect: false },
          { text: "沒問題", isCorrect: true },
          { text: "沒有錢", isCorrect: false }
        ],
        explanation: "他說 'Mai mi pan-ha'。Mai mi = 沒有，Pan-ha = 問題 (Problem)。"
      },
      {
        id: 93,
        category: "飲食",
        level: "中級",
        audioText: "แยกน้ำแข็ง",
        context: "你買泰式奶茶外帶，但怕冰塊融化讓飲料變淡，你跟店員說。",
        question: "你的特殊要求是？",
        options: [
          { text: "不要冰塊", isCorrect: false },
          { text: "冰塊分開裝", isCorrect: true },
          { text: "多加冰塊", isCorrect: false }
        ],
        explanation: "他說 'Yaek nam khaeng'。Yaek = 分開 (Separate)，Nam khaeng = 冰塊。"
      },
      {
        id: 94,
        category: "時間",
        level: "初級",
        audioText: "เมื่อวาน",
        context: "你在跟朋友聊昨天發生的趣事。",
        question: "你提到的時間點是？",
        options: [
          { text: "明天", isCorrect: false },
          { text: "昨天", isCorrect: true },
          { text: "今天", isCorrect: false }
        ],
        explanation: "他說 'Muea wan' = 昨天。"
      },
      {
        id: 95,
        category: "飲食",
        level: "中級",
        audioText: "ไม่กินหมู",
        context: "你有飲食禁忌，點餐時特別交代老闆。",
        question: "你不吃什麼？",
        options: [
          { text: "不吃辣", isCorrect: false },
          { text: "不吃蝦", isCorrect: false },
          { text: "不吃豬肉", isCorrect: true }
        ],
        explanation: "他說 'Mai kin moo'。Kin = 吃，Moo = 豬。穆斯林朋友常會用到這句。"
      },
      // --- 記得在前一題 (ID: 95) 後面加逗號，然後貼上 ---
    {
        id: 96,
        category: "餐廳",
        level: "中級",
        audioText: "มีอะไรแนะนำไหมครับ",
        context: "你看著菜單看了很久，不知道該點什麼，於是問服務生。",
        question: "你在問什麼？",
        options: [
          { text: "有什麼推薦的嗎？", isCorrect: true },
          { text: "有什麼不辣的嗎？", isCorrect: false },
          { text: "這道菜是什麼？", isCorrect: false }
        ],
        explanation: "他說 'Mi arai nae-nam mai khrap'。Nae-nam = 推薦/介紹。這句是點餐選擇困難症的救星。"
      },
      {
        id: 97,
        category: "購物",
        level: "中級",
        audioText: "ขอใบเสร็จด้วยครับ",
        context: "買完東西或吃完飯結帳後，你需要報帳證明。",
        question: "你在索取什麼？",
        options: [
          { text: "塑膠袋", isCorrect: false },
          { text: "收據 / 發票", isCorrect: true },
          { text: "折扣", isCorrect: false }
        ],
        explanation: "他說 'Kho bai-set duay khrap'。Bai-set = 收據/發票。"
      },
      {
        id: 98,
        category: "社交",
        level: "初級",
        audioText: "ชนแก้ว",
        context: "和泰國朋友在酒吧聚會，氣氛很熱鬧，大家舉起杯子。",
        question: "這時候該做什麼？",
        options: [
          { text: "摔破杯子", isCorrect: false },
          { text: "結帳", isCorrect: false },
          { text: "乾杯 (碰杯)", isCorrect: true }
        ],
        explanation: "他說 'Chon kaew'。Chon = 撞/碰，Kaew = 杯子。也就是乾杯 (Cheers) 的意思。"
      },
      {
        id: 99,
        category: "情緒",
        level: "初級",
        audioText: "ตกใจหมดเลย",
        context: "朋友突然從背後拍你一下，或是突然聽到很大的雷聲。",
        question: "你的反應是？",
        options: [
          { text: "我好開心", isCorrect: false },
          { text: "嚇死我了 (嚇了一跳)", isCorrect: true },
          { text: "我肚子好痛", isCorrect: false }
        ],
        explanation: "他說 'Tok jai mot loei'。Tok jai = 嚇到/吃驚，Mot loei = 完全/全部 (加強語氣)。"
      },
      {
        id: 100,
        category: "祝福",
        level: "初級",
        audioText: "ยินดีด้วย",
        context: "朋友升職了，或是你剛剛完成了 100 題泰語題庫的建置！",
        question: "這句話的意思是？",
        options: [
          { text: "謝謝你", isCorrect: false },
          { text: "對不起", isCorrect: false },
          { text: "恭喜你", isCorrect: true }
        ],
        explanation: "他說 'Yin dee duay'。Yin dee = 高興/樂意。用於祝賀別人成功或有喜事。恭喜你完成 100 題！🎉"
      }
  ];

  return { rawVocabData, consonantData, vowelData, situationData };
})();

