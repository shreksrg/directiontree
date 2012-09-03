/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.FieldModel=function(name,label){this.name=name;this.label=label;};draw2d.FieldModel.prototype.type="FieldModel";draw2d.FieldModel.DBTYPE_TEXT="TEXT";draw2d.FieldModel.DBTYPE_DOCUMENT="DOCUMENT";draw2d.FieldModel.DBTYPE_INTEGER="INTEGER";draw2d.FieldModel.DBTYPE_LONG="LONG";draw2d.FieldModel.DBTYPE_FLOAT="FLOAT";draw2d.FieldModel.DBTYPE_DOUBLE="DOUBLE";draw2d.FieldModel.DBTYPE_DECIMAL="DECIMAL";draw2d.FieldModel.DBTYPE_DATE="DATE";draw2d.FieldModel.DBTYPE_TIME="TIME";draw2d.FieldModel.DBTYPE_TIMESTAMP="TIMESTAMP";draw2d.FieldModel.DBTYPE_LONGTEXT="LONGTEXT";draw2d.FieldModel.DBTYPE_BINARY="BINARY";draw2d.FieldModel.DBTYPE_ENUM="ENUM";draw2d.FieldModel.DBTYPE_BOOLEAN="BOOLEAN";draw2d.FieldModel.prototype.getLabel=function(){return this.label;};draw2d.FieldModel.prototype.getName=function(){return this.name;};draw2d.FieldModel.prototype.getExtendedDescriptionLabel=function(){if(this.getTypeName()==draw2d.FieldModel.DBTYPE_TEXT){return this.getName()+" "+this.getTypeName()+"<"+this.getLengthAsString()+">";}return this.getName()+" "+this.getTypeName();};draw2d.FieldModel.prototype.getTableModel=function(){return this.table;};draw2d.FieldModel.prototype.getTypeName=function(){return this.typeModel.getName();};draw2d.FieldModel.prototype.setTableModel=function(_25ce){if(!(_25ce instanceof draw2d.TableModel)){throw "Invalid parameter type in [FieldModel.prototype.setTableModel]";}this.table=_25ce;};draw2d.FieldModel.prototype.setTypeModel=function(_25cf){if(!(_25cf instanceof draw2d.FieldTypeModel)){throw "Invalid parameter type in [FieldModel.prototype.setTypeModel]";}this.typeModel=_25cf;this.typeModel.setParent(this);};draw2d.FieldModel.prototype.getTypeModel=function(){return this.typeModel;};draw2d.FieldModel.prototype.getLengthAsString=function(){var _25d0="";if(draw2d.FieldModel.DBTYPE_TEXT==this.getTypeName()){_25d0=Integer.toString(this.getTypeModel().getMaxLength());if(this.getTypeModel().getFixeLength()){_25d0="["+_25d0+"]";}}return _25d0;};