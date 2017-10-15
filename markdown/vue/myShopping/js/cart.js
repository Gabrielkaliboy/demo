// 全局过滤器,第一个参数是过滤器的名称,第二个参数是他的回调.回调接收两个值，第一个是他的value,第二个是他的参数，
// 实例查看总价那的元字。全局过滤器可以在任何地方使用。全局的过滤器最好放在顶部，否则可能报错Failed to resolve filter: money
//注意这里没有s
Vue.filter("money",function(value,type){
    return  "￥"+value.toFixed("2")+type;
})

var vm=new Vue({
    el:"#app",
    data:{
        productList:[],
        totalMoney:0,
        checkAllFlag:false,
        delFlag:false,
        curProduct:"",
    },
    //过滤器,注意这里加s
    filters:{
        //局部过滤器
        foratMoney:function(value){
            return "￥"+value.toFixed(2);
        }
    },
    //实例化完成以后,默认调用的函数，这个例子中，默认加载完了以后查询我们的商品信息,加入$nextTick相当于document.ready
    // 如果不加，可能报错，比如在方法里面只能用this，而不能写vm
    mounted:function(){
        this.$nextTick(function(){
            this.cartView();
        })
    },
    methods:{
        cartView:function(){
            //不使用箭头函数
            // var _this=this;
            // this.$http.get("data/cartData.json",{"id":123}).then(function(res){
            //     _this.productList=res.data.result.list;
            //     _this.totalMoney=res.data.result.totalMoney;
            // });

            // 使用箭头函数
            this.$http.get("data/cartData.json",{"id":123}).then(res=>{
                this.productList=res.data.result.list;
                // 商品的总金额应该是后台反馈给我们的，这里，我们自己进行模拟处理，先注释掉
                // this.totalMoney=res.data.result.totalMoney;
            });

        },
        // 实现商品的加减
        changeMoney:function(product,way){
            if(way>0){
                product.productQuantity++;
            }else{
                product.productQuantity--;
                // 不能让他一直减下去，至少为1
                if(product.productQuantity<1){
                    product.productQuantity=1;
                }
            }
            this.calcTotalPrice();
        },
        //单击check，选中效果
        selectedProduct:function(item){
            if(typeof item.checked == "undefined"){
                // 如何用vue来监听一个不存在的变量，Vue.set是全局的方式
                // 下面这句话的意思就是我们通过vue的set方法给item注册了一个checked的属性，并且属性值是true，
                Vue.set(item,"checked",true);

                //局部注册
                //this.$set(item,"checked",true);
            }else{
                item.checked=!item.checked;
            }
            this.calcTotalPrice();
        },
        // checkAll:function(){
        //     var _this=this;
        //     this.checkAllFlag=!this.checkAllFlag;
        //     if(this.checkAllFlag){
        //         this.productList.forEach(function(item,index){
        //             if(typeof item.checked == "undefined"){
        //                 // 如何用vue来监听一个不存在的变量，Vue.set是全局的方式
        //                 // 下面这句话的意思就是我们通过vue的set方法给item注册了一个checked的属性，并且属性值是true，
        //                 _this.$set(item,"checked",true);
        
        //                 //局部注册
        //                 //this.$set(item,"checked",true);
        //             }else{
        //                 item.checked=true;
        //             }
        //         })
        //     }else{
        //         this.productList.forEach(function(item,index){
        //             item.checked=false;
        //         })
        //     }
        // },

        // // 上面代码的精简部分
        // checkAll:function(){
        //     var _this=this;
        //     this.checkAllFlag=!this.checkAllFlag;
        //     this.productList.forEach(function(item,index){
        //         if(item.checked=="undefined"){
        //             _this.$set(item,"checked",_this.checkAllFlag);
        //         }else{
        //             item.checked=_this.checkAllFlag;
        //         }
        //     })
        // },

        // 为了让一个checkAll函数全选和不全选，我们传入参数
        checkAll:function(flag){
            var _this=this;
            this.checkAllFlag=flag;
            this.productList.forEach(function(item,index){
                if(item.checked=="undefined"){
                    _this.$set(item,"checked",flag);
                }else{
                    item.checked=flag;
                }
            })
            this.calcTotalPrice();
        },
        // 计算总金额
        calcTotalPrice:function(){
            var _this=this;
            this.totalMoney=0;
            this.productList.forEach(function(item,index){
                if(item.checked){
                    _this.totalMoney+=item.productPrice*item.productQuantity;
                }
            })
        },
        //用来删除商品
        delConfirm:function(item){
            this.delFlag=true;
            this.curProduct=item;
        },
        delProduct:function(){
            var index=this.productList.indexOf(this.curProduct);
            this.productList.split(index,1)
        }
    }
})
