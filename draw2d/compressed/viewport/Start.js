/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.Start=function(){draw2d.ImageFigure.call(this,this.type+".png");this.outputPort=null;this.setDimension(50,50);return this;};draw2d.Start.prototype=new draw2d.ImageFigure;draw2d.Start.prototype.type="Start";draw2d.Start.prototype.setWorkflow=function(_1cfb){draw2d.ImageFigure.prototype.setWorkflow.call(this,_1cfb);if(_1cfb!=null&&this.outputPort==null){this.outputPort=new draw2d.MyOutputPort();this.outputPort.setWorkflow(_1cfb);this.outputPort.setMaxFanOut(4);this.outputPort.setBackgroundColor(new draw2d.Color(245,115,115));this.addPort(this.outputPort,this.width,this.height/2);this.outputPort1=new draw2d.MyOutputPort();this.outputPort1.setWorkflow(_1cfb);this.outputPort1.setMaxFanOut(4);this.outputPort1.setBackgroundColor(new draw2d.Color(245,115,115));this.addPort(this.outputPort1,this.width/2,0);this.outputPort2=new draw2d.MyOutputPort();this.outputPort2.setWorkflow(_1cfb);this.outputPort2.setMaxFanOut(4);this.outputPort2.setBackgroundColor(new draw2d.Color(245,115,115));this.addPort(this.outputPort2,this.width/2,this.height);this.outputPort3=new draw2d.MyOutputPort();this.outputPort3.setWorkflow(_1cfb);this.outputPort3.setMaxFanOut(4);this.outputPort3.setBackgroundColor(new draw2d.Color(245,115,115));this.addPort(this.outputPort3,0,this.height/2);}};