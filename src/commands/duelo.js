let participants = []
exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!duelo")) {
      if(participants.length <= 2){
        participants.push(context.username)
      }
    }

    if(participants.length >= 2){
      let winner = Math.floor(Math.random() * (1000 - 100) + 100)

      if(winner >= 1000 && winner <= 500) {
        client.say(target, `${participants[0]} ganhou o duelo!`)
        participants = []
      }

      if(winner >= 100 && winner <= 499){
        client.say(target, `${participants[1]} ganhou o duelo!`)
        participants = []
      }
    }
}
