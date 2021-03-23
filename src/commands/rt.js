const fs = require("fs")
exports.default = (client, target, context, msg) => {
  if (String(msg).startsWith("!rt")) {
      fs.readFile(__dirname + "/rt_link.txt", `utf8`, (err, result) => {
        if(err) throw err  
        
        client.say(target, `${result}`)
      })
  }

  if(String(msg).startsWith("!addrt") && context.username == "jpbrab0") {
    let rtLink = String(msg).split("!addrt")[1]
    fs.writeFile(__dirname + "/rt_link.txt", rtLink, (err, result) => {
      if(err) throw err

      client.say(target, "O link do rt foi adicionado com sucesso.")
    })
  }
}
