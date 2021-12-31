// 數量/小計計算
function plus(add){
    var nex=add.previousElementSibling; //add前一個節點Q
    nex.value=Number(nex.value)+1; //Q++
    
    var price = parseInt(add.parentNode.previousElementSibling.innerHTML); //add父節點td的前一個節點的文字轉數字
    var num = price*Number(nex.value); //計算小計
    nex.parentNode.nextElementSibling.innerHTML = num;  //顯示小計在add父節點的下一個節點td
}
function minus(less){
    var pre =less.nextElementSibling;
    var price = parseInt(less.parentNode.previousElementSibling.innerHTML);
    if (pre.value>0) {
        pre.value=Number(pre.value)-1;
        var num = price*Number(pre.value);
        pre.parentNode.nextElementSibling.innerHTML = num; 
    }else{
        pre.value=0;
        var num = price*Number(pre.value);
        pre.parentNode.nextElementSibling.innerHTML = num;
    }    
}

//總計
var btntt=document.querySelector('#total');
function totalprice(){
    var tb=document.getElementById('list');
    var money=0;
    for(i=1;i<4;i++){
        var np=tb.rows[i].cells[4].innerHTML; //找到小計
        money+=Number(np);
    }
    if(money>=1000){
        window.alert("總計"+money+"元，免運費哦～");
    }
    else{
        window.alert("總計"+money+"元，因未滿1000元，所以還有100元的運費哦！");
    }
}

// 刪除按鈕
function rm(obj){
    var table=obj.parentNode.parentNode.parentNode; //btn上td上tr上table
    var tr=obj.parentNode.parentNode;
    table.removeChild(tr);
}

// 結帳按鈕
var button1=document.querySelector('#end');
function end(){
    window.alert("您已下單完成！");
}
button1.addEventListener('click',end);  
  

