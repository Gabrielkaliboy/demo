print(abs(-10))

print(abs)

x=abs(-14)
print(x)

#结论：函数本身也可以赋值给变量，即：变量可以指向函数。
f=abs
print(f)
print(f(-8))


# 把abs指向10后，就无法通过abs(-10)调用该函数了！因为abs这个变量已经不指向求绝对值函数而是指向一个整数10！
# 当然实际代码绝对不能这么写，这里是为了说明函数名也是变量。要恢复abs函数，请重启Python交互环境。
# abs=10
abs(-14)

# 传入函数
def add(x,y,f):
    return f(x)+f(y)

print("传入函数",add(-10,-10,abs))