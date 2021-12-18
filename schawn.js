const discord = require("discord.js");
module.exports.operate = async ({client, msg, args, author, cfg}, Discord = require("discord.js")Database = require("../models/Ceza.js")) => {
    const db = require('quick.db')

    const { MessageActionRow,  MessageButton } = require('discord-buttons');
    let uye = msg.mentions.users.first() || client.users.cache.get(args[0]) || author;


    const moment = require("moment");



    let a = new MessageButton() ///// schâwn ❤️
    .setStyle('#660099')
    .setLabel('1')
    .setID('a')

    let b = new MessageButton() ///// schâwn ❤️
    .setStyle('#660099')
    .setLabel('2')
    .setID('b')

    let c = new MessageButton() ///// schâwn ❤️
    .setStyle('#660099')
    .setLabel('3')
    .setID('c')

    let d = new MessageButton() ///// schâwn ❤️
    .setStyle('#660099')
    .setLabel('4')
    .setID('d')

    let e = new MessageButton() ///// schâwn ❤️
    .setStyle('#660099')
    .setLabel('5')
    .setID('e')





    msg.channel.send(`
    > **Aşağıda bulunan butonları kullanarak sunucu içindeki verilerinizi görüntüleyebilirsiniz.** 

     1 | **Sunucuya ne zaman giriş yaptığınızı öğrenin.**
     2 | **Üzerinizde bulunan rollerin listesini görün.**
     3 | **Hesabınızın oluşturulma tarihini öğrenin.**
     4 | **Sunucudaki toplam mesaj sayınızı öğrenin**
     5 | **Sunucumuzun anlık ses aktifliğini görün.**
    
    `,

{
    buttons: [a,b,c,d,e]
});



      
    client.on('clickButton', async (button) => {

        
      if(button.id == "a") {

        let mention = msg.author;
        if(msg.mentions.members.first()) mention = msg.mentions.members.first().user;
        let mentionMember = msg.guild.members.cache.get(mention.id);


  button.reply.send(`**Sunucuya Katılma Tarihiniz** :  ${moment(mentionMember.joinedAt).format('D/MMMM/YYYY')}`,true)

}
      if(button.id == "b") {


        button.reply.send(`**Üzerinizde Bulunan Rollerin Listesi** ;
        
${(button.clicker.member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? button.clicker.member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(', ') : 'Hiç yok.')}`,true)
     
}

            if(button.id == "c") {


        button.reply.send(`**Hesabınızın Oluşturulma Tarihi** :  ${moment(button.clicker.member.user.createdAt).format("LLL")}`,true)


    }

            if(button.id == "d")  {


                let s =  db.get(`${msg.guild.id}${button.clicker.member.id}s`)
          let s2 = s
          button.reply.send("**Sunucumuzda toplamda attığınız mesaj sayısı** ; "+s2,true)
       

    }

                if(button.id == "e") {
                    
                    let Voice = msg.guild.members.cache.filter(s => s.voice.channel).size;

                    const ambed = new discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`> Anlık seste **${Voice}** kullanıcı bulunmaktadır.`)
                    
                    button.reply.send(ambed,true)
                    
                
    }
        

             });
        };
                                                 
    module.exports.help = {
        name: "menü",
        alias: ["menu"]
        
    }
