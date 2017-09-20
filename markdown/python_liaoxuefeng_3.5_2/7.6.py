def calc_sum(*args):
    ax=0
    for n in args:
        ax=ax+n
    return ax
calc_sum(1,2,3,4,5)
# 但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数：