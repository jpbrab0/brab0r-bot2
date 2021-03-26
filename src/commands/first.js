exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("first") || String(msg).startsWith(("!first"))) {
          client.say(target, `@${context.username}, valeu por chegar cedo :D`)
    }
}
