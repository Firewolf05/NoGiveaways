const { Plugin } = require('powercord/entities');


module.exports = class noGiveaways extends Plugin {
  async startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'nogiveaways',
      aliases: ["ng"],
      description: 'gives no giveaways role in mb',
      usage: '{c} [user id or ping]',
      executor: (args) => ({
        send: true,
        result: `-ra ${args} 808265422334984203`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('nogiveaways');
  }
};
