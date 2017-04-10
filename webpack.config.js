module.exports = {
  entry: './src/main/js/app.jsx',
  output: {
    path: __dirname + '/src/main/webapp/public', 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
    	  test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};