draw2d.ForeignKeyModel=function(_4d25,_4d26,_4d27,_4d28){draw2d.AbstractConnectionModel.call(this);this.fromTable=_4d27;this.fromField=_4d28;this.toTable=_4d25;this.toField=_4d26;};draw2d.ForeignKeyModel.prototype=new draw2d.AbstractConnectionModel;draw2d.ForeignKeyModel.prototype.type="draw2d.ForeignKeyModel";draw2d.ForeignKeyModel.prototype.getSourceModel=function(){return this.getDatabaseModel().getTableModel(this.toTable);};draw2d.ForeignKeyModel.prototype.getTargetModel=function(){return this.getDatabaseModel().getTableModel(this.fromTable);};draw2d.ForeignKeyModel.prototype.getSourcePortName=function(){return "out_"+this.toField;};draw2d.ForeignKeyModel.prototype.getTargetPortName=function(){return "in_"+this.fromField;};draw2d.ForeignKeyModel.prototype.getDatabaseModel=function(){return this.getModelParent().getDatabaseModel();};draw2d.ForeignKeyModel.prototype.getPersistentAttributes=function(){var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.fromTable=this.fromTable;att.fromField=this.fromField;att.toTable=this.toTable;att.toField=this.toField;return att;};