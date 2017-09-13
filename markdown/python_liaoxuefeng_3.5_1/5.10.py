def calc(*numbers):
    sum=0
    for i in numbers:
        sum=sum+i*i
    print(sum)
    return

calc(4,5)

#calc([1,2])报错