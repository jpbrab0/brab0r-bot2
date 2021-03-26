exports.default = (client, target, context, msg) => {
    if (String(msg).startsWith("!tema")) {
      client.say(target, "/me Tema da caverna para VsCode: https://github.com/acaverna/caverna-vscode-theme | Tema da caverna para Vim/Neovim: https://github.com/acaverna/caverna-vim-theme")
    }    
}
