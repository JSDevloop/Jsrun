function ConvertToDecimal(data) {
    var shuffleSeed = require('shuffle-seed');
    var result = "";
    var splittedData = data.split("");
    splittedData = shuffleSeed.unshuffle(splittedData,"ttarqqezgen");
    var number = 0;
    for (var i in splittedData) {
        var splittedChar = splittedData[i];
        if (splittedChar == 1)
        {
            number++;
            if(i >= splittedData.length - 1)
            {
                result += number.toString();
                number = 0;
            }
        }
        else if (splittedChar == 0) {
            result += number.toString();
            number = 0;
        }
    }
    result = shuffleSeed.unshuffle(result.split(""),"ffzattrfq").join("");
    return result;
}
exports.ConvertToDecimal = ConvertToDecimal;
