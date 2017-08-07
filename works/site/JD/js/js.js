window.onload=function(){
	var imgb=document.getElementById("imgb");
	var imgl=document.getElementById("imgl");
	var imgr=document.getElementById("imgr");
	var isearch=document.getElementById("search");
	var offon=true;
	
	imgl.onclick=function(){
		if(offon){
			imgb.src="img/QQ图片20160414203420.png";
			offon=false;}
		else{
			imgb.src="img/center.png"
			offon=true;
		}
	}
	imgr.onclick=function(){
		if(offon){
			imgb.src="img/QQ图片20160414203420.png";
			offon=false;}
		else{
			imgb.src="img/center.png";
			offon=true;
		}
	}
	isearch.onclick=function(){
		isearch.value="";
	}
//	imgl.onclick=function(){
//		div.style.background="url(img/QQ图片20160414203420.png)";
//	}
//	imgr.onclick=function(){
//		div.style.background="url(img/center.png)"
//	}
}