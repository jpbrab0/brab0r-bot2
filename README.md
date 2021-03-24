# Brab0r Bot v2.0

Repositório oficial do brab0rbot

# Apresentação 🧑‍🎓

O brab0rbot 🤖 é um bot para a live do [jpbrab0](https://twitch.tv/jpbrab0)

Com intuito de ajudar o streamer e deixar o chat mais interativo.

## Tecnologias e dependencias:

O bot foi feito com as seguintes tecnologias:
  
  * NodeJs
  * JavaScript
  * Socket.Io
  * Tmi.js
  * Dotenv
  * ObsWebSocket
  * Nunjucks
  * Express

## Instalação 👷

1. Clonar o repositório do github em sua máquina local 👯

**Com https**:
```bash
git clone https://github.com/jpbrab0/brab0r-bot2.git
```

Com SSH:

```bash
git clone git@github.com:jpbrab0/brab0r-bot2.git
```

Com Github CLI:

```bash
gh repo clone jpbrab0/brab0r-bot2
```

## Rodando o projeto 🚀

Pré-requesitos:
  * [Node.Js](https://nodejs.dev/)

1. Acesse o projeto já instalado em sua máquina local:

```bash
cd brab0r-bot2
```

2. Instale as dependencias:

```bash
npm install
```

3. Crie um arquivo chamado ``.env``:

```bash
touch .env
```

4. Adicione no ``.env`` o token do seu bot:

```env
TOKEN=<token do seu bot>
```

obs: Você precisa gerar o seu token nesse [site aqui](https://twitchapps.com/tmi/)

5. Por fim, rode:

```bash
npm start
```

**Feito por João Pedro Resende**
