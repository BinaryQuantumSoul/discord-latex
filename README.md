# LaTeX Renderer
This is a [BetterDiscord](https://betterdiscord.app/) plugin using [MathJax](https://www.mathjax.org/) to natively render LaTeX math equations inside Discord.

# Usage
You need to use simple or double dollars inside a Discord inline code (this is to prevent markdown interpretation of special characters).

Examples (just copy-paste)
- Inline: `` I want to say `$\forall x\in\mathbb{N}, x\ge 0$` ! ``
- Block: `` Voilà: `$$\int_0^\infty e^{-x^2}dx=\frac{\sqrt{\pi}}{2}$$` ``

# Installation
## Remote version
Until [bundling bug](https://github.com/mathjax/MathJax/issues/3079) is fixed, you can manually download the plugin here [src/LaTeX-remote.plugin.js](src/LaTeX-remote.plugin.js).

Simply put it in BetterDiscord's plugin folder.

## Building local version
Run `npm install` and `npm run build`

Then put `dist/LaTeX.plugin.js` in BetterDiscord's plugin folder.