L=[1,2,3,4,5,6,7,8,9,10]
print("全部:",L)
print('前三个：',L[0:3])

# L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。
# 如果第一个索引是0，还可以省略：

print("前五个：",L[:5])

#取出索引2的元素
print("索引为2的元素是：",L[2:3])

#倒数第一个
print("我是倒数第一个：",L[-1:])

#倒数俩
print("最后面两个:",L[-2:])

#倒数三
print("倒数第三和倒数第二：",L[-3:-1])
#每隔一个取一个
print("每隔2个取一个：",L[::2])
#复制一个完全一样的
print("复制一个完全一致的：",L[:])

#tuple同样适用slice，只是切完以后还是tuple
M=(1,2,3,4,5,6,7,8)
print("M是个tuple也可以切片:",M[:3])

#字符串也可以切片
V="ABCDEFGHIJKLMN"
print("V是字符串,切他的最后两个：",V[-2:])