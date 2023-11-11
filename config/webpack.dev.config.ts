export const webpackDevConfig = (port: number) => ({
 devtool: 'inline-source-map',
 devServer: {
  port: port,
  open: true,
  hot: true,
 },
});
