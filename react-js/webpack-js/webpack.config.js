const path = require('path');

module.exports = {
    entry: './teste.js', //por onde o webpack começa
    output: {
        path: path.resolve(__dirname, 'dist'), //define pasta de saída
        filename: 'bundle.js' //define o nome do nosso bundle
    }
};