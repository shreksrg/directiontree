draw2d.OverviewWindow=function(name){draw2d.WindowFigure.call(this,"Overview Window");this.setDimension(180,150);this.servers=new Object();this.name=name;};draw2d.OverviewWindow.prototype=new draw2d.WindowFigure;draw2d.OverviewWindow.prototype.type="OverviewWindow";draw2d.OverviewWindow.prototype.createHTMLElement=function(){var item=draw2d.WindowFigure.prototype.createHTMLElement.call(this);this.inputDiv=document.createElement("div");this.inputDiv.style.position="absolute";this.inputDiv.style.left="10px";this.inputDiv.style.top="20px";this.inputDiv.style.overflow="auto";this.inputDiv.style.border="1px solid black";this.inputDiv.style.font="normal 10px verdana";item.appendChild(this.inputDiv);return item;};draw2d.OverviewWindow.prototype.setDimension=function(w,h){draw2d.WindowFigure.prototype.setDimension.call(this,w,h);if(this.inputDiv!=null){this.inputDiv.style.height=(h-30)+"px";this.inputDiv.style.width=(w-20)+"px";}};draw2d.OverviewWindow.prototype.addServer=function(_5b23){this.servers[_5b23.id]=_5b23;this.createList();};draw2d.OverviewWindow.prototype.removeServer=function(_5b24){this.servers[_5b24.id]=null;this.createList();};draw2d.OverviewWindow.prototype.createList=function(){this.inputDiv.innerHTML="";var list=document.createElement("ul");for(key in this.servers){var _5b26=this.servers[key];if(_5b26!=null){var li=document.createElement("li");var a=document.createElement("a");a.href="javascript:draw2d.OverviewWindow.scrollTo('"+_5b26.id+"')";a.innerHTML=_5b26.ip;li.appendChild(a);if(_5b26.isReachable()){a.style.color="green";}else{a.style.color="red";a.style.fontWeight="bold";}list.appendChild(li);}}this.inputDiv.appendChild(list);};draw2d.OverviewWindow.scrollTo=function(id){var _5b2a=workflow.getFigure(id);workflow.scrollTo(_5b2a.getX()-draw2d.OverviewWindow.screenWidth()/2,_5b2a.getY()-draw2d.OverviewWindow.screenHeight()/2);};draw2d.OverviewWindow.prototype.onDragend=function(){draw2d.WindowFigure.prototype.onDragend.call(this);};draw2d.OverviewWindow.screenWidth=function(){var _5b2b=0;if(typeof (window.innerWidth)=="number"){_5b2b=window.innerWidth;}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){_5b2b=document.documentElement.clientWidth;}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){_5b2b=document.body.clientWidth;}}}return _5b2b;};draw2d.OverviewWindow.screenHeight=function(){var _5b2c=0;if(typeof (window.innerWidth)=="number"){_5b2c=window.innerHeight;}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){_5b2c=document.documentElement.clientHeight;}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){_5b2c=document.body.clientHeight;}}}return _5b2c;};