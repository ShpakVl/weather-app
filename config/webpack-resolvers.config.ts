import path from 'path';

export const webpackResolversConfig = (srcPath: string, basePath: string) => ({
 extensions: ['.tsx', '.ts', '.js'],
 modules: [path.resolve(basePath, 'node_modules')],
 alias: {
  '@/app': path.resolve(srcPath, 'app'),
  '@/shared': path.resolve(srcPath, 'shared'),
  '@/features': path.resolve(srcPath, 'features'),
  '@/entities': path.resolve(srcPath, 'entities'),
  '@/pages': path.resolve(srcPath, 'pages'),
 },
});
