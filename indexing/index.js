const http = require('https')
const restructured = require('restructured')
const lineReader = require('line-reader')
const scrapeIt = require('scrape-it')
const prettyjson = require('prettyjson')

const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

require('dotenv').config()

const appId = process.env.APPLICATION_ID
const apiKey = process.env.SEARCHONLY_APIKEY
const indexName = process.env.INDEX_NAME

const algoliasearch = require('algoliasearch')
const client = algoliasearch(appId, apiKey)
let index = client.initIndex(indexName)

const datasetsURL = 'https://github.com/awesomedata/awesome-public-datasets'

axios.get(datasetsURL).then(
	response => {
		if (response.status === 200) {
			const html = response.data
			const _ = cheerio.load(html)
			let toc = []
			let link = []

			// Get TOC
			_('#user-content-table-of-contents li').each(function(i, elem) {
				toc[i] = {
					title: _(this)
						.find('a')
						.text()
						.trim(),
					link: _(this)
						.find('a')
						.attr('href')
				}
			})

			_('li a[rel]').each(function(i, elem) {
				let category = _(this)
					.parent()
					.parent()
					.prev()
					.find('a')
					.attr('href')

				category = category !== undefined ? category.replace('#', '') : ''

				link[i] = {
					category: category,
					title: _(this).text(),
					url: _(this).attr('href')
				}
			})
			// console.log(prettyjson.render(link))

			index.addObjects(link, function(err, content) {
				console.log(content)
			})
		}
	},
	error => console.log(err)
)
