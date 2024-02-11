import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from os import mkdir

name = "潍坊学院"
try:
    mkdir(f"./{name}")
except FileExistsError:
    pass
save = open(f"./{name}/{name}.csv", mode="w+")
savetemp = None
save.write("大创,,,,,,,,,,,,\n项目编号,项目名称,项目类型,所属学校,项目期限,所属一级学科,所属二级学科,立项时间,项目成员,,,,\n,,,,,,,,姓名,学院,专业班级,分工类别,成员类型\n")

driver = webdriver.Edge()

driver.get("http://cxcy.sdei.edu.cn/cxxl/Index/ItemPageDashboard?LXYear=2023")

driver.find_element(By.XPATH,'//*[@id="SchoolName"]').send_keys(name)
driver.find_element(By.XPATH,'//*[@id="SearchForm_1"]/div[2]/div[2]/div/button').click()
driver.find_element(By.XPATH,'//*[@id="SearchForm_1"]/div[3]/div/span[1]/i').click()
sleep(2)
driver.find_element(By.XPATH,'//*[@id="SearchForm_1"]/div[4]/button').click()

boxs = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]/table/tbody').find_elements(By.TAG_NAME,'tr')
boxs = boxs[::45]

for i in boxs:
    i.find_element(By.TAG_NAME, 'a').click()
    elements = driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div').find_elements(By.TAG_NAME, 'div')
    elements = elements[1::2]
    elements = elements[:8]+elements[9::2]
    savetemp = open(f"{name}/{elements[1].text}.csv", mode="w+")
    for element in elements[:7]:
        save.write(f"{element.text},")
        pass
    save.write("\n")
    for element in elements[8:]:
        lines = element.text.split("\n")
        for line in lines:
            words = line.split()
            for word in words:
                savetemp.write(f"{word},")
            savetemp.write("\n")
    savetemp.close()

save.close()

