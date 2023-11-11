import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { webpackDevConfig } from './config';

enum Mode {
 DEVELOPMENT = 'development',
 PRODUCTION = 'production',
}

interface EnvVariable {
 mode?: Mode;
 port?: number;
}

export default ({ mode = Mode.PRODUCTION, port = 3000 }: EnvVariable) => {
 const isDev = mode === Mode.DEVELOPMENT;
 const srcPath = path.resolve(__dirname, 'src');

 return {
  mode,
  entry: path.resolve(srcPath, 'index.ts'),
  ...(isDev ? webpackDevConfig(port) : undefined),

  module: {
   rules: [
    {
     test: /\.tsx?$/,
     use: 'ts-loader',
     exclude: /node_modules/,
    },

    {
     test: /\.(css|s[ac]ss)$/i,
     use: ['style-loader', 'css-loader', 'sass-loader'],
    },
   ],
  },

  resolve: {
   extensions: ['.tsx', '.ts', '.js'],
   modules: [path.resolve(__dirname, 'node_modules')],
   alias: {
    '@/app': path.resolve(srcPath, 'app'),
    '@/shared': path.resolve(srcPath, 'shared'),
    '@/features': path.resolve(srcPath, 'features'),
    '@/entities': path.resolve(srcPath, 'entities'),
    '@/pages': path.resolve(srcPath, 'pages'),
   },
  },

  output: {
   filename: '[name].[contenthash].js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
  },

  plugins: [
   new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
   new webpack.ProgressPlugin(),
  ],
 };
};
