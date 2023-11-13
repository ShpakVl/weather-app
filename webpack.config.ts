import path from 'path';
import { webpackDevConfig, webpackLoadersConfig, webpackPluginsConfig, webpackResolversConfig } from './config';

enum Mode {
 DEVELOPMENT = 'development',
 PRODUCTION = 'production',
}

interface EnvVariable {
 mode?: Mode;
 port?: number;
}

export default ({ mode = Mode.DEVELOPMENT, port = 3000 }: EnvVariable) => {
 const isDev = mode === Mode.DEVELOPMENT;
 const basePath = path.resolve(__dirname);
 const srcPath = path.resolve(basePath, 'src');

 return {
  mode,
  entry: path.resolve(srcPath, 'index.ts'),

  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? webpackDevConfig(port) : undefined,

  module: {
   rules: webpackLoadersConfig(isDev),
  },

  resolve: webpackResolversConfig(srcPath, basePath),

  output: {
   filename: '[name].[contenthash].js',
   path: path.resolve(basePath, 'dist'),
   clean: true,
  },

  optimization: {
   splitChunks: {
    cacheGroups: {
     vendor: {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendor',
      chunks: 'all',
     },
    },
   },
  },

  performance: {
   hints: false,
  },

  plugins: webpackPluginsConfig(path.resolve(basePath)),
 };
};
