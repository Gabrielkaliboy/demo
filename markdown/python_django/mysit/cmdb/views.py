from django.shortcuts import render
# 导入HttpResponse模块
from django.shortcuts import HttpResponse
# Create your views here.


# request参数必须有，名字是类似self的默认规则，可以改。他封装了用户请求的所有内容
def index(request):
    # request.POST
    # request.GET
    # 不能直接返回字符串，必须由HttpResponse这个类封装起来，这是Django的规则，不是python的
    # return HttpResponse("hello world")

    # 当你返回一个HTML文件的时候，就要用render方法来渲染（其实就是打包的意思）。render是Django提供的方法和规则。
    # render的第一个参数是固定的，第二个参数是我指定的文件
    return render(request,'index.html')