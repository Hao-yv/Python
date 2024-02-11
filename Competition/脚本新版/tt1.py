import requests

url = 'http://cxcy.sdei.edu.cn/cxxl/Index'

jxUrl = 'http://jxdc.jxedu.gov.cn/cxcypt/Index'

gsUtl='http://114.220.75.43:1003/'

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0}"}

res = requests.get(url=gsUtl, headers=headers, timeout=5)
print(res.text)
