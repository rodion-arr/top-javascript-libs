'use strict'

module.exports.generateTable = (data) => {
  // url, name, descr, stars

  let md = '| Name | URL | Description | Stars | \n'
  md += '|-|-|-|-| \n'

  for (const repo of data) {
    md += `| ${repo.repo.name} | ${repo.repo.url} | ${repo.repo.description} | ${repo.repo.stargazers.totalCount} | \n`
  }

  return md;
}