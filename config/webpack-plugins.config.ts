import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const webpackPluginsConfig = (basePath: string) => {
 return [
  new HtmlWebpackPlugin({ template: path.resolve(basePath, 'public', 'index.html') }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
   filename: 'css/[name].[contenthash:8].css',
   chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.HotModuleReplacementPlugin(),
  //new BundleAnalyzerPlugin(),
 ];
};
