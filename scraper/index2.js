// External dependencies
const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')

const url = 'https://twitchemotes.com/'

console.log(chalk.yellow.bgBlue(`\n  Scraping of ${chalk.underline.bold(url)} initiated...\n`))

const getWebsiteContent = async (url) => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    // New Lists
    $('body > div.container > div:nth-child(9)').map((i, el) => {
      const question = $(el).find('.row > .col-md-2 > center').text();
      console.log(question);
    })
} catch (error) {
    console.error(error)
  }

};

getWebsiteContent(url)
