const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatears.githubusercontent.com/u/1O625114D?v=4",
ALIVE_WSG: process.env.ALIVE_WSG || "Hellow, I an Youname alive now",
};
