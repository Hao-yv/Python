# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import requests

headers = {

    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"

}
# 查看状态码，4开头的状态码表示状态错误，即发送端请求有问题
# 418 状态为：”我是一个茶壶“， 即服务器不想相应请求，遇到这种情况可以通过定义请求头，把爬虫伪装成一个浏览器

response = requests.get("https://movie.douban.com/top250", headers=headers)

html = response.text.encode('utf-8')

soup = BeautifulSoup(html, "html.parser")
all_titles = soup.findAll("span", attrs={"class": "title"})
for title in all_titles:
    print(title.text.encode('utf-8').decode('utf-8'))