draw2d.ButtonDelete=function(_5160){draw2d.Button.call(this,_5160,16,16);};draw2d.ButtonDelete.prototype=new draw2d.Button;draw2d.ButtonDelete.prototype.type="ButtonDelete";draw2d.ButtonDelete.prototype.execute=function(){this.palette.workflow.getCommandStack().execute(new draw2d.CommandDelete(this.palette.workflow.getCurrentSelection()));draw2d.ToolGeneric.prototype.execute.call(this);};