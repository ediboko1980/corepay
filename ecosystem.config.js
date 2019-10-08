let processTag

try {
  const { id } = require('./config.json')
  processTag = `corepay-${id}`
} catch (error) {
  processTag = `corepay`
  process.exit(1)
}

module.exports = {
  apps: [{
    name: processTag,
    script: 'index.js',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    instances: 1,
    kill_timeout: 3600000,
    kill_retry_time: 30000,
    wait_ready: true,
    autorestart: true,
    watch: false
  }]
}