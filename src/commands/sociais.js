exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!sociais")) {
        client.say(target, "linktree-jpres.vercel.app/")
    }
}