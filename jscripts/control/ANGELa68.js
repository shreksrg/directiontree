define(function (require, exports) {
    var draw2d = require("libDraw2d");
    var entity = {draw2d:draw2d, content:null, orgid:null, width:132, height:64, outports:[], portname:'ll', portposX:132, portposY:64};
    entity.label = {};
    entity.label.spid = (hashGUID() + hashGUID() + hashGUID() + hashGUID()).toUpperCase();

    entity.ANGELa68 = function () {
        this.nodeClass = 'agilesc-nodes agilesc-node-corner agilesc-gradient-blue1 agilesc-outshadow-1';
        draw2d.Node.call(this);
        this.setDimension(entity.width, entity.height);
    };
    entity.ANGELa68.prototype = new draw2d.Node;
    entity.ANGELa68.prototype.type = "ANGELa68";
    entity.ANGELa68.prototype.createHTMLElement = function () {
        var item = draw2d.Node.prototype.createHTMLElement.call(this);
        item.style.border = "none";
        item.style.fontSize = "14px";
        this.d = document.createElement("div");
        item.appendChild(this.d);
        return item;
    };

    entity.ANGELa68.prototype.setDimension = function (w, h) {
        draw2d.Node.prototype.setDimension.call(this, w, h);
        if (this.d != null) {
            this.d.style.width = this.width + "px";
            this.d.style.height = this.height + "px";
            this.d.setAttribute("node-role", "organize");
            this.d.setAttribute("orgid", entity.orgid);
            this.d.setAttribute("class", this.nodeClass);
            this.d.innerHTML = '<b>' + entity.content + '</b><p><label>销售额:</label><ac>1888</ac></p>';
        }
    };


    entity.ANGELa68.prototype.setWorkflow = function (_4422) {
        draw2d.Node.prototype.setWorkflow.call(this, _4422);
        var arrPort = entity.outports;

        for (var i = 0  in  arrPort) {
            porter = new draw2d.OutputPort();
            //this.op_lc.setMaxFanOut(5);
            porter.setWorkflow(_4422);
            porter.setHideIfConnected(true);
            porter.setName(arrPort[i].pname);
            //  this.op_lc.setBackgroundColor(new draw2d.Color(245, 115, 115));
            this.addPort(porter, arrPort[i].px, arrPort[i].py);
        }
    }


    entity.PolygonConnectionDecorator = function () {
    }

    entity.PolygonConnectionDecorator.prototype = new draw2d.ConnectionDecorator;
    entity.PolygonConnectionDecorator.prototype.paint = function (g) {
        g.setColor(new draw2d.Color(128, 255, 255));
        //  g.fillPolygon([0, 15, 30, 15, 3], [0, 5, 0, -5, 0]);
        g.fillPolygon([-2, 10, 10], [0, 5, -5]);
        g.setColor(new draw2d.Color(128, 128, 255));
        g.setStroke(1);
        // g.drawPolygon([0, 15, 30, 15, 3], [0, 5, 0, -5, 0]);
        g.drawPolygon([-2, 10, 10], [0, 5, -5]);
    };

    entity.drawLine = function (nodeObj, portName) {
        var c = new draw2d.Connection();
        c.setSource(nodeObj[0].getPort(portName[0]));
        c.setTarget(nodeObj[1].getPort(portName[1]));
        c.setLineWidth(1.5);
        c.setColor(new draw2d.Color(96, 152, 255));
        c.setTargetDecorator(new entity.PolygonConnectionDecorator());
        return c;
    }


    entity.AGILabel68a = function (c) {
        draw2d.Label.call(this, c);
    }
    entity.AGILabel68a.prototype = new draw2d.Label;
    entity.AGILabel68a.prototype.type = "AGILabel68a";
    entity.AGILabel68a.prototype.createHTMLElement = function () {
        var item = draw2d.Figure.prototype.createHTMLElement.call(this);
        this.d = document.createElement("div");
        this.d.setAttribute("node-role", "spLabel");
        this.d.setAttribute("id", entity.label.spid);
        this.d.innerHTML = '<label>销售占比:</label><b>0.00</b>%';
        item.appendChild(this.d);
        item.style.width = "auto";
        item.style.height = "auto";
        item.style.fontSize = this.fontSize + "pt";
        return item;
    };

    /*
     * 生成GUID值
     * */
    function hashGUID() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }

    return entity;
})