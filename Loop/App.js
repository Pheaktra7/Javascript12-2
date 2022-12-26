var car = ['BMW','Volvo','GTR34','Audi'];
var txt ='';
for(var i in car){
    txt += car[i]+' ';
}
document.getElementById('demo').innerHTML = txt;

var num1=' ';
var arr=[12,23,34,45,56];
for(var num in arr){
    num1 += arr[num] + ' ';
}
document.getElementById('dis').innerHTML = num1;

var Number = [1,2,3,4,5,6,7];
var demo = "";
Number.forEach(el => {
    demo += el +' ';
});
document.getElementById('num').innerHTML = demo;