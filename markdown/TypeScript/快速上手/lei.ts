class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName=firstName+""+middleInitial+""+lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person){
    return "hello,"+person.firstName+""+person.lastName;
}

var userH=new Student("jarry","m","user");
document.body.innerHTML=greeter(user);