import gradio as gr
import os
import openpyxl
# 自定义模块
import index
configData = []

title = '大创webUI'


def getConfigDataValue(key):
    return configData[key]


if os.path.exists('./config.xlsx'):
    print('配置文件config.xlsx加载中')
    wb = openpyxl.load_workbook('./config.xlsx')
    ws = wb.active
    for row in ws.iter_rows():
        iRow = []
        for cell in row:
            iRow.append(cell.value)
        configData.append(iRow)
    print('配置文件config.xlsx加载成功')
    print('正在启动大创webUI')

# Url
urlText = gr.Text(label='官网地址')
# Result
resultText = gr.Textbox(label='结果')
# print(configData)
# 将二维数组data转为字典
configData = dict(configData)
# print(configData, '转化字典')
urlDropDown = gr.Dropdown(
    label='请选择省份', choices=configData)

# urlDropDown.change(fn=getConfigDataValue,inputs=urlDropDown,outputs=urlText)
with gr.Blocks() as demo:
    gr.Markdown('# 大创 webUI')
    gr.Markdown('#### by leev')
    urlDropDown = gr.Dropdown(
        label='请选择省份', choices=configData)
    urlText = gr.Textbox(label='官网地址', interactive=False)
    urlDropDown.change(fn=getConfigDataValue,
                       inputs=urlDropDown, outputs=urlText)
    # 年份
    inputYear = gr.Text(type='text', label='请输入年份')
    # 学校
    inputSchool = gr.Text(type='text', label='请输入学校')
    greet_btn = gr.Button("搜索", variant='primary')
    out = gr.Textbox(label='搜索结果', lines=3)
    greet_btn.click(fn=index.main, inputs=[
                    urlText, inputYear, inputSchool], outputs=out)
    down_btn = gr.Button("下载", variant='primary')
    result = gr.Textbox(label='下载结果', lines=1)
    down_btn.click(fn=index.down, inputs=[
                   inputYear, inputSchool, out], outputs=result)
# demo = gr.Interface(theme=gr.themes.Base().background_fill_primary_dark, title=title, fn=getConfigDataValue,inputs=inputs, outputs=resultText)
print('启动成功,请不要关闭此窗口')
demo.queue().launch(server_port=30002, inbrowser=True)
