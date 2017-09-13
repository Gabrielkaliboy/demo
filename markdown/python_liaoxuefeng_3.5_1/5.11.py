def calc(*numbers):
    sum=0
    for x in numbers:
        sum=sum+x*x
    print(sum)
    return sum

nums=[1,2,3]
calc(*nums)