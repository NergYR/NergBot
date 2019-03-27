// Load up the discord.js library
const Discord = require("discord.js");

// This is your bot. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `bot.something`, or `bot.something`,
// this is what we're refering to. Your bot.
const bot = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

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
			.addField(sayMessage)
			.setColor(0x1FDDE3)
			.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
		message.channel.sendEmbed(embed);
  }
  

  /*if(command === "change"){
    if (message.deletable) message.delete();
    if (message.author.id != message.author.id) return
      let rotate = 0;
  setInterval(function() {
      if(rotate === 0) {
          bot.user.setActivity("tranquile tu fait r 💸", {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 1;       
      } else if(rotate === 1){
          bot.user.setActivity("checker mon selly x)", {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 2;
      } else if(rotate === 2){
          bot.user.setActivity(`Energeti_q THE BEST`, {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 3;
      }  else if(rotate === 3){
          random = Math.floor(Math.random() * 7) + 1;
          bot.user.setActivity(`le dé tourne ${random}. 🎲`, {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 4;
      } else if(rotate === 4){
          bot.user.setActivity(`https://discord.gg/uyv76uv 💸`, {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 5;
      } else if(rotate === 5){
          bot.user.setActivity(`Endorium Copiright 2019`, {type: "Streaming", url: 'https://twtch.tv/energeti_q'});
          rotate = 0;
      } }, 10 * 1000)
    }


    if(command === "raid1"){
      if (message.deletable) message.delete();
      if (message.author.id != `${message.author}`) return;
  
      if(message.channel.type === "dm") return;
      if(message.guild.channels.size === 0) return;
      if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
      message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
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
			.setColor(0x1FDDE3)
			.setFooter("Pour plus d'info Mp Mon fondateur ! BFR عизrgetiq#9348!")
		message.channel.sendEmbed(embed);


  } 

  	if (command === 'pvme') {
		message.author.createDM().then(channel =>  
      channel.send("Tu a bien fait de tester car je vais te raconter une petite histoire : https://privnote.com/VGtizhrD#nP9fxtd25")
			)

			
		};

   if(command === 'new') {
    message.guild.createChannel();
   }
  
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

bot.login(config.token);