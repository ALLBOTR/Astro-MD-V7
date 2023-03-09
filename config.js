const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'SI' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://www.linkpicture.com/q/aniyuki-cute-anime-avatar-profile-picture-10-768x768.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'ᴀꜱᴛʀᴏ-ᴍᴅ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ᴀꜱᴛʀᴏ-ᴍᴅ*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true': process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '💟☻️ඉන්බොක්ස් වැඩ නැ බන්☻️💟' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? '*HEROKU*' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=djBETSDa#NZJ9aiLKRiE-ISGkJdjNKTvi4IRIbO1EDOkGhTOmYOQ' : process.env.SESSION_ID
};
