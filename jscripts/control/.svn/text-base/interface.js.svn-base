define(function (require, exports) {
    /**
     *  对象接口
     */

    exports = {'adapter':_iTreeNode};
    function _iTreeNode(ANGELaxx) {
        var ANGELaxx = ANGELaxx;
        var coordX = 0;
        var coordY = 0;
        var orgname = null;

        /*-- 设置节点坐标*/
        this.setCoordinate = function (x, y) {
            coordX = x;
            coordY = y;
        }

        /*-- 设置节点连接点*/
        this.setPoint = function () {
            ANGELaxx.prototype.setWorkflow = function () {
                //-- 设置连接点
            }
        }

        /*-- 设置节点显示内容*/
        this.setHtml = function (c) {
            ANGELaxx.title = c
        }

        /*-- 设置节点属性:节点代表的组织名称*/
        this.setOrgname = function (c) {
            orgname = c;
            ANGELaxx.orgname = c;
        }

        /*-- 设置节点外观*/
        this.setFacade = function (s) {
            $('div[orgname=' + orgname + ']').removeClass().addClass(s);
        }

        /*-- 节点点击事件*/
        this.eventClick = function () {
        }

        /*-- 绘制节点*/
        this.drawNode = function (f) {
            f.addFigure(new ANGELaxx(), coordX, coordY);
        }
    }


    function _iLine() {
    }

    function _iLabel() {
    }

})