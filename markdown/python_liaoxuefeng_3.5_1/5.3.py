def power(x,n=2):
    while n>1:
        #这里一定要有缩进，否则报错
        x=x*x
        n=n-1
    return x
print(power(3))