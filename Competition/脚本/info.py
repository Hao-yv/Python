import requests
import re
from bs4 import BeautifulSoup
import tqdm
import time
from urllib.parse import urlparse

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}


def getUrlList(url, progress):
    firstRes = requests.get(url, headers=headers)
    pages = 0
    # 取class=pager-info
    if firstRes.status_code == 200:
        soup = BeautifulSoup(firstRes.text, 'lxml')
        pages = soup.find('div', class_='pager-info').text
        reMatch = re.search(r'共(\d+)页(\d+)条记录', pages)
        pages = int(reMatch.group(1))
        records = int(reMatch.group(2))
        print('符合条件的记录有{}页,{}条'.format(pages, records))

    pageUrlList = []
    infoUrlList = []
    for pageIndex in range(1, pages+1):
        pageUrlList.append(url+"&PageIndex="+str(pageIndex))
    for pUrl in progress.tqdm(pageUrlList):
        time.sleep(0.1)
        res = requests.get(pUrl, headers=headers)
        # 取class=btn-group btn-group-sm的href
        if res.status_code == 200:
            soup = BeautifulSoup(res.text, 'lxml')
            for item in soup.find_all('a', class_='btn-sm'):
                # url 只取域名
                domain = 'http://'+urlparse(url).netloc
                infoUrlList.append(domain+item['href'])
    print(infoUrlList, 'infoList')
    return infoUrlList


def getInfo(url):
    '''
    # 初始化一个对象
    project = Project()
    project.项目名称 = '1230'
    print(project)
    '''
    r = requests.get(url, headers=headers)
    row = []
    stuRow = []
    teacherRow = []
    # 取class=c-detail-item的元素,排除
    if r.status_code == 200:
        soup = BeautifulSoup(r.text, 'lxml')
        for idx, val in enumerate(soup.find_all('div', class_='form-group-line')):
            # 子元素class=c-label-title的text作为键，子元素class=c-detail-item的text作为值,去掉\n和\r
            for i in val.find_all('div', class_='c-detail-item'):
                row.append(i.text.strip().replace(
                    '\r\n                                    ', ''))
        # 取table标签
        for idx, val in enumerate(soup.find_all('table')):
            if idx == 0:
                for i in val.find_all('tr'):
                    arr = []
                    for j in i.find_all('td'):
                        arr.append(j.text.strip())
                    if arr:
                        stuRow.append(arr)
            elif idx == 1:
                for i in val.find_all('tr'):
                    arr = []
                    for j in i.find_all('td'):
                        arr.append(j.text.strip())
                    if arr:
                        teacherRow.append(arr)

    # print(row)
    # print(stuRow, '学生')
    # print(teacherRow, '教师')
    # teacherRow的数组合并，如[['1','2','3'],['4','5','6']]合并为['1,4','2,5','3,6']
    merged = [','.join(items) for items in zip(*teacherRow)]
    row.extend(merged)
    # print(merged, '合并后教师')
    # print(row, '合并教师后数据')
    # stuRow中取出第一个数组的第一个元素，并删除
    row.append(stuRow.pop(0)[0])
    # 合并学生数组
    merged = [','.join(items) for items in zip(*stuRow)]
    row.extend(merged)
    # print(row, '合并学生后数据')
    return row


# if __name__ == '__main__':
    # getInfo('http://cxcy.sdei.edu.cn/cxxl/cxxl/Index/ItemDetail?id=e6051b14-031f-410e-9aeb-4381296667db')
    # getUrlList('http://cxcy.sdei.edu.cn/cxxl/cxxl/Index/ItemPageList?LXYear=2022&SchoolName=潍坊学院')
