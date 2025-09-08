const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═════🔥══🔥══🔥═════╗
   *🤖 ${settings.botName || 'DORAEMON-MD'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'Mr-Doraemon219'}
   Owner Number: 923188652219
   Developer: DORAEMON MD TEAM
╚═══════════════════╝

*DORAEMON-MD COMMANDS LIST:*

╔═══════════════════╗
🌐 *GENERAL COMMANDS*:
║ ➤ .help or .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather <city>
║ ➤ .news
║ ➤ .attp <text>
║ ➤ .lyrics <song_title>
║ ➤ .8ball <question>
║ ➤ .groupinfo
║ ➤ .staff or .admins 
║ ➤ .vv
║ ➤ .trt <text> <lang>
║ ➤ .ss <link>
║ ➤ .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *ADMIN COMMANDS*:
║ ➤ .ban @user
║ ➤ .promote @user
║ ➤ .demote @user
║ ➤ .mute <minutes>
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick @user
║ ➤ .warnings @user
║ ➤ .warn @user
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag <message>
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
║ ➤ .antitag <on/off>
║ ➤ .welcome <on/off>
║ ➤ .goodbye <on/off>
╚═══════════════════╝

╔═══════════════════╗
🔒 *OWNER COMMANDS*:
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
║ ➤ .antidelete
║ ➤ .cleartmp
║ ➤ .update
║ ➤ .setpp <reply to image>
║ ➤ .autoreact
║ ➤ .autotyping <on/off>
║ ➤ .autoread <on/off>
╚═══════════════════╝

╔═══════════════════╗
🎨 *IMAGE/STICKER COMMANDS*:
║ ➤ .blur <image>
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .removebg
║ ➤ .remini
║ ➤ .crop <reply to image>
║ ➤ .tgsticker <Link>
║ ➤ .meme
║ ➤ .take <packname> 
║ ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🖼️ *PIES COMMANDS*:
║ ➤ .pies <country>
║ ➤ .china 
║ ➤ .indonesia 
║ ➤ .japan 
║ ➤ .korea 
║ ➤ .hijab
╚═══════════════════╝

╔═══════════════════╗
🎮 *GAME COMMANDS*:
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI COMMANDS*:
║ ➤ .gpt <question>
║ ➤ .gemini <question>
║ ➤ .imagine <prompt>
║ ➤ .flux <prompt>
╚═══════════════════╝

╔═══════════════════╗
🎯 *FUN COMMANDS*:
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt 
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *TEXTMAKER*:
║ ➤ .metallic <text>
║ ➤ .ice <text>
║ ➤ .snow <text>
║ ➤ .impressive <text>
║ ➤ .matrix <text>
║ ➤ .light <text>
║ ➤ .neon <text>
║ ➤ .devil <text>
║ ➤ .purple <text>
║ ➤ .thunder <text>
║ ➤ .leaves <text>
║ ➤ .1917 <text>
║ ➤ .arena <text>
║ ➤ .hacker <text>
║ ➤ .sand <text>
║ ➤ .blackpink <text>
║ ➤ .glitch <text>
║ ➤ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *DOWNLOADER*:
║ ➤ .play <song_name>
║ ➤ .song <song_name>
║ ➤ .instagram <link>
║ ➤ .facebook <link>
║ ➤ .tiktok <link>
║ ➤ .video <song name>
║ ➤ .ytmp4 <Link>
╚═══════════════════╝

╔═══════════════════╗
🧩 *MISC*:
║ ➤ .heart
║ ➤ .horny
║ ➤ .circle
║ ➤ .lgbt
║ ➤ .lolice
║ ➤ .its-so-stupid
║ ➤ .namecard 
║ ➤ .oogway
║ ➤ .tweet
║ ➤ .ytcomment 
║ ➤ .comrade 
║ ➤ .gay 
║ ➤ .glass 
║ ➤ .jail 
║ ➤ .passed 
║ ➤ .triggered
╚═══════════════════╝

╔═══════════════════╗
🖼️ *ANIME*:
║ ➤ .neko
║ ➤ .waifu
║ ➤ .loli
║ ➤ .nom 
║ ➤ .poke 
║ ➤ .cry 
║ ➤ .kiss 
║ ➤ .pat 
║ ➤ .hug 
║ ➤ .wink 
║ ➤ .facepalm 
╚═══════════════════╝

╔═══════════════════╗
💻 *GITHUB COMMANDS:*
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029Vb6IIZI5vKA4u6OoF60z@newsletter',
                        newsletterName: 'DORAEMON-MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029Vb6IIZI5vKA4u6OoF60z@newsletter',
                        newsletterName: 'DORAEMON-MD by Mr-Doraemon219',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
