function fun(a,b,task){
    task(a,b);
}
function sum(){
    var sum=0;
    sum=arguments[0]+arguments[1];
    console.log("perform sum:",sum);
}
function sub(a,b){
    console.log("perform subtract:",arguments[0]-arguments[1]);
}

fun(10,6,sum);
fun(10,5,sub);
