import os
import openpyxl
import info
from tqdm import tqdm
import time
import gradio as gr

sheet_head = ['项目编号', '项目名称', '项目类型', '所属学校', '项目期限', '所属一级学科',
              '所属二级学科', '立项时间', '结题时间', '指导老师', '职称', '指导老师类型', '负责人', '其他成员']

# 定义可接受参数的main函数


def main(urlPrefix, LXYear, SchoolName, progress=gr.Progress()):
    progress(0, desc="开始...")
    urlList = info.getUrlList(
        '{}/Index/ItemPageList?LXYear={}&SchoolName={}'.format(urlPrefix, LXYear, SchoolName), progress)
    print('获取urlList成功')
    return (urlList)


def down(LXYear, SchoolName, urlList, progress=gr.Progress()):
    urlList = eval(urlList)
    print('开始下载')
    dataArr = []
    for url in progress.tqdm(urlList):
        # time.sleep(0.1)
        dataArr.append(info.getInfo(url))
    wbResult = openpyxl.Workbook()
    wsR = wbResult.active
    wsR.append(sheet_head)
    print('正在导出为excel')
    for row in progress.tqdm(dataArr):
        # time.sleep(0.1)
        wsR.append(row)
    # 保存到/excel目录下
    if not os.path.exists('excel'):
        os.mkdir('excel')
    targetFileName = '{}.xlsx'.format(SchoolName+LXYear)
    try:
        wbResult.save('excel/'+targetFileName)
    except PermissionError:
        return ('要保存的excel被其他程序占用')
    print('数据获取完成')
    return ('数据获取完成,保存到{}\{}'.format(os.getcwd(), targetFileName))
