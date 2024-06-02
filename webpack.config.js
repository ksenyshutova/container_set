const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                MiniCSSExtractPlugin.loader, 
                'css-loader'
            ]
          },
        ]
},
 plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }), 
        new MiniCSSExtractPlugin()
    ]
}