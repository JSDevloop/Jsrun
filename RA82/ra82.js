const { ConvertToRA82 } = require("./ConvertToRA82");
const { ConvertToDecimal } = require("./ConvertToDecimal");
const { Run } = require("./Run");

Run(Main);

function Main(program)
{
    var menuContent = {
        name: "Converter menu",
        items: [
            {
                description: "Binary to Decimal",
                invoke: btd
            },
            {
                description: "Decimal To Binary",
                invoke: dtb
            }
        ]
    };
    //Starts
    program.showMenu(menuContent);
    function btd() {
        var data = program.input('> ');
        program.print("Input: " + data);
        resultData = ConvertToDecimal(data);
        program.print("Output: " + resultData);
    }
    function dtb() {
        var data = program.input('> ');
        program.print("Input: " + data);
        resultData = ConvertToRA82(data);
        program.print("Output: " + resultData);
    }
}
