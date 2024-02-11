#coding=utf-8
import os.path
import sys
import os as o
import re as r
import codecs
from time import sleep
from tqdm import tqdm as t
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


class YearNotValidException(Exception):
    def __str__(self):
        return '输入的年份不合理'


class SchoolNullException(Exception):
    def __str__(self):
        return '查询的学校为空'


def input_school_name(message: str) -> None:
    global schoolName
    schoolName = input(message)
    if len(schoolName) == 0:
        raise SchoolNullException()


def input_year_search(message: str) -> None:
    global yearSearch
    yearSearch = input(message)
    if len(yearSearch) == 0 or int(yearSearch) not in range(1979, 2024):
        raise YearNotValidException()


schoolName: str = None
yearSearch: str = None
allPage: int = None
projectGrade: str
rightStr: str


while True:
    try:
        input_school_name("请输入要抓取的学校:")
        input_year_search("请输入要查询的年份:")
        break

    except SchoolNullException:
        while True:
            try:
                input_school_name("请重新输入要抓取的学校:")
                break
            except SchoolNullException:
                pass
        break
    except YearNotValidException:
        while True:
            try:
                input_year_search("请重新输入要查询的年份:")
                break
            except YearNotValidException:
                pass
        break

# schoolName = "潍坊学院"
# yearSearch = 2022

try:
    o.makedirs(f"./{schoolName}/{yearSearch}")
except FileExistsError:
    pass

schoolFileSave = open(f".\/{schoolName}\/{yearSearch}\/{yearSearch}年{schoolName}大创项目汇总.csv",
                      mode="w+", encoding="ANSI")
programFileSave = None
schoolFileSave.write(
    "大创,,,,,,,,,,,,\n项目编号,项目名称,项目类型,所属学校,项目期限,所属一级学科,所属二级学科,项目级别,,,,\n")

driver = webdriver.Edge()

driver.get("https://jsgjc.jse.edu.cn/cxcypt/Index/ItemPageDashboard?LXYear=2023")

driver.find_element(By.XPATH, '//*[@id="SchoolName"]').send_keys(schoolName)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[2]/div[2]/div/button').click()
sleep(1)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[3]/div/span[1]/i').click()
sleep(2)
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[1]/div[3]/div/button').click()
driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[1]/div[3]/div/div/div[1]/input').send_keys(yearSearch)

while True:
    try:
        button = driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[1]/div[3]/div/div/div[2]/ul').find_elements(
            By.TAG_NAME, 'a')[0]
        print('存在对应年份的选项! 正在查询该院校是否含有该年份信息。。。。')
        button.click()
        break
    except IndexError:
        op = input('貌似没有该年份对应选项，你需要直接查询可用的全部数据吗？(y/n):')
        if op == 'y' or op == 'yes' or op == 'Yes':
            break
        input_year_search('请输入你要查询的年份:')
        driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[1]/div[3]/div/div/div[1]/input').clear()
        driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[1]/div[3]/div/div/div[1]/input').send_keys(
            yearSearch)

driver.find_element(By.XPATH, '//*[@id="SearchForm_1"]/div[4]/button').click()

pattern = "共(\d+)页"
try:
    match = r.search(pattern, driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[2]/div[2]/span').text)
    print('所查询院校在该年份存在记录！正在操作。。。。')
    if match:
        allPage = int(match.group(1))
        print(f"共有{allPage}页")
except NoSuchElementException:
    print('所查询院校在该年份无记录！正在退出。。。。')
    exit(-1)

for page in range(allPage):
    sleep(1)
    print(f"正在处理第{page + 1}页", file=sys.stderr)
    programBoxs = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[1]/table/tbody').find_elements(
        By.TAG_NAME, 'tr')
    programBoxs = programBoxs[::6]

    for i in t(range(len(programBoxs))):
        while True:
            try:
                projectGrade = programBoxs[i].text.split("\n")[-2].split()[-1]
                break
            except NoSuchElementException:
                pass
            except IndexError:
                pass
        infoButton = programBoxs[i].find_element(By.TAG_NAME, 'a')
        infoButton.click()
        elements = driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div').find_elements(By.TAG_NAME, 'div')
        elements = elements[1::2]
        elements = elements[:8] + elements[9::2]
        programName = elements[1].text
        if '/' in programName:
            programName = programName.replace('/', '_')
        if '\"' in programName:
            programName = programName.replace('\"', ' ')
        programName = os.path.normpath(programName)
        programFileSave = open(f".\/{schoolName}\/{yearSearch}\/{programName}.csv", mode="w+", encoding="utf-8")
        for element in elements[:7]:
            try:
                schoolFileSave.write(f"{element.text},")
            except UnicodeEncodeError:
                rightStr = element.text
                while True:
                    try:
                        for charactor in rightStr:
                            charactor.encode("utf-8")
                        break
                    except UnicodeEncodeError:
                        rightStr = rightStr.replace(charactor, '_')
                schoolFileSave.write(f"{rightStr},")
        schoolFileSave.write("%s\n" % projectGrade)
        for element in elements[8:]:
            lines = element.text.split("\n")
            for line in lines:
                words = line.split()
                for word in words:
                    programFileSave.write(f"{word}")
                programFileSave.write("\n")
        programFileSave.close()
        driver.back()

    if page in range(allPage - 1):
        step = 0
        while True:
            try:
                driver.find_element(By.XPATH, '/html/body/div[2]/div/div[2]/div[2]/div[1]/div/ul').find_elements(
                    By.TAG_NAME, 'a')[-2].click()
                break
            except NoSuchElementException:
                sleep(0.5)
                print(f"自动翻页失败，正在重试第 {step + 1} 次", file=sys.stderr)
                step += 1
                if step not in range(10):
                    input(f"自动翻页重试失败，请尝试手动翻页(按下任意键进行手动翻页)")
                    for seconds in t(range(10, 0, -1), desc=f"等待时间"):
                        sleep(1)
                    break
                pass

schoolFileSave.close()
print(f"{schoolName}{yearSearch}年的大创数据已爬取完毕！")
print(f"文件已保存在路径: {o.getcwd()} 下！", file=sys.stderr)
