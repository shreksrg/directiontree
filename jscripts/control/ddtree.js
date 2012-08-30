define(function (require, exports) {
    require('jsgraphics');
    var nodeEntity = require('http://localhost/directiontree/jscripts/control/ANGELa68.js');
    var draw2d = nodeEntity.draw2d;
    var canvasFlow = new draw2d.Workflow("paintarea");

    /*
     * 绘制销售链节点
     * */
    nodeEntity.content = "厂商";
    nodeEntity.orgid = "firm";
    nodeEntity.outports = [
        {pname:'bc', px:nodeEntity.width / 2, py:nodeEntity.height}
    ]
    var nodeObj1_1 = new nodeEntity.ANGELa68();
    canvasFlow.addFigure(nodeObj1_1, 200, 300);    //-- 绘制节点到画布

    nodeEntity.content = "一级商"; //-- 设置节点文本
    nodeEntity.orgid = "primary";  //-- 设置节点ID
    nodeEntity.outports = [
        {pname:'tc', px:nodeEntity.width / 2, py:0},
        {pname:'rc', px:nodeEntity.width, py:nodeEntity.height / 2},
        {pname:'bc', px:nodeEntity.width / 2, py:nodeEntity.height}
    ]
    var nodeObj2_1 = new nodeEntity.ANGELa68();
    canvasFlow.addFigure(nodeObj2_1, 400, 300);    //-- 绘制节点到画布

    nodeEntity.content = "二级商";
    nodeEntity.orgid = "secondary";
    nodeEntity.outports = [
        {pname:'tc', px:nodeEntity.width / 2, py:0},
        {pname:'lc', px:0, py:nodeEntity.height / 2},
        {pname:'rc', px:nodeEntity.width, py:nodeEntity.height / 2}
    ]
    var nodeObj3_1 = new nodeEntity.ANGELa68();
    canvasFlow.addFigure(nodeObj3_1, 600, 300);    //-- 绘制节点到画布

    /*
     * 绘制连线
     * */
    var connLine = nodeEntity.drawLine([nodeObj1_1, nodeObj2_1], ['bc', 'tc']);
    canvasFlow.addFigure(connLine);

    var connLine = nodeEntity.drawLine([nodeObj2_1, nodeObj3_1], ['rc', 'tc']);
    canvasFlow.addFigure(connLine);

    /*
     * 绘制百分比标签
     * */
    nodeEntity.label.spid = "primarysale";
    canvasFlow.addFigure(new nodeEntity.AGILabel68a(), 350, 253);
    $('#primarysale b').html("68.2%")

    nodeEntity.label.spid = "secondsale";
    canvasFlow.addFigure(new nodeEntity.AGILabel68a(), 480, 253);
    $('#secondsale b').html("38.8%")


})
