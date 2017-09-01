interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person){
    return "hello,"+person.firstName+person.lastName;
}

var userDetail={firstName:"李",lastName:'明轩'};

document.body.innerHTML=greeter(userDetail);