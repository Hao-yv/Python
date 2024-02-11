import random

# 控制键盘输入
from pynput.keyboard import Key, Controller as key_cl

# 控制鼠标点击
from pynput.mouse import Controller, Button

# 控制时间
import time


def keyboard_input(string):
    keyboard = key_cl()
    keyboard.type(string)


def mouse_click():
    mouse = Controller()
    mouse.press(Button.left)
    mouse.release(Button.left)


# 执行函数
import time


def main(number, string):
    time.sleep(2)
    number = int(number)  # 将传递的参数转换为整数
    for i in range(number):
        keyboard_input(string)
        mouse_click()
        time.sleep(0.4)


if __name__ == '__main__':
    import time

    userNumber = int(input("请输入要发送邮件的次数:"))
    for i in range(userNumber):
        ran = random.randint(0, 9)
        if 0 <= ran < 4:
            userDate = "我要龙鹅卡"
        elif 4 <= ran <= 6:
            userDate = "元梦"
        elif 7 <= ran <= 9:
            userDate = "吃鸡"
        main(userNumber, userDate)