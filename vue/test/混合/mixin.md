## 笔记来源
https://www.cnblogs.com/lily1010/p/5846590.html

## 定位
混合以一种灵活的方式为组件提供分布复用功能。混合对象可以包含任意的组件选项。当组件使用了混合对象时，混合对象的所有选项将被“混入”组件自己的选项中。


## 定义

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Vue混合--定义</title>
        <script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
        <script type="text/javascript">
            var myMinxin= {             //第一步,创建一个混合数据
                created: function () {
                    this.hello();
                },
                methods: {
                    hello: function () {
                        alert('你好');
                    }
                }
            }
            
            var myComponent = Vue.extend({    //将混合注册到Vue
                mixins: [myMinxin]
            })
            
            new myComponent();    //实例化这个混合
        </script>
    </body>
</html>
```
弹出: 你好


##  混合与Vue同名冲突
混合对象与组件包含同名选项时，这些选项将以适当的策略合并。例如，同名钩子函数被并入一个数组，因而都会被调用。另外，混合的钩子将在组件自己的钩子之前调用。

### 同名钩子函数冲突,代码如下:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Vue混合--同名冲突</title>
        <script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
        <script type="text/javascript">
            var myMinxin= {             //第一步,创建一个混合数据
                created: function () {
                    this.hello();
                },
                methods: {
                    hello: function () {
                        alert('你好');
                    }
                }
            }
            
            var myComponent = Vue.extend({    //注意Vue的created与minxin的created重合,这里将先执行minxin的created
                created: function () {
                    alert('我是Vue的created');
                },
                mixins: [myMinxin]
            })
            
            new myComponent();    //实例化这个混合
        </script>
    </body>
</html>
```

先弹出：你好，在弹出：我是vue的created


###  值为对象同名冲突,代码如下:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Vue混合--同名冲突</title>
        <script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
        <script type="text/javascript">
            var myMinxin= {             //第一步,创建一个混合数据
                created: function () {
                    this.hello();
                    this.nono();
                },
                methods: {
                    hello: function () {
                        alert('你好1');
                    },
                    nono: function () {
                        alert('nono1');
                    }
                }
            }
            
            var myComponent = Vue.extend({     //methods中对象冲突,只显示Vue实例中的方法
                created: function () {
                    this.hello();
                    this.nono();
                },
                mixins: [myMinxin],
                methods: {
                    hello: function () {
                        alert('你好2');
                    },
                    nono: function () {
                        alert('nono2');
                    }
                }
            })
            
            new myComponent();    //实例化这个混合
        </script>
    </body>
</html>
```
先弹：你好2
再弹出：nono2
先弹：你好2
再弹出：nono2

mixin里面的同名函数会被覆盖