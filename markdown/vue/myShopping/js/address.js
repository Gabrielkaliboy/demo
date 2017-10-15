new Vue({
    el:'.container',
    data:{
        addressList:[],
        limitNum:3,
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getAddressList();
        })
    },
    computed:{
        filterAddress:function(){
            return this.addressList.slice(0,this.limitNum)
        }
    },
    methods:{
        getAddressList:function(){
            var _this=this;
            this.$http.get("data/address.json").then(function(res){
                _this.addressList=res.data.result;
            })
        }
    }
})