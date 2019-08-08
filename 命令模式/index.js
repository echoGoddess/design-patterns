// 首先创建好各种command
var closeDoorCommand = {
  execute: function () {
    console.log('关门');
  }
};

var openPcCommand = {
  execute: function () {
    console.log('开电脑');
  }
};
var openQQCommand = {
  execute: function () {
    console.log('登录 QQ');
  }
};

var MacroCommand = function () {
  return {
    commandsList: [],
    add: function (command) { // 添加命令
      this.commandsList.push(command);
    },
    execute: function () { // 执行命令
      for (var i = 0, command; command = this.commandsList[i++];) {
        command.execute();
      }
    }
  }
};

var macroCommand = MacroCommand();
macroCommand.add(closeDoorCommand);
macroCommand.add(openPcCommand);
macroCommand.add(openQQCommand);

macroCommand.execute();