/*
* @Author: halation
* @Date:   2017-04-11 18:08:46
* @Last Modified by:   halation
* @Last Modified time: 2017-04-19 16:29:13
*/

'use strict';

 var stage=new createjs.Stage("gameView");
 createjs.Ticker.setFPS(30);
 createjs.Ticker.addEventListener("tick",stage);
 var gameView=new createjs.Container();
 stage.addChild(gameView);


var n=2;
function addRect(){

	var cl=parseInt(Math.random()*1000000);
	var color="#"+cl;
	var rectColor=createColor(cl);
	var x=parseInt(Math.random()*n);
	var y=parseInt(Math.random()*n);
	for(var indexX=0;indexX<n;indexX++){
		for(var indexY=0;indexY<n;indexY++){
			var r=new Rect(n,color,rectColor);
			gameView.addChild(r);
			r.x=indexX;
			r.y=indexY;

			if (r.x==x&&r.y==y) {
				r.setRectType(2);
			}
			r.x=indexX*(400/n);
			r.y=indexY*(400/n);
			if(r.getRectType()==2){
				r.addEventListener("click", function(){
					if(n<9){
						++n;
					}
					gameView.removeAllChildren();
					addRect();
				})
			}
		}
	}
}

function createColor(color){
	var colorArr=new Array();
	var temp=color;
	for(var i=0;i<3;i++){

		if(i==1){
			colorArr[i]=parseInt(temp%100);
		}

		var colorNum=parseInt(temp%100);

		if(colorNum>30){
			colorNum=colorNum-20;
		}else if(colorNum<10){
			colorNum=colorNum+10;
		}
 		colorArr[i]=colorNum;
 		temp=temp/100;
	}

	var colorStr=colorArr.join("");
	colorStr="#"+colorStr;
	//alert(a);
	return colorStr;
	
}

addRect();





