exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!ctrlplay")) {
        client.say(target, "Conheça a Ctrl+Play! Escola de tecnologia para crianças e adolecentes! www.ctrlplay.com.br")
    }
}
