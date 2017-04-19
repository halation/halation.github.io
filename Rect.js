/*
* @Author: halation
* @Date:   2017-04-12 16:40:38
* @Last Modified by:   halation
* @Last Modified time: 2017-04-19 16:17:42
*/

'use strict';
function Rect(n,color,rectColor){
	createjs.Shape.call(this);
	this.setRectType=function(type){
		this._RectType=type;
		switch (type) {
			case 1:
				this.setColor(color);
				break;
			case 2:
				this.setColor(rectColor);
				break;
		}
	}

	this.setColor=function(colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawRect(0,0,400/n-5,400/n-5);
		this.graphics.endFill();

	}

	this.getRectType=function(){
		return this._RectType;
	}

	this.setRectType(1);
}

Rect.prototype=new createjs.Shape();







