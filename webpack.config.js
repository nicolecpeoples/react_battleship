const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
	 entry: './src/index.js',
	 output: {
		 filename: 'bundle.js',
		 path: path.resolve(__dirname, 'public')
	 },
	 devtool: 'inline-source-map',
	 devServer: {
    contentBase: './public'
   },
	 module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
			{
      test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
      loader:"file-loader",
      query:{
        name:'[name].[ext]',
        outputPath:'images/'
        //the images will be emmited to public/assets/images/ folder
        //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
      loader: "url-loader",
      query:{
        limit:'10000',
        name:'[name].[ext]',
        outputPath:'fonts/'
        //the fonts will be emmited to public/assets/fonts/ folder
        //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
      }
    },
    {
      test: /\.css$/,
      loaders: ["style-loader","css-loader"]
		}

    ]
  }
}
