'use strict'

const fs = require('fs')
const path = require('path')
const { graphql } = require('@octokit/graphql')

module.exports.getTopJsRepos = async (gitHubToken) => {
  const query = fs.readFileSync(path.join(__dirname, 'top-js-repos.graphql')).toString()

  return await graphql(
    query,
    {
      headers: {
        authorization: `token ${gitHubToken}`
      }
    }
  )
}
