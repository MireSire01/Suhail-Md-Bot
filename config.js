const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163363530";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_49_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkU4Qnk3WGRvZERHazQwRjZtY21VTDBXOUVDaFNFQWZ1YjNZeXNWV09tOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1RIMnBoLVpSeXlSYnlGRUFVZW1fd1wiLFxuICBcInBob25lSWRcIjogXCI4ZmE4NzdkNS1mYzRhLTRlMTQtOWM2Yy1mMDBjMzRhMGFjNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAwLFxuICAgICAgMjI3LFxuICAgICAgMjE3LFxuICAgICAgMTAxLFxuICAgICAgMTAwLFxuICAgICAgMTI2LFxuICAgICAgNjksXG4gICAgICAxLFxuICAgICAgMTE1LFxuICAgICAgMzAsXG4gICAgICAyOCxcbiAgICAgIDMsXG4gICAgICAxNDcsXG4gICAgICAxODAsXG4gICAgICA1MCxcbiAgICAgIDE3OSxcbiAgICAgIDE5LFxuICAgICAgMTczLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTM5LFxuICAgICAgODYsXG4gICAgICA0MyxcbiAgICAgIDE0NCxcbiAgICAgIDIwNyxcbiAgICAgIDIyOCxcbiAgICAgIDIxOCxcbiAgICAgIDE3NyxcbiAgICAgIDQ0LFxuICAgICAgNjUsXG4gICAgICA4NSxcbiAgICAgIDIzNCxcbiAgICAgIDI0NCxcbiAgICAgIDcwLFxuICAgICAgMTYzLFxuICAgICAgNDEsXG4gICAgICA5MixcbiAgICAgIDk1LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRaVDVGS0E1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzMzYzNTMwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODYxMDc0MTg1MDI2NzoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM2UrSXdGRUlydHFyZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlg3bEplZjhmRmcxamx5UkJDVTdtS2w2VlZMWHhZTEZTNXFWM3RiMkY3Qjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHBVM0RhcmtUMTdZRExBYlhpRmwxdzFwdXNhVEtDRmpJQnQ4bWN5cEtNbXpJWTBCenpQKzUvN3JKZ0VYaW5XV0ZrNEZza1B6cmRPTGN5d2tzK05yQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWU2bU16VTd4UUVrOHVzVXNNcWYxcjFYTDlxaEh2NnRWVUNVN09oNGpGQVVmOWNWU1JBNUgvdXJMOUZLdmRlejdsLzd6b3IxQVZOS1pXVlQwYzh2alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzM2MzUzMDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg3NTUzNDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
