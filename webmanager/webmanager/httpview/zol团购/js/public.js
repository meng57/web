window.onload=function(){
	document.onselectstart=new Function("event.returnValue=false;");
var oli4=document.getElementById("li4");
var odiv2=document.getElementById("div2");
var bspan1=document.getElementById("bspan1");
var imgul=document.getElementById("imgul");
var bspan2=document.getElementById("bspan2");
oli4.onmouseover=function(){
	odiv2.style.display="block";
}
oli4.onmouseout=function(){
	odiv2.style.display="none";
}
imgul.onmouseover=function(){
	bspan1.style.display="block";
	bspan2.style.display="block";
}
bspan1.onmouseover=function(){
	bspan1.style.display="block";
	bspan1.style.background="#000 url(img/prev-btn.png) no-repeat";
	bspan1.style.opacity="0.3";
	
}
bspan1.onmouseout=function(){
	bspan1.style.background="url(img/prev-btn.png) no-repeat";
	bspan1.style.opacity=1;
}
bspan2.onmouseover=function(){
	bspan2.style.display="block";
	bspan2.style.background="#000 url(img/next-btn.png) no-repeat";
	bspan2.style.opacity="0.3";
	
}
bspan2.onmouseout=function(){
	bspan2.style.background="url(img/next-btn.png) no-repeat";
	bspan2.style.opacity=1;
}
imgul.onmouseout=function(){
	bspan1.style.display="none";
	bspan2.style.display="none";
}

			var imgul=document.getElementById("imgul");
        	var imgWidth=700;
        	var timer;
        	var pageIndex=1;
        	var flag=true;
        	//点击相应的数字可以变换图片
        	var arrlist=document.getElementById("shuul").children;
        		for(var i=0;i<arrlist.length;i++){
        			arrlist[i].onmouseover=function(){
                         flag=false;
        				if(pageIndex==4){
        					imgul.style.left=0;
        				}
        			var lia=parseInt(this.innerHTML);
        			var target={
        				left:-1*imgWidth*(lia-1)
        			}
        			move(imgul,target,function(){
        				flag=true;
        				playImg();
        			});
        			for(var j=0;j<arrlist.length;j++){
        				arrlist[j].className="liun";
        			}
        			this.className="lion";
        			pageIndex=lia;
        		}
        		}
        		//鼠标放上去可以停止或者接着运行        		
        		var odiv4=document.getElementById("div4");
        		odiv4.onmouseover=function(){
        			flag=false;
        			playImg();
        		}
        		odiv4.onmouseout=function(){
        			flag=true;
        			playImg();
        		}
        		//图片可以轮播
        		function playImg(){
        			clearInterval(timer);
        			timer=setInterval(function(){
        				if(flag){
        					if(pageIndex==4){
        				imgul.style.left=0;
        				var target={
        			     left:-1*imgWidth
        				}
        				move(imgul,target);
        				pageIndex=2;
        				}  	else{
        					var target={
        						left:-1*imgWidth*pageIndex
        					}
        					move(imgul,target);
        					pageIndex++;
        				}
        				setLi(pageIndex);
        				}
        	
        			},2000)
        		}
        				
        		playImg();
        		//图片轮播的时候数字跟着变动
        		function setLi(pageIndex){
        				var arrlist=document.getElementById("shuul").children;
        				for(var i=0;i<arrlist.length;i++){
        					arrlist[i].className="liun";
        				}
        				if(pageIndex==4){
        				pageIndex=0;
        				arrlist[pageIndex].className="lion";
        				}else{
        					arrlist[pageIndex-1].className="lion";
        				}
        		}
        		
        		
        		
        		}