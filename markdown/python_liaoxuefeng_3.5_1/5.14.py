def person(name,age,**kw):
    if "city" in kw:
        pass
    if "job" in kw:
        pass
    print("name:",name,"age:",age,"others:",kw)

person("李明",32,city="北京",sex="男")