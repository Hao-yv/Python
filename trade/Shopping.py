import time
from datetime import datetime

from selenium import webdriver
from selenium.webdriver.common.by import By
import win32com.client
speaker = win32com.client.Dispatch("SAPI.SpVoice")

# 下载win32com.client模块指令指令:pip install pywin32

# 打开浏览器
borwser = webdriver.Chrome()
# 进入京东页面
borwser.get("https://www.jd.com/")
time.sleep(2)

# 扫码登录
borwser.find_element(By.LINK_TEXT, "你好，请登录").click()
print("请进行扫码登录")
time.sleep(7)

# 打开购物车
borwser.get("https://cart.jd.com/cart_index")
time.sleep(5)

# 全选购物车
while True:
    if borwser.find_element(By.CLASS_NAME, 'jdcheckbox'):
        borwser.find_element(By.CLASS_NAME, 'jdcheckbox').click()
        print("全选购物车成功")
        break;

while True:
    # 获取电脑在线时间
    newTime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
    # 对比时间，时间到的话就结算
    print(newTime)
    # 判断是否到达结算时间
    if newTime >= input("输入抢购时间，格式样例为: 2022-02-22 10:00:00.000000"):
        # 点击结算按钮
        while 1 == 1:
            try:
                if borwser.find_element(By.LINK_TEXT, "去结算"):
                    borwser.find_element(By.LINK_TEXT, "去结算").click()
                print("商品抢购成功，请前往页面结算")
                speaker.Speak("商品抢购成功，请前往页面结算")
                break
            except:
                pass
        # 点击提交订单按钮
        while True:
            try:
                if borwser.find_element(By.LINK_TEXT, "提交订单"):
                    borwser.find_element(By.LINK_TEXT, "提交订单").click()
                    print("提交订单成功,请尽快前往付款")
            except:
                print(f"提交订单成功,请尽快前往付款")
                break;
            time.sleep(0.01)