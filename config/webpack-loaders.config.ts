import MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const webpackLoadersConfig = (isDev: boolean) => {
 const tsLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
 };

 const cssLoader = {
  test: /\.(css|s[ac]ss)$/i,
  use: [
   isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
   {
    loader: 'css-loader',
    options: {
     modules: {
      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
      localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
     },
    },
   },
   'sass-loader',
  ],
 };

 return [tsLoader, cssLoader];
};
