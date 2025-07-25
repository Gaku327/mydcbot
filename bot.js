const { Client,IntentsBitField, EmbedBuilder,GatewayIntentBits,ActivityType} = require('discord.js');
require('dotenv').config();

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

const prefixs_IU = ['IU ', 'iu ', 'Iu ', 'iU ','Jieun ','jieun ','JiEun ','JIEUN '];
const prefixs_LALISA = ['Lalisa ','LALISA ','lalisa ','lisa ','LISA '];

client.on('messageCreate', async message => {
    //console.log(message.content);
    if(message.author.bot) return;

    if (prefixs_IU.some(prefix => message.content.startsWith(prefix + "do"))) {

        // 取得自訂狀態的內容（移除前綴）
        const statusMessage = message.content.slice(prefixs_IU[0].length + 2).trim();

        // 設定自訂狀態
        client.user.setPresence({
            status: 'online', // 設定狀態為 online
            activities: [
                {
                    name: statusMessage, // 設定活動名稱
                    type: ActivityType.Listening // 活動類型
                }
            ]
        });
        return;
    } 

    if(prefixs_IU.some(prefix => message.content.startsWith(prefix))){ 
        const embed = new EmbedBuilder()
            .setTitle('你是不是想我了?')
            .setImage('https://media1.tenor.com/m/x3FSBkupfD8AAAAd/iu-beautiful.gif')
        await message.reply({embeds: [embed]});
        return;
    }

    if(prefixs_LALISA.some(prefix => message.content.startsWith(prefix))){
        const embed = new EmbedBuilder()
            .setTitle('我也很想你Muah')
            .setImage('https://media1.tenor.com/m/bSDqtL945XUAAAAC/blackpink-lisa-lisa-blackpink.gif')
        await message.reply({embeds: [embed]});
        return;
    }
});

client.login(process.env.TOKEN);