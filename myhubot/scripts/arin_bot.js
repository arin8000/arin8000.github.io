module.exports = function(robot){
  robot.hear(/yomamma/i, function(msg){
    msg.send("Don't you be talkin bout my mamma!")
  })

  robot.hear(/cowboys/i, function(msg){
    msg.send("GO COWBOYS!!")
  })

  robot.hear(/(hello)/i, function(msg){
    msg.send("How are you doing?")
  })

  robot.hear(/javascript/i, function(msg){
    msg.send("I like javascript!!")
  })

  robot.hear(/what's your name?/i, function(msg){
    msg.send("My name is arin_bot")
  })

  var people_list = ['@arin8000', '@arin8000', '@arin8000'];
  robot.hear(/(say hi to all)/i, function(msg){
    for (var i=0; i < people_list.length; i++) {
      msg.send("Hello " + people_list[i])
    }
  })

  robot.respond(/What's your favorite soccer team?/, function(res) {
   return res.send("I love Barcelona!");
 });

  robot.respond(/what is your favorite (.*)/i, function(msg) {
   var fav;
   fav = msg.match[1];
   switch (fav) {
     case "sport":
       return msg.reply("I like soccer!");
       break;
     case "car":
       return msg.reply("Tesla!");
       break;
     case "programming language":
       return msg.reply("Javascript, of course!");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });

 robot.respond(/what time is it?/i, function(res) {
  var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
  return res.send("The time is => " + h + ":" + m );
});


}
