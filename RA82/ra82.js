//#region Using
const { ConvertToRA82 } = require("./ConvertToRA82");
const { ConvertToDecimal } = require("./ConvertToDecimal");
const { Run } = require("./Run");
//#endregion Using

//Runs the main
Run(Main);

//Main function
function Main(program)
{
    //Content Of Selecting Menu
    var menuContent = {
        name: "Converter menu",
        //Items Here
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
        //Binary To Decimal
        var data = program.input('> ');
        program.print("Input: " + data);
        resultData = ConvertToDecimal(data);
        program.print("Output: " + resultData);
    }
    function dtb() {
        //Decimal To Binary
        var data = program.input('> ');
        program.print("Input: " + data);
        resultData = ConvertToRA82(data);
        program.print("Output: " + resultData);
    }
}
