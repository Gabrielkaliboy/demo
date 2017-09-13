def calc(numbers):
    sum=0
    for n in numbers:
        sum=sum+n*n
    print(sum)
    return
# calc(1,2,3)会报错
calc([1,2,3])
calc((2,3))