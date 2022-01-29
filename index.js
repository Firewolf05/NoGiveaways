const { Plugin } = require('powercord/entities');


module.exports = class scamLinkBan extends Plugin {
  async startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'nogiveaways',
      aliases: ["ng"],
      description: 'gives no giveaways role in mb',
      usage: '{c} [user id or ping]',
      executor: (args) => ({
        send: true,
        result: `-ra ${args} no giveaways`
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('nogiveaways');
  }
};
