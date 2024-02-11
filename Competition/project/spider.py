import random
import re as r
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from os import mkdir

name = input("请输入要抓取的学校\n")
# name = "潍坊学院"
allPage = None
try:
    mkdir(f"./{name}")
except FileExistsError:
    pass

save = open(f"./{name}/{name}.csv", mode="w+")
programFileSave = None
save.write(
    "大创,,,,,,,,,,,,\n项目编号,项目名称,项目类型,所属学校,项目期限,所属一级学科,所属二级学科,项目级别,,,,\n")

driver = webdriver.Edge()

driver.get("http://cxcy.sdei.edu.cn/cxxl/Index/ItemPageDashboard?LXYear=2023")

driver.find_element(By.XPATH, '//*[@id="SchoolName"]').send_keys(name)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[2]/div[2]/div/button').click()
sleep(1)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[3]/div/span[1]/i').click()
sleep(2)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[4]/button').click()

pattern = "共(\d+)页"
match = r.search(pattern, driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[2]/div[2]/span').text)
if match:
    allPage = int(match.group(1))
    print(allPage)

for page in range(allPage):
    programBoxs = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[1]/table/tbody').find_elements(By.TAG_NAME, 'tr')
    programBoxs = programBoxs[::6]

    for program in programBoxs:
        grade = program.text.split("\n")[0].split()[-1]
        infoButton = program.find_element(By.TAG_NAME, 'a')
        infoButton.click()
        elements = driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div').find_elements(By.TAG_NAME, 'div')
        elements = elements[1::2]
        elements = elements[:8] + elements[9::2]
        programFileSave = open(f"{name}/{elements[1].text}.csv", mode="w+")
        for element in elements[:7]:
            save.write(f"{element.text},")
        save.write("%s\n" % grade)
        for element in elements[8:]:
            lines = element.text.split("\n")
            for line in lines:
                words = line.split()
                for word in words:
                    programFileSave.write(f"{word},")
                programFileSave.write("\n")
        programFileSave.close()
        driver.back()

    if page in range(allPage-1):
        driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[2]/div[1]/div/ul/li[6]/a').click()

save.close()
