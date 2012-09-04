/**
 * Created with JetBrains PhpStorm.
 * User: shiruigang
 * Date: 12-8-28
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports) {
    require.async('jscharts');
    var resData = [];
    exports.setDataResponse = function (d) {
        resData = d;
    }

    /*
     * 数据格式转换(通用)
     * */

    function respDataFormat(data) {
        var arrData = [];
        var length = data.length;
        for (var i = 0; i < length; i++) {
            arrData[i] = [];
            for (var item in data[i]) {
                arrData[i].push(data[i][item]);
            }
        }
        return arrData
    }

    /*
     * 绘制饼状图
     * */
    exports.drawPie = function (data, argument) {
        /*-- 参数数据样例*/
        /*var data = [
         {id:1,productName:"药品名1", salePer:30},
         {id:2,productName:"药品名2", salePer:20},
         {id:3,productName:"药品名3", salePer:40},
         {id:4,productName:"药品名4", salePer:10}
         ]*/

        /*-- 设置颜色数组*/
        var arrColor;
        var arrDefColor = ['#99CDFB', '#3366FB', '#0000FA', '#F8CC00', '#F89900', '#F76600', '#d80707', '#bd07d8', '#5f07d8'];
        var length = data.length;
        argument.colorSequence ? arrColor = argument.colorSequence : arrColor = arrDefColor;

        var arrData = respDataFormat(data);

        /*-- 设置标注颜色与元素对应*/
        var arrLegend = [];
        for (var i in data) {
            arrLegend[i] = {label:data[i][argument.ccitemName], color:arrColor[i]}
        }


        /*-- 打印饼图*/
        var myChart = new JSChart(argument.divID, 'pie');
        myChart.setDataArray(arrData);
        myChart.colorize(arrColor.slice(0, length));
        myChart.setSize(argument.sizeWidth, argument.sizeHeight);  //-- 设置宽度和高度:618*198
        myChart.setTitle('');
        myChart.setTitleFontFamily('Times New Roman');
        myChart.setTitleFontSize(14);
        myChart.setTitleColor('#0F0F0F');
        myChart.setPieRadius(argument.radius); //-- 饼图尺寸
        myChart.setPieValuesColor('#FFFFFF');
        myChart.setPieValuesFontSize(9);
        myChart.setPiePosition(argument.posX, argument.posY);  //-- 饼状图坐标:X156,Y98
        myChart.setShowXValues(false);
        for (var i in arrLegend) { //-- 标注对应颜色
            myChart.setLegend(arrLegend[i].color, arrLegend[i].label);
        }
        myChart.setLegendShow(true);
        myChart.setLegendFontFamily('Times New Roman');
        myChart.setLegendFontSize(10);
        myChart.setLegendPosition(argument.labposX, argument.labposY); //-- 标注文本坐标:X312,Y56
        myChart.setPieAngle(argument.angle);  //-- 倾斜度
        myChart.set3D(true);  //-- 开启3D效果
        myChart.draw();
    }


    /*
     * 绘制柱状图
     * */

    exports.drawBar = function (data, argument) {
        /*-- 参数数据样例*/
        /*var data = [
         {"name":"广州医院", "last":65, "current":165},
         {"name":"上海医院", "last":25, "current":365},
         {"name":"北京医院", "last":715, "current":205},
         {"name":"成都医院", "last":435, "current":715},
         {"name":"南京连锁", "last":65, "current":405}
         ]*/

        var eee;
        var length = data.length;
        var arrData = respDataFormat(data);
        var max = 12;
        for (var i = 0; i < arrData.length; i++) {
            var s = arrData[i][0];
            if (s.length > max) {
                arrData[i][0] = s.substr(0, (max - 2)) + '..';
            }
        }

        /*-- 打印柱状图*/
        //  var myData = new Array(['Asia', 437, 520], ['Europe', 322, 390], ['North America', 233, 286], ['Latin America', 110, 162], ['Africa', 34, 49], ['Middle East', 20, 31], ['Aus/Oceania', 19, 22]);
        var myChart = new JSChart(argument.divID, 'bar');
        myChart.setDataArray(arrData);
        myChart.setTitle('经销商排名');
        myChart.setTitleColor('#8E8E8E');
        myChart.setAxisNameX('');
        myChart.setAxisNameY('');
        myChart.setAxisNameFontSize(14);
        myChart.setAxisNameColor('#999');
        myChart.setAxisValuesAngle(32); //-- 柱形元素名称倾斜度
        myChart.setAxisValuesColor('#777');
        myChart.setAxisColor('#B5B5B5');
        myChart.setAxisWidth(2); //-- 坐标轴宽度
        myChart.setBarValuesColor('#2F6D99');
        myChart.setAxisPaddingTop(48);
        myChart.setAxisPaddingBottom(100);
        myChart.setAxisPaddingLeft(85);
        myChart.setTitleFontSize(14);
        for (var i in argument.barColor) {
            myChart.setBarColor(argument.barColor[i].color, argument.barColor[i].sort);
        }
        myChart.setBarBorderWidth(0);  //-- 柱形边框宽度
        myChart.setBarSpacingRatio(60);  //-- 柱形横切面宽度，值越小越宽
        myChart.setBarOpacity(0.8);  // -- 透明度
        myChart.setFlagRadius(0); //-- 未知
        /* myChart.setTooltip(['North America', 'Click me', 1], callback);
         myChart.setTooltipPosition('nw');
         myChart.setTooltipOffset(3);*/
        myChart.setLegendShow(argument.legendShow);  //default : true
        myChart.setLegendPosition('right top');
        for (var i in argument.legends) {
            myChart.setLegendForBar(argument.legends[i][0], argument.legends[i][1]); //--标注信息 1,去年
        }
        myChart.setSize(argument.sizeWidth, argument.sizeHeight); //-- 设置画布宽与高 618*360
        myChart.setGridColor('#C6C6C6');
        myChart.set3D(true);
        myChart.draw();

        function callback() {
            alert('User click');
        }
    }
})
