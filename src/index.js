require("dotenv").config();

// - Configurando express e socket.io
const express = require("express")
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const nunjucks = require("nunjucks")

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set("view engine", 'njk');

nunjucks.configure("./src/views", {
    express: app,
    autoescape:false,
    noCache:true,
})

app.get("/", (req, res) => {
  return res.render("index")
})


app.get("/subs", (req, res) => {
  io.on('connection', (socket) => {
    socket.on('amanda_sub', (arg) => {
      if(arg === true){
        fs.readFile(__dirname + "/" + "total_subs.txt", 'utf-8',function(err, data) {
          if (err) throw err;
          io.on("connection", (socket) => {
            socket.emit("total_subs", data)
          })
        })
      }
    });
  });
  
  
  return res.render("subs")
})
io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// - Configurando OBSWebSocket

const OBSWebSocket = require("obs-websocket-js")

const obs = new OBSWebSocket();
obs.connect({ address: 'localhost:4444' })
const tmi = require("tmi.js");
const fs = require("fs");

const opts = {
  identity: {
    username: "brab0bot",
    password: process.env.TOKEN,
  },
  channels: ["jpbrab0"],
};

const client = new tmi.client(opts);

fs.readdirSync(`${__dirname}/commands`)
  .filter((file) => file.slice(-3) === ".js")
  .forEach((file) => {
    client.on("message", (target, context, message, isBot) => {
      if (isBot) return;
      require(`./commands/${file}`).default(client, target, context, message);
    });
  });

client.on("connected", () => {
  console.log("Bot está funfando!");
});

// - Eventos do chat.


client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
  fs.readFile(__dirname + "/total_subs.txt", "utf8", (err, data) => {
    if(err) throw err

    subData = parseInt(data)

    subTotal = subData + 1

    fs.writeFile(__dirname + "/total_subs.txt", String(subTotal), (err, result) => {
      if(err) throw err
      
      return "Deu certo, é nois"
    })
  })
 
  io.on("connection", (socket) => {
    socket.emit("subgift", username)
  })

  client.say(channel, `Valeu pelo seu subgift ${username}!`)

  obs.send('SetCurrentScene', {
    'scene-name': "Cena 2"
  });

  setTimeout(() => {
    obs.send('SetCurrentScene', {
      'scene-name': "Tela"
    })
  },5000)
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
  fs.readFile(__dirname + "/total_subs.txt", "utf8", (err, data) => {
    if(err) throw err

    subData = parseInt(data)

    subTotal = subData + 1

    fs.writeFile(__dirname + "/total_subs.txt", String(subTotal), (err, result) => {
      if(err) throw err
      
      return "Deu certo, é nois"
    })
  })

 io.on('connection', (socket) => {
    socket.emit("resub", username, months)
  });

  client.say(channel, `Valeu pelo seu resub ${username}!`)

  obs.send('SetCurrentScene', {
    'scene-name': "Cena 2"
  });

  setTimeout(() => {
    obs.send('SetCurrentScene', {
      'scene-name': "Tela"
    })
  },5000)
});

client.on("subscription", (channel, username, months, message, userstate, methods) => {
  fs.readFile(__dirname + "/total_subs.txt", "utf8", (err, data) => {
    if(err) throw err

    subData = parseInt(data)

    subTotal = subData + 1

    fs.writeFile(__dirname + "/total_subs.txt", String(subTotal), (err, result) => {
      if(err) throw err
      
      return "Deu certo, é nois"
    })
  })

 io.on('connection', (socket) => {
    socket.emit("resub", username, months)
  });

  client.say(channel, `Valeu pelo seu sub ${username}!`)

  obs.send('SetCurrentScene', {
    'scene-name': "Cena 2"
  });

  setTimeout(() => {
    obs.send('SetCurrentScene', {
      'scene-name': "Tela"
    })
  },5000)
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
  fs.readFile(__dirname + "/total_subs.txt", "utf8", (err, data) => {
    if(err) throw err

    subData = parseInt(data)

    subTotal = subData + 1

    fs.writeFile(__dirname + "/total_subs.txt", String(subTotal), (err, result) => {
      if(err) throw err
      
      return "Deu certo, é nois"
    })
  })

 io.on('connection', (socket) => {
    socket.emit("resub", username, months)
  });

  client.say(channel, `Valeu pelo seu resub ${username}!`)

  obs.send('SetCurrentScene', {
    'scene-name': "Cena 2"
  });

  setTimeout(() => {
    obs.send('SetCurrentScene', {
      'scene-name': "Tela"
    })
  },5000)
});


client.connect();
