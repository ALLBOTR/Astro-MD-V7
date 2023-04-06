const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'SI' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/Nezuko/6th.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'ᴀꜱᴛʀᴏ-ᴍᴅ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ᴀꜱᴛʀᴏ-ᴍᴅ*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true': process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '💟☻️ඉන්බොක්ස් වැඩ නැ බන්☻️💟' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'HEROKU' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=c2pF1QTK#EDlQH4ck6cp-HzmdJ0jPXrzswG8BuZOkrZbk5rqptCU' : process.env.SESSION_ID
};
