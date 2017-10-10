from django.shortcuts import render
from cmdb import  models
# 导入HttpResponse模块
from django.shortcuts import HttpResponse
# Create your views here.
user_list = [
    {"user":"jack","pwd":"abc"},
    {"user":"tom","pwd":"ABC"}
]

# request参数必须有，名字是类似self的默认规则，可以改。他封装了用户请求的所有内容
def index(request):
    # request.POST
    # request.GET
    if request.method=="POST":
        username=request.POST.get("username" , None)
        password=request.POST.get("password" , None)
        # print(username,password)
        # temp={'user':username,"pwd":password}
        # user_list.append(temp)

        #添加到数据库
        models.UserInfo.objects.create(user=username,pwd=password)

    #     从数据库读取所有的数据
        user_list=models.UserInfo.objects.all()pyt
    # 不能直接返回字符串，必须由HttpResponse这个类封装起来，这是Django的规则，不是python的
    # return HttpResponse("hello world")

    # 当你返回一个HTML文件的时候，就要用render方法来渲染（其实就是打包的意思）。render是Django提供的方法和规则。
    # render的第一个参数是固定的，第二个参数是我指定的文件
    return render(request,'index.html',{"data":user_list})

