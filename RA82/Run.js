function Run(Main) {
    const prompt = require('prompt-sync')();
    const chalk = require('chalk');
    var menu = require('node-menu');
    menu.disableDefaultHeader();
    var endCode = setInterval(() => { }, 1000);
    var program = {
        end: function () {
            clearInterval(endCode);
        },
        print: function (text) {
            console.log(chalk.yellow.bold(text));
        },
        input: function (question) {
            return prompt(chalk.grey(question));
        },
        restart: function () {
            Main(program);
        },
        showMenu: function (content) {
            for(var c in content)
            {
                switch (c) {
                    case "name":
                        menu.addDelimiter('-', 40, content[c]);
                        break;
                    case "items":
                        for(var item of content[c])
                        {
                            menu.addItem(
                                item.description,
                                item.invoke)
                        }
                        break;
                    default:
                        break;
                }
            }
            menu.start();
        }
    };
    Main(program);
}
exports.Run = Run;
