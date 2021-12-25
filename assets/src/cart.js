// var price=$('#price').val();
// var q=$('#product-q').val();
// var amount= price*q;
// $('#amount').val(amount);

// document.write('amount');

// function Goindex() {
//   window.location.href = 'index.html';
// }
// $(function(){
//   $('.add').click(function(){
//     var q=parseInt($('.product-q').val());
//     q+=1;
//     $('.product-q').val(q);
//   });
//   $('.less').click(function(){
//     var q=parseInt($('.product-q').val());
//     if(q == 1) return;
//     q-=1;
//     $('.product-q').val(q);
//   });
//   function change(){
//     console.log(amount,total);
//     $('.amount').html(amount);
//     $('.total').html(total);
//   }
// });
// function total(){
//     var t=$('#count');
//     var tmp1=document.getElementById("amount");
//     if (/\D/.test(t.val())){
//         alert("請輸入正確的數量");
//         t.val(1);
//         tmp1.innerHTML = "$399";
//     }
//     else{
//         if(t.val()>10)
//         confirm("您真的準備一次購買這麼多？");
// 			    tmp1.innerHTML = t.val()*399 +"元";
// 	        }
// 		}
// };
// $(function(){ //這裡是加減按鈕都啟用的情況
// 	var t = $("#count"); 
// 	$(".add").click(function(){		
// 		t.val(parseInt(t.val())+1)
// 		setTotal();
// 	})
// 	$(".less").click(function(){
// 		if(t.val()>1){
// 		t.val(parseInt(t.val())-1);
// 		}
// 		else{
// 		alert("至少購買一件哦！");
// 		}
// 		setTotal();
// 	})
// });
// $(document).ready(function(){
//     var t = $("#count");
//     $('#less').attr('disabled',true);
//     $("#add").click(function(){
//     t.val(Math.abs(parseInt(t.val()))+1);
//     if (parseInt(t.val())!=1){
//         $('#less').attr('disabled',false);
//     };
//     })
//     $("#less").click(function(){
//     t.val(Math.abs(parseInt(t.val()))-1);
//     if (parseInt(t.val())==1){
//         $('#less').attr('disabled',true);
//     };
//     })

//     var p=$("#amount");
//     p.val(Math.abs(399*parseInt(t.val()));
// });
window.onload = function(){
    var add=document.getElementsByClassName("add");  //加號
    var count=document.getElementsByClassName("product-q").value; //件數
    var less=document.getElementsByClassName("less");  //減號
    var amount= document.getElementsByClassName("amount").value;
    var total=document.getElementById("total").value;
    add.onclick = function(){
        count++;
        document.getElementById("count").value = count;
        document.getElementById("amount").value = count*amount;
    }
    less.onclick = function(){
        if (count>0) {
            count--;
            document.getElementById("count").value = count;
            document.getElementById("amount").value = count*amount;
        } else{
            count=0;
            document.getElementById("count").value = count;
            document.getElementById("amount").value = count*amount;
        }
    }
    // total+=count*amount;				
}
// window.onload = function(){
//     var add1 = document.getElementById("add1");
//     var count1 = document.getElementById("count1").value;
//     var less1 = document.getElementById("less1");
//     var amount1= document.getElementById("amount1").value;
//     add1.onclick = function(){
//         count1++;
//         document.getElementById("count1").value = count1;
//         document.getElementById("amount1").value = count1*amount1;
//     }
//     less1.onclick = function(){
//         if (count1>0) {
//             count1--;
//             document.getElementById("count1").value = count1;
//             document.getElementById("amount1").value = count1*amount1;
//         } else{
//             count1=0;
//             document.getElementById("count1").value = count1;
//             document.getElementById("amount1").value = count1*amount1;
//         }
//     }	
//     total+=count1*amount1;							
// }	
// window.onload=function(){
//     var less=document.getElementsByClassName("less");  //減號
//     var count=document.getElementsByClassName("product-q"); //件數
//     var add=document.getElementsByClassName("add");  //加號
//     var price = document.getElementsByClassName("price"); //價格
//     var amount=document.getElementsByClassName("amount"); //小計

//     for(i=0;i<less.length;i++){
//         less[i].index=i;
//         add[i].index=i;

//         less[i].onclick=function(){
//             if(count[this.index].innerHTML <=1){
//                 this.disabled=true;
//             }

//             count[this.index].innerHTML--;
//             amount[this.index].value=Number(amount[this.index].value)-Number(price[this.index].innerHTML);
//         }
//         add[i].onclick=function(){
//            add[this.index].disabled = false;
//            count[this.index].innerHTML++;
//            amount[this.index].value = Number(amount[this.index].value) + Number(count[this.index].innerHTML);
//         }
//     }

// }


var button=document.querySelector('#end');
function end(){
    window.alert("您已下單完成！");
}
button.addEventListener('click',end);



