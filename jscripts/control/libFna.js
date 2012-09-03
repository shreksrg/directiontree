define(function () {
        var ex = {}
        var single_RemoveJEl = function (d, a) {
            for (var i = 0; i <= d.length; i++) {
                for (var item in d[i]) {
                    if (item == a) {
                        delete d[i][a];
                    }
                    break;
                }
            }
            return d;
        }

        var Batch_RemoveJEl = function (d, a) {
            for (var i = 0; i <= d.length; i++) {
                for (var item in d[i]) {
                    /*-- d[i]={id:1, productName:"药品名1", salePer:"35%"}*/
                    for (var j = 0 in a) {
                        if (item == a[j]) {
                            delete d[i][item];
                        }
                    }
                }
            }
            return d;


        }

        var respDataFormat = function (data) {
            var arrData = [];
            if (typeof(data) === 'string') {
                var data = strToJson(data);
            }
            var length = data.length;
            for (var i = 0; i < length; i++) {
                arrData[i] = [];
                for (var item in data[i]) {
                    arrData[i].push(data[i][item]);
                }
            }
            return arrData
        }

        var strToJson = function (str) {
            return  (new Function("return " + str))();
        }

        ex.strToJson = strToJson;
        ex.respDataFormat = respDataFormat;
        ex.single_RemoveJEl = single_RemoveJEl;
        ex.Batch_RemoveJEl = Batch_RemoveJEl;
        return ex;
    }
)