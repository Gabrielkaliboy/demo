# 可以使用isinstance()判断一个对象是否是Iterable对象：
from collections import Iterable
print(isinstance ([],Iterable))
print(isinstance({},Iterable))
print(isinstance("abc",Iterable))
print(isinstance((x for x in range(10)),Iterable))
print(isinstance(323,Iterable))

# 而生成器不但可以作用于for循环，还可以被next()函数不断调用并返回下一个值，直到最后抛出StopIteration错误表示无法继续返回下一个值了。

# 可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator。

# 可以使用isinstance()判断一个对象是否是Iterator对象：

print("Iterator")
from collections import Iterator
print(isinstance((x for x in range(10)),Iterator))
print(isinstance([],Iterator))
print(isinstance({},Iterator))
print(isinstance("abc",Iterator))
print(isinstance(2323,Iterator))

# 生成器都是Iterator对象，但list、dict、str虽然是Iterable，却不是Iterator。

# 把list、dict、str等Iterable变成Iterator可以使用iter()函数：
print("非Iterator转化为Iterator")
print(isinstance(iter([]),Iterator))
print(isinstance(iter({}),Iterator))
print(isinstance(iter('adfasd'),Iterator))

