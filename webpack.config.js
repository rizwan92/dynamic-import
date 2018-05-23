module.exports = {
  entry : './src/index.js',
  output : {
    path : __dirname + '/public',
    filename: 'bundle.js',
    publicPath : __dirname + '/public',
  },
  module:{
    rules: [
      { test: /\.js$/, use: 'babel-loader',exclude: [/node_modules/]},
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'file-loader',
            options:{
              name:'[name].[ext]'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
    ]
  },
};
