userInput=input('请输入年龄')
userInput=int(userInput)
#这里必须是==
if userInput==18:
    print(userInput)
elif userInput>18:
    print("你成年了") 
else:
    print("未成年")