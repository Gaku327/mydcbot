const { Client,IntentsBitField, EmbedBuilder,GatewayIntentBits,ActivityType} = require('discord.js');
require('dotenv').config();
const randomPhotos = require('./randomPhoto');
const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

const prefixs_IU = ['IU', 'iu', 'Iu', 'iU','Jieun','jieun','JiEun','JIEUN','知恩','老婆'];
const prefix_yuri = ['yuri','YURI','Yuri','柔理','joyuri','Joyuri','JOYURI'];
const prefix_chaewon = ['chaewon','Chaewon','CHAEWON','采源','金小豹'];
const prefixs_LALISA = ['Lalisa','LALISA','lalisa','lisa','LISA'];

client.on('messageCreate', async message => {
    //console.log(message.content);
    if(message.author.bot) return;

    if(prefixs_IU.some(prefix => message.content.includes(prefix))){ 
        await message.reply(await randomPhotos.getGif('iu cute funny'));
        return;
    }
    if(prefix_yuri.some(prefix => message.content.includes(prefix))){
        await message.reply(await randomPhotos.getGif('joyuri cute funny'));
        return;
    }
    if(prefix_chaewon.some(prefix => message.content.includes(prefix))){
        await message.reply(await randomPhotos.getGif('chaewon cute funny'));
        return;
    }
    if(prefixs_LALISA.some(prefix => message.content.includes(prefix))){
        await message.reply(await randomPhotos.getGif('lalisa cute funny'));
        return;
    }
});

client.login(process.env.TOKEN);