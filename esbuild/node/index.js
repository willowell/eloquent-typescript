const esbuild = require('esbuild')

const commonOptions = require('./common')

console.time('Build')

esbuild.build(
  commonOptions
).then(() => {
  console.log('Build finished successfully.')
  console.timeEnd('Build')
}).catch((err) => {
  console.error(`A build error has occurred: ${err}`)
  process.exit(1)
})
