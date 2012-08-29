var JAlias = {}
JAlias.jquery = 'jquery-1.7.2.min.js';
JAlias.jmboile = "http://localhost/directiontree/jscripts/plugins/jmobile/jmobile-1.2.0-cmd.js";
JAlias.fancybox = "http://localhost/directiontree/jscripts/plugins/fancybox/fancybox-1.3.4-cmd.js";
JAlias.datatable = "http://localhost/directiontree/jscripts/plugins/datatable/jquery.dataTables.min.js";
JAlias.dynamic = "http://localhost/directiontree/jscripts/control/dynamic.js";
JAlias.libDraw2d = "http://localhost/directiontree/jscripts/plugins/draw2d/draw2d.js";
JAlias.jsgraphics = "http://localhost/directiontree/jscripts/plugins/draw2d/wz_jsgraphics.js";
JAlias.jscharts = "http://localhost/directiontree/jscripts/plugins/jscharts/jscharts.js";

seajs.config({
    alias:JAlias,
    preload:["jquery"]
})

/*-- 全局$*/
seajs.modify('jquery', function (require, exports) {
    window.jQuery = window.$ = exports;
})





