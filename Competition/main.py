import os
import requests
from bs4 import BeautifulSoup
import pandas as pd

def crawl_website(school, year):
    # 获取当前工作目录
    current_directory = os.getcwd()

    # 生成文件夹的路径
    school_folder = os.path.join(current_directory, school)
    year_folder = os.path.join(school_folder, year)

    # 如果文件夹不存在，创建文件夹
    os.makedirs(school_folder, exist_ok=True)
    os.makedirs(year_folder, exist_ok=True)

    url = f'http://jxdc.jxedu.gov.cn/cxcypt/Index/ItemPageDashboard?LXYear={year}&SchoolName={school}'
    response = requests.get(url)

    output_log = []

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        table = soup.find('table', {'class': 'table-bordered'})

        if table:
            data = []
            for row in table.find_all('tr')[1:]:
                columns = row.find_all('td')
                project_data = [column.get_text(strip=True) for column in columns]
                data.append(project_data)

            excel_filename = f"{school}_{year}_大创汇总表.xlsx"  # 修改文件名格式
            excel_filepath = os.path.join(year_folder, excel_filename)  # 更新文件路径
            save_data_to_excel(school, year, data, excel_filepath)
            output_log.append(f"Data saved to Excel file '{excel_filename}' in '{year_folder}'.")
        else:
            output_log.append("No table found on the webpage. HTML content:")
            output_log.append(response.text)
    else:
        output_log.append(f"Failed to fetch data. Status code: {response.status_code}")

    # 将输出信息写入文件
    output_filepath = os.path.join(current_directory, "output_log.txt")
    with open(output_filepath, 'w') as output_file:
        for log_entry in output_log:
            output_file.write(log_entry + '\n')

def save_data_to_excel(school, year, data, filepath):
    # 读取 Excel 表格
    try:
        df = pd.read_excel(filepath)
    except FileNotFoundError:
        # 如果文件不存在，创建一个新的 DataFrame
        columns = ["项目编号", "项目名称", "项目类型", "所属学校", "项目期限", "所属一级学科", "所属二级学科", "项目级别"]
        df = pd.DataFrame(columns=columns)

    # 将抓取的数据追加到 DataFrame
    new_rows = pd.DataFrame(data, columns=df.columns)
    df = df.append(new_rows, ignore_index=True)

    # 保存更新后的 DataFrame 到 Excel 表格
    df.to_excel(filepath, index=False)

if __name__ == "__main__":
    school_name = "九江学院"
    year_value = "2021"

    crawl_website(school_name, year_value)

    # 执行完毕后弹出提示
    print("程序执行完毕。")
