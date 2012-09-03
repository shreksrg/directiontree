define(function () {
    var value2 = {
        "china":[
            {"name":"hangzhou", "item":"1"},
            {"name":"shanghai", "item":"2"},
            {"name":"sichuan", "item":"3"}
        ],
        "America":[
            {"name":"aa", "item":"12"},
            {"name":"bb", "item":"2"}
        ],
        "Spain":[
            {"name":"cc", "item":"1"},
            {"name":"dd", "item":"23"},
            {"name":"ee", "item":"3"}
        ]
    };


    var jCity = [
        {"name":"hangzhou", "item":"1"},
        {"name":"shanghai", "item":"2"},
        {"name":"sichuan", "item":"3"}
    ]


    for (var cityObj in jCity) {
        //可以用document.write("&nbsp;&nbsp;" + value2[countryObj][cityObj].item + "<br />");
        //   console.log(jCity[cityObj]["item"])
        //document.write();
    }


    /* for (var countryObj in value2) {
     console.log(countryObj + ":");
     for (var cityObj in value2[countryObj]) {
     //可以用document.write("&nbsp;&nbsp;" + value2[countryObj][cityObj].item + "<br />");
     console.log(value2[countryObj][cityObj]["name"])
     //document.write();
     }
     }*/


    /*
     * json转换成数组
     * */


    function JsonToArray(d) {

        var arrData = [];
        var data = eval(d); // 主要在于 eval 这个函数
        var length = data.length;
        for (var i = 0; i < length; i++) {
            arrData[i] = [];
            arrData[i].push(data[i]["name"], data[i]["item"]);
        }
        return arrData
        console.log(arrData[0][0]);
    }

    //document.getElementById("div_json").innerHTML = str;

})