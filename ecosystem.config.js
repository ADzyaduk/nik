module.exports = {
    apps: [
      {
        name: 'pokraska-kazan.ru',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
