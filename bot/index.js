const logger = require('winston');
const Discord = require('discord.io');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true });
logger.level = 'debug';

var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'overwatchteam':
				bot.sendMessage({
					to: channelID,
				message: '========================== \n**Main-tank** : Rafiki\n**Off-tank** : Dean\n**Hitscan-DPS** : st0rm\n**Flex-DPS** : SirDrTitan\n**Flex-Support** : Alvarocious\n**Main-Support** : Pandamonium\n=========================='
				});
         }
     }
});
