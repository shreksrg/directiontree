/**
 * Created with JetBrains PhpStorm.
 * User: shiruigang
 * Date: 12-8-28
 * Time: 下午4:39
 * To change this template use File | Settings | File Templates.
 */
define(function (require, exports) {
    require('jscharts');
    exports.initeral = function () {


        var myChart = new JSChart('graph', 'pie');
        myChart.setDataArray([
            ['A', 40],
            ['B', 16],
            ['C', 20],
            ['D', 10],
            ['E', 10],
            ['F', 4]
        ]);
        myChart.colorize(['#99CDFB', '#3366FB', '#0000FA', '#F8CC00', '#F89900', '#F76600']);
        myChart.setSize(1600, 800);
        myChart.setTitle('Phd Reference Chart');
        myChart.setTitleFontFamily('Times New Roman');
        myChart.setTitleFontSize(14);
        myChart.setTitleColor('#0F0F0F');
        myChart.setPieRadius(185);
        myChart.setPieValuesColor('#FFFFFF');
        myChart.setPieValuesFontSize(9);
        myChart.setPiePosition(180, 165);
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
        myChart.setLegendPosition(350, 120); //-- 标注文本坐标
        myChart.setPieAngle(60);  //-- 倾斜度
        myChart.set3D(true);
        myChart.draw();
    }
})
