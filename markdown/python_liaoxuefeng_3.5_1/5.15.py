def person(name,age,*,city,job):
    print(name,age,city,job)

# person("李明",32,city="北京",sex="男")因为不需要sex,所以会报错，不需要的sex参数

person("李明",32,city="北京",job="hr")

# person("李明",32,"北京","hr")这个也报错，person()需要两个参数，但是给了四个