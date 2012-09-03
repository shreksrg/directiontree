/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.Label=function(msg){this.msg=msg;this.bgColor=null;this.color=new draw2d.Color(0,0,0);this.fontSize=10;this.textNode=null;this.align="center";draw2d.Figure.call(this);};draw2d.Label.prototype=new draw2d.Figure;draw2d.Label.prototype.type="draw2d.Label";draw2d.Label.prototype.createHTMLElement=function(){var item=draw2d.Figure.prototype.createHTMLElement.call(this);this.textNode=document.createTextNode(this.msg);item.appendChild(this.textNode);item.style.color=this.color.getHTMLStyle();item.style.fontSize=this.fontSize+"pt";item.style.width="auto";item.style.height="auto";item.style.paddingLeft="3px";item.style.paddingRight="3px";item.style.textAlign=this.align;item.style.MozUserSelect="none";this.disableTextSelection(item);if(this.bgColor!=null){item.style.backgroundColor=this.bgColor.getHTMLStyle();}return item;};draw2d.Label.prototype.isResizeable=function(){return false;};draw2d.Label.prototype.setWordwrap=function(flag){this.html.style.whiteSpace=flag?"wrap":"nowrap";};draw2d.Label.prototype.setAlign=function(align){this.align=align;this.html.style.textAlign=align;};draw2d.Label.prototype.setBackgroundColor=function(color){this.bgColor=color;if(this.bgColor!=null){this.html.style.backgroundColor=this.bgColor.getHTMLStyle();}else{this.html.style.backgroundColor="transparent";}};draw2d.Label.prototype.setColor=function(color){this.color=color;this.html.style.color=this.color.getHTMLStyle();};draw2d.Label.prototype.setFontSize=function(size){this.fontSize=size;this.html.style.fontSize=this.fontSize+"pt";};draw2d.Label.prototype.getWidth=function(){if(window.getComputedStyle){return parseInt(getComputedStyle(this.html,"").getPropertyValue("width"));}return parseInt(this.html.clientWidth);};draw2d.Label.prototype.getHeight=function(){if(window.getComputedStyle){return parseInt(getComputedStyle(this.html,"").getPropertyValue("height"));}return parseInt(this.html.clientHeight);};draw2d.Label.prototype.getText=function(){return this.msg;};draw2d.Label.prototype.setText=function(text){this.msg=text;this.html.removeChild(this.textNode);this.textNode=document.createTextNode(this.msg);this.html.appendChild(this.textNode);};draw2d.Label.prototype.setStyledText=function(text){this.msg=text;this.html.removeChild(this.textNode);this.textNode=document.createElement("div");this.textNode.style.whiteSpace="nowrap";this.textNode.innerHTML=text;this.html.appendChild(this.textNode);};