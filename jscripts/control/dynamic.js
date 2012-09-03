define(function (require, exports) {
    require.async('datatable');
    exports.dataTable = function (data, args) {

        /*  var resData = [
         [1, "药品名1", "156", "15%", "20%"],
         [2, "药品名2", "556", "56%", "60%"],
         [3, "药品名3", "296", "85%", "80%"],
         ];*/

        /*[
         { "sTitle":"ID" },
         { "sTitle":"药品名" },
         { "sTitle":"销售额" }
         /* { "sTitle":"同比增长%" },
         { "sTitle":"环比增长%" }
         ]*/

        $('#' + args.tID).dataTable({
            "bDestroy":true,
            "bJQueryUI":false,
            "bFilter":false,
            "bInfo":false,
            "bPaginate":false,
            "sPaginationType":"full_numbers",
            "aaData":data,
            "aoColumns":args.aoColumns
        });

    }
})
