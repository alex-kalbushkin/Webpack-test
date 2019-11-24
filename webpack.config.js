const {join} = require('path');

module.exports = {
  entry: join(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: join(__dirname, './dist')
  },
  module: {                  
    rules: [                  
      {
        test: /\.m?js$/,       
        exclude: /(node_modules|bower_components)/,   
        use: {                                
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']     
          }
        }  
      },
    ],
  }        
}
