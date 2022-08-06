function display(value){
document.getElementById("result").value +=value;


}
function cancel(){
    document.getElementById("result").value=""
}
function equals(){
    var a=document.getElementById("result").value;
var b=eval(a);
document.getElementById("result").value=b;
}














