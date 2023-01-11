const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const Vuerenderer = require('vue-server-renderer')

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: '<div>hello vue ssr! {{ url }}</div>'
  })

  const template = fs.readFileSync('./template.html', 'utf-8')

  const renderer = Vuerenderer.createRenderer({
    template
  })

  const context = {
    title: 'Jeffy Garden',
    meta: `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    console.log(html)
    res.end(html)
  })
})

server.listen('8080', () => {
  console.log('部署在8080')
})
