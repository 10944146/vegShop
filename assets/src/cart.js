
var add=document.querySelectorAll('.add');  //加號
var count=document.querySelectorAll('.product-q').value; //件數
var less=document.querySelectorAll('.less');  //減號
var price=document.querySelectorAll('.price').value;  //價格
var amount= document.querySelectorAll('.amount').value; //小計
// function add(){
//     count=count+1;
//     document.querySelectorAll('.product-q').value = count;
//     document.querySelectorAll('.amount').value = count*price;
// }
// count.value.addEventListener('click',add);
add.onclick = function(){
    count=count+1;
    document.querySelectorAll('.product-q').value = count;
    document.querySelectorAll('.amount').value = count*price;
}

less.onclick = function(){
    if (count>0) {
        count--;
        document.querySelectorAll('.product-q').value = count;
        document.querySelectorAll('.amount').value = count*price;
    } else{
        count=0;
        document.querySelectorAll('.product-q').value = count;
        document.querySelectorAll('.amount').value = count*price;
    }
}			




var button1=document.querySelector('#end');
var total=document.getElementById("total").value;
function end(){
    if(total>=1000){
       window.alert("您已下單完成！");
    }
    else{
        window.alert("您已下單完成！因未滿1000元，所以還有100元的運費喔!");
    }
}
button1.addEventListener('click',end);



