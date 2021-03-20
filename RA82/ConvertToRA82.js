function ConvertToRA82(data) {
    var shuffleSeed = require('shuffle-seed');
    var result = "";
    var splittedData = data.split("");
    splittedData = shuffleSeed.shuffle(splittedData,"ffzattrfq");
    console.log(splittedData);
    for(var i in splittedData)
    {
        var splittedChar = splittedData[i];
        for (let index = 0; index < parseInt(splittedChar); index++) {
            result += "1";
        }
        result += "0";
    }
    result = shuffleSeed.shuffle(result.split(""),"ttarqqezgen").join("");
    return result;
}
exports.ConvertToRA82 = ConvertToRA82;
