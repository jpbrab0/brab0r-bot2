exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!discord") || String(msg).startsWith("!caverna")) {
        client.say(target, "Venha para o discord da caverna!!! Comunidade show de bola para pessoas desenvolvedoras de todos os niveis!!! https://caverna.live/discord")
    }
}
