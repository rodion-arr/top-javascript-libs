'use strict'

require('dotenv').config()
const github = require('./src/github')
const markdown = require('./src/markdown')

;(async () => {
  const { search: { repos } } = await github.getTopJsRepos(process.env.TOKEN)
  const table = markdown.generateTable(repos)
  console.log('Generated at', (new Date()).toUTCString(), '\n')
  console.log(table)
})()
