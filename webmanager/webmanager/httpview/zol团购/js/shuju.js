$(document).ready(function(){
	var pageSizeV =10000000;
    var pageIndexV=1;
    //ajax 获取数据 load
    $(function(){
        $.ajax({
            url:"../../product/GetProductsByPage_get",
            data:{
                "pagesize":pageSizeV,
                "pageindex":pageIndexV
            },
            success:function(data){
                //data  array
                var myData=data;
                var zhuye=[];
                var arr=[];
                var index=0;
                var index1=0;
        for(var i=0;i<myData.length;i++){
        if(parseInt(myData[i].Id)>=100001&&parseInt(myData[i].Id)<200000){
                		zhuye[index]=myData[i].Data;
                		index++;
                }
        }
for(var i=0;i<zhuye.length;i++){
var trOb="<li>"+"<a href=\"javascript:;\">"+"<h2>"+JSON.parse(zhuye[i]).p1+"</h2>"+"<h3>"+JSON.parse(zhuye[i]).p2+"</h3>"+"<p>"+JSON.parse(zhuye[i]).price+"</p>";
 trOb+="<img src=\"img/"+JSON.parse(zhuye[i]).imgsrc+"\"/>"+"<h4>"+JSON.parse(zhuye[i]).youhui+"</h4>"+"<span>"+JSON.parse(zhuye[i]).yuanjia+"</span>"+"<b>"+"去看看"+"</b>"+"</a>"+"</li>";
 
$("#mu3").append(trOb);
}
for(var i=0;i<myData.length;i++){
	if(parseInt(myData[i].Id)>=200001&&parseInt(myData[i].Id)<300000){
        	arr[index1]=myData[i].Data;
        	index1++;
        }
}
for(var i=0;i<arr.length;i++){
var trOb1="<li>"+"<a href=\"javascript:;\">"+"<h2>"+JSON.parse(arr[i]).p1+"</h2>"+"<h3>"+JSON.parse(arr[i]).p2+"</h3>"+"<p>"+JSON.parse(arr[i]).price+"</p>";
 trOb1+="<img src=\"img/"+JSON.parse(arr[i]).imgsrc+"\"/>"+"<h4>"+JSON.parse(arr[i]).youhui+"</h4>"+"<span>"+JSON.parse(arr[i]).yuanjia+"</span>"+"<b>"+"去看看"+"</b>"+"</a>"+"</li>";
$("#mu4").append(trOb1);
}
//			console.log( typeof zhuye[0]);
// 	 		console.log(typeof JSON.parse(zhuye[0]).p1);
            },
            dataType:"json"
        });
       
    });
		$("#mu3").on("mouseover","a",function(){
		$(this).css("border","1px solid red");
		$(this).find("h2").css({"text-decoration":"underline","color":"red"});
		
	});
		$("#mu4").on("mouseover","a",function(){
		$(this).css("border","1px solid red");
		$(this).find("h2").css({"text-decoration":"underline","color":"red"});
		
	});
		$("#mu3").on("mouseout","a",function(){
			$(this).css("border","1px solid #ccc");
			$(this).find("h2").css({"text-decoration":"none","color":"#333333"});
		});
		$("#mu4").on("mouseout","a",function(){
			$(this).css("border","1px solid #ccc");
			$(this).find("h2").css({"text-decoration":"none","color":"#333333"});
		})
});
