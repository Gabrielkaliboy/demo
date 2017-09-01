function greeter(person:string){
    return "hello,"+person;
}

//这样我们将user传参给greeter的时候，由于类型不对，ts会报错
var user=[1,2,3];
document.body.innerHTML=greeter(user);