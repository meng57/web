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
                var arr=[];
                var arr1=[];
                var index=0;
                var index1=0;
	        for(var i=0;i<myData.length;i++){
	        if(parseInt(myData[i].Id)>=300001&&parseInt(myData[i].Id)<400000){
	                		arr[index]=myData[i].Data;
	                		index++;
	                }
	        }
				for(var i=0;i<arr.length;i++){
				var trOb="<li>"+"<a href=\"javascript:;\">"+"<h2>"+JSON.parse(arr[i]).p1+"</h2>"+"<h3>"+JSON.parse(arr[i]).p2+"</h3>"+"<p>"+JSON.parse(arr[i]).price+"</p>";
				 trOb+="<img src=\"img/"+JSON.parse(arr[i]).imgsrc+"\"/>"+"<h4>"+JSON.parse(arr[i]).youhui+"</h4>"+"<span>"+JSON.parse(arr[i]).yuanjia+"</span>"+"<b>"+"去看看"+"</b>"+"</a>"+"</li>";
				 
				$("#mu5").append(trOb);
				}
				for(var i=0;i<myData.length;i++){
	        if(parseInt(myData[i].Id)>=400001&&parseInt(myData[i].Id)<400004){
	                		arr1[index1]=myData[i].Data;
	                		index1++;
	                }
	        }
				for(var i=0;i<arr1.length;i++){
				var trOb="<li>"+"<a href=\"javascript:;\">"+"<h2>"+JSON.parse(arr1[i]).p1+"</h2>"+"<h3>"+JSON.parse(arr1[i]).p2+"</h3>"+"<p>"+JSON.parse(arr1[i]).price+"</p>";
				 trOb+="<img src=\"img/"+JSON.parse(arr1[i]).imgsrc+"\"/>"+"<h4>"+JSON.parse(arr1[i]).youhui+"</h4>"+"<span>"+JSON.parse(arr1[i]).yuanjia+"</span>"+"<b>"+"去看看"+"</b>"+"</a>"+"</li>";
				 
				$("#mu6").append(trOb);
				}
//			console.log( typeof zhuye[0]);
// 	 		console.log(typeof JSON.parse(zhuye[0]).p1);
            },
            dataType:"json"
        });
       
    });
	$("#mu5").on("mouseover","a",function(){
		$(this).css("border","1px solid red");
		$(this).find("h2").css({"text-decoration":"underline","color":"red"});
		
	});
	$("#mu6").on("mouseover","a",function(){
		$(this).css("border","1px solid red");
		$(this).find("h2").css({"text-decoration":"underline","color":"red"});
		
	});
		$("#mu5").on("mouseout","a",function(){
			$(this).css("border","1px solid #ccc");
			$(this).find("h2").css({"text-decoration":"none","color":"#333333"});
		});
			$("#mu6").on("mouseout","a",function(){
						$(this).css("border","1px solid #ccc");
						$(this).find("h2").css({"text-decoration":"none","color":"#333333"});
					});
//		var aleft=document.getElementById("aleft");
//		var aright=document.getElementById("aright");
//		aleft.onclick=function(){
//			for(var i=0;i<myData.length;i++){
//	        if(parseInt(myData[i].Id)>=300001&&parseInt(myData[i].Id)<400000){
//	                		arr[index]=myData[i].Data;
//	                		index++;
//	                }
//	        }
//		}

})
	