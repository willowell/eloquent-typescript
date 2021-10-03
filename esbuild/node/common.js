module.exports = {
  entryPoints: [ 'app/cli.ts' ],
  bundle: true,
  platform: 'node',
  minify: true,
  sourcemap: 'external',
  outfile: 'dist/esbuild/cli.js'
}