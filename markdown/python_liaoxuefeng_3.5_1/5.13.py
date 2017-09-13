def person(name,age,**kw):
    print("name：",name,"age：",age,"others：",kw)

extra = {"sex":"男","city":"北京"}
person("李白",90,sex=extra['sex'],city=extra['city'])
person("王磊",34,**extra)
