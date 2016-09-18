function getStyle(obj, attr) {
    if (obj.currentStyle) {   //ie
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, false)[attr];  //非ie
    }
}

//var target={
//	
//}
function getStyle(obj, attr) {
    if (obj.currentStyle) {   //ie
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, false)[attr];  //非ie
    }
}


function move(element,target,fn){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var isComplete=true;
        for(var attr in target){
            var cur=Math.round(parseFloat(getStyle(element,attr)));
            if(!cur){
                cur=0;
            }
            var speed=(target[attr]-cur)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
            if(cur==target[attr]){
                //sclearInterval(timer);
            }else{
                isComplete=false;
                element.style[attr]=cur+speed+"px";
            }
        }
        if(isComplete){
            clearInterval(element.timer);
            if(fn){
                fn();
            }
        }
    },30);
}