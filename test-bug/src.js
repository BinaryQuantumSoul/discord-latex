import MathJax from 'mathjax';

module.exports = class Plugin {
    start() {
        console.log('Start');
        MathJax.typeset();
    }
}