
import random

# userNumber = int(input("请输入你的数字:"))
userNumber = 20
for i in range(userNumber):
    ran = random.randint(0, 9)
    print(ran)
    if 0 <=ran < 4:
        print("我要集龙卡")
    elif 4 <= ran <= 6:
        print("元梦")
    elif 7 <= ran <= 9:
        print("吃鸡")

