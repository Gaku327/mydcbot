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
const prefix_yunjin = ['yunjin','Yunjin','YUNJIN','允真'];
const prefixs_LALISA = ['Lalisa','LALISA','lalisa','lisa','LISA'];
const querys = ['cute','funny','smile','happy','angry'];

client.on('messageCreate', async message => {
    //console.log(message.content);
    
    if(message.author.bot) return;

    if(prefixs_IU.some(prefix1 => message.content.includes(prefix1))){
        second = new Date().getSeconds(); 
        await message.reply(await randomPhotos.getGif('iu '+querys[second % querys.length]));
    }
    if(prefix_yuri.some(prefix2 => message.content.includes(prefix2))){
        second = new Date().getSeconds();
        await message.reply(await randomPhotos.getGif('joyuri '+querys[second % querys.length]));
    }
    if(prefix_chaewon.some(prefix3 => message.content.includes(prefix3))){
        second = new Date().getSeconds();
        await message.reply(await randomPhotos.getGif('chaewon '+querys[second % querys.length]));
    }
    if(prefixs_LALISA.some(prefix4 => message.content.includes(prefix4))){
        second = new Date().getSeconds();
        await message.reply(await randomPhotos.getGif('lalisa '+querys[second % querys.length]));
    }
    if(prefix_yunjin.some(prefix5 => message.content.includes(prefix5))){
        second = new Date().getSeconds();
        await message.reply(await randomPhotos.getGif('yunjin '+querys[second % querys.length]));
    }
    return;
});

client.login(process.env.TOKEN);