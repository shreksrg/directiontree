/**
 * Created with JetBrains PhpStorm.
 * User: shiruigang
 * Date: 12-8-28
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports) {
    require('jscharts');
    var resData = [];
    exports.setDataResponse = function (d) {
        resData = d;
    }
    exports.drawPie = function (d) {
        /*-- 参数数据样例*/
        var d = [
            {"name":"hangzhou", "item":65},
            {"name":"shanghai", "item":20},
            {"name":"sichuan", "item":15}
        ]

        /*-- 转换json为数组*/
        var arrData = [];
        var data = eval(d); // 主要在于 eval 这个函数
        var length = data.length;
        for (var i = 0; i < length; i++) {
            arrData[i] = [];
            arrData[i].push(data[i]["name"], data[i]["item"]);
        }

        /*-- 打印饼图*/
        var myChart = new JSChart('graph', 'pie');
        myChart.setDataArray(arrData);
        myChart.colorize(['#99CDFB', '#3366FB', '#0000FA']);
        myChart.setSize(560, 320);
        myChart.setTitle('厂商销售产品比');
        myChart.setTitleFontFamily('Times New Roman');
        myChart.setTitleFontSize(14);
        myChart.setTitleColor('#0F0F0F');
        myChart.setPieRadius(160); //-- 饼图尺寸
        myChart.setPieValuesColor('#FFFFFF');
        myChart.setPieValuesFontSize(9);
        myChart.setPiePosition(168, 165);  //-- 饼状图坐标
        myChart.setShowXValues(false);
        myChart.setLegend('#99CDFB', 'Papers where authors found');
        myChart.setLegend('#3366FB', 'Papers which cite from other articles');
        myChart.setLegend('#0000FA', 'Papers which cite from news');
        myChart.setLegend('#F8CC00', 'Papers which lack crucial');
        myChart.setLegend('#F89900', 'Papers with different conclusion');
        myChart.setLegend('#F76600', 'Papers with useful information');
        myChart.setLegendShow(true);
        myChart.setLegendFontFamily('Times New Roman');
        myChart.setLegendFontSize(10);
        myChart.setLegendPosition(350, 86); //-- 标注文本坐标
        myChart.setPieAngle(40);  //-- 倾斜度
        myChart.set3D(true);  //-- 开启3D效果
        myChart.draw();
    }


    exports.drawBar = function (d) {
        /*-- 参数数据样例*/
        var d = [
            {"name":"hangzhou", "prevent":65, "next":165},
            {"name":"shanghai", "prevent":25, "next":665},
            {"name":"sichuan", "prevent":265, "next":485}
        ]

        /*-- 转换json为数组*/
        var arrData = [];
        var data = eval(d); // 主要在于 eval 这个函数
        var length = data.length;
        for (var i = 0; i < length; i++) {
            arrData[i] = [];
            arrData[i].push(data[i]["name"], data[i]["item"]);
        }

        /*-- 打印饼图*/
        var myData = new Array(['Asia', 437, 520], ['Europe', 322, 390], ['North America', 233, 286], ['Latin America', 110, 162], ['Africa', 34, 49], ['Middle East', 20, 31], ['Aus/Oceania', 19, 22]);
        var myChart = new JSChart('graphbar', 'bar');
        myChart.setDataArray(myData);
        myChart.setTitle('经销商排名');
        myChart.setTitleColor('#8E8E8E');
        myChart.setAxisNameX('');
        myChart.setAxisNameY('');
        myChart.setAxisNameFontSize(16);
        myChart.setAxisNameColor('#999');
        myChart.setAxisValuesAngle(30);
        myChart.setAxisValuesColor('#777');
        myChart.setAxisColor('#B5B5B5');
        myChart.setAxisWidth(2); //-- 坐标轴宽度
        myChart.setBarValuesColor('#2F6D99');
        myChart.setAxisPaddingTop(60);
        myChart.setAxisPaddingBottom(60);
        myChart.setAxisPaddingLeft(45);
        myChart.setTitleFontSize(11);
        myChart.setBarColor('#2D6B96', 1);
        myChart.setBarColor('#9CCEF0', 2);
        myChart.setBarBorderWidth(0);
        myChart.setBarSpacingRatio(50);
        myChart.setBarOpacity(0.9);
        myChart.setFlagRadius(6);
        myChart.setTooltip(['North America', 'Click me', 1], callback);
        myChart.setTooltipPosition('nw');
        myChart.setTooltipOffset(3);
        myChart.setLegendShow(true);
        myChart.setLegendPosition('right top');
        myChart.setLegendForBar(1, '2005');
        myChart.setLegendForBar(2, '2010');
        myChart.setSize(616, 321);
        myChart.setGridColor('#C6C6C6');
        myChart.set3D(true);
        myChart.draw();

        function callback() {
            alert('User click');
        }
    }
})
