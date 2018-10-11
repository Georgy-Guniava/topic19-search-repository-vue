const config = require('../../config')

const PUBLIC_PATH = process.env.NODE_ENV === 'production'
  ? config.build.assetsPublicPath
  : config.dev.assetsPublicPath;

export default PUBLIC_PATH
