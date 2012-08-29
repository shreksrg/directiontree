define(function (require, exports) {
    var aDataSet = [
        ['Trident', 'Internet Explorer 4.0', 'Win 95+', '4', 'X'],
        ['Trident', 'Internet Explorer 5.0', 'Win 95+', '5', 'C'],
        ['Trident', 'Internet Explorer 5.5', 'Win 95+', '5.5', 'A'],
        ['Trident', 'Internet Explorer 6', 'Win 98+', '6', 'A'],
        ['Trident', 'Internet Explorer 7', 'Win XP SP2+', '7', 'A'],
        ['Trident', 'AOL browser (AOL desktop)', 'Win XP', '6', 'A'],
        ['Gecko', 'Firefox 1.0', 'Win 98+ / OSX.2+', '1.7', 'A'],
        ['Gecko', 'Firefox 1.5', 'Win 98+ / OSX.2+', '1.8', 'A'],
        ['Gecko', 'Firefox 2.0', 'Win 98+ / OSX.2+', '1.8', 'A'],
        ['Gecko', 'Firefox 3.0', 'Win 2k+ / OSX.3+', '1.9', 'A'],
        ['Gecko', 'Camino 1.0', 'OSX.2+', '1.8', 'A'],
        ['Gecko', 'Camino 1.5', 'OSX.3+', '1.8', 'A'],
        ['Gecko', 'Netscape 7.2', 'Win 95+ / Mac OS 8.6-9.2', '1.7', 'A'],
        ['Gecko', 'Netscape Browser 8', 'Win 98SE+', '1.7', 'A'],
        ['Gecko', 'Netscape Navigator 9', 'Win 98+ / OSX.2+', '1.8', 'A'],
        ['Gecko', 'Mozilla 1.0', 'Win 95+ / OSX.1+', 1, 'A'],
        ['Gecko', 'Mozilla 1.1', 'Win 95+ / OSX.1+', 1.1, 'A'],
        ['Gecko', 'Mozilla 1.2', 'Win 95+ / OSX.1+', 1.2, 'A'],
        ['Gecko', 'Mozilla 1.3', 'Win 95+ / OSX.1+', 1.3, 'A'],
        ['Gecko', 'Mozilla 1.4', 'Win 95+ / OSX.1+', 1.4, 'A'],
        ['Gecko', 'Mozilla 1.5', 'Win 95+ / OSX.1+', 1.5, 'A'],
        ['Gecko', 'Mozilla 1.6', 'Win 95+ / OSX.1+', 1.6, 'A'],
        ['Gecko', 'Mozilla 1.7', 'Win 98+ / OSX.1+', 1.7, 'A'],
        ['Gecko', 'Mozilla 1.8', 'Win 98+ / OSX.1+', 1.8, 'A'],
        ['Gecko', 'Seamonkey 1.1', 'Win 98+ / OSX.2+', '1.8', 'A'],
        ['Gecko', 'Epiphany 2.20', 'Gnome', '1.8', 'A'],
        ['Webkit', 'Safari 1.2', 'OSX.3', '125.5', 'A'],
        ['Webkit', 'Safari 1.3', 'OSX.3', '312.8', 'A'],
        ['Webkit', 'Safari 2.0', 'OSX.4+', '419.3', 'A'],
        ['Webkit', 'Safari 3.0', 'OSX.4+', '522.1', 'A'],
        ['Webkit', 'OmniWeb 5.5', 'OSX.4+', '420', 'A'],
        ['Webkit', 'iPod Touch / iPhone', 'iPod', '420.1', 'A'],
        ['Webkit', 'S60', 'S60', '413', 'A'],
        ['Presto', 'Opera 7.0', 'Win 95+ / OSX.1+', '-', 'A'],
        ['Presto', 'Opera 7.5', 'Win 95+ / OSX.2+', '-', 'A'],
        ['Presto', 'Opera 8.0', 'Win 95+ / OSX.2+', '-', 'A'],
        ['Presto', 'Opera 8.5', 'Win 95+ / OSX.2+', '-', 'A'],
        ['Presto', 'Opera 9.0', 'Win 95+ / OSX.3+', '-', 'A'],
        ['Presto', 'Opera 9.2', 'Win 88+ / OSX.3+', '-', 'A'],
        ['Presto', 'Opera 9.5', 'Win 88+ / OSX.3+', '-', 'A'],
        ['Presto', 'Opera for Wii', 'Wii', '-', 'A'],
        ['Presto', 'Nokia N800', 'N800', '-', 'A'],
        ['Presto', 'Nintendo DS browser', 'Nintendo DS', '8.5', 'C/A<sup>1</sup>'],
        ['KHTML', 'Konqureror 3.1', 'KDE 3.1', '3.1', 'C'],
        ['KHTML', 'Konqureror 3.3', 'KDE 3.3', '3.3', 'A'],
        ['KHTML', 'Konqureror 3.5', 'KDE 3.5', '3.5', 'A'],
        ['Tasman', 'Internet Explorer 4.5', 'Mac OS 8-9', '-', 'X'],
        ['Tasman', 'Internet Explorer 5.1', 'Mac OS 7.6-9', '1', 'C'],
        ['Tasman', 'Internet Explorer 5.2', 'Mac OS 8-X', '1', 'C'],
        ['Misc', 'NetFront 3.1', 'Embedded devices', '-', 'C'],
        ['Misc', 'NetFront 3.4', 'Embedded devices', '-', 'A'],
        ['Misc', 'Dillo 0.8', 'Embedded devices', '-', 'X'],
        ['Misc', 'Links', 'Text only', '-', 'X'],
        ['Misc', 'Lynx', 'Text only', '-', 'X'],
        ['Misc', 'IE Mobile', 'Windows Mobile 6', '-', 'C'],
        ['Misc', 'PSP browser', 'PSP', '-', 'C'],
        ['Other browsers', 'All others', '-', '-', 'U']
    ];


    exports.dataTable = function (resData) {
        var resData = [
            {level:1, productName:"药品名1", overPer:"15%", chainPer:"30%"},
            {level:2, productName:"药品名2", overPer:"16%", chainPer:"31%"},
            {level:3, productName:"药品名3", overPer:"17%", chainPer:"32%"},
        ];


        /*-- 转换json为数组*/
        var arrData = [];
        var data = eval(resData); // 主要在于 eval 这个函数
        var length = data.length;
        for (var i = 0; i < length; i++) {
            arrData[i] = [];
            arrData[i].push(data[i]["level"], data[i]["productName"], data[i]["overPer"], data[i]["chainPer"]);
        }

        $('#dynamic').html('<div><select name="month" id=""><option value="">7月</option></select><select name="product" id=""><option value="">维生素</option></select><button>查询</button></div><table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>');
        $('#example').dataTable({
            "sPaginationType":"full_numbers",
            "aaData":arrData,
            "aoColumns":[
                { "sTitle":"Engine" },
                { "sTitle":"Browser" },
                { "sTitle":"Platform" },
                { "sTitle":"Version", "sClass":"center" },
                /*{
                 "sTitle":"Grade",
                 "sClass":"center",
                 "fnRender":function (obj) {
                 var sReturn = obj.aData[ obj.iDataColumn ];
                 if (sReturn == "A") {
                 sReturn = "<b>A</b>";
                 }
                 return sReturn;
                 }
                 }*/
            ]
        });

    }
})
