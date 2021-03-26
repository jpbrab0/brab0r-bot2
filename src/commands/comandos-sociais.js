exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!github")) {
      client.say(target, "https://github.com/jpbrab0")
    }    
    if(String(msg).startsWith("!linkedin")) {
      client.say(target, "https://linkedin.com/in/jpresdev")
    }
    if(String(msg).startsWith("!twitter")){
      client.say(target, "https://twitter.com/jpbrab0")
    }
}
