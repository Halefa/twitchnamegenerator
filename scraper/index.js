// External dependencies
const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')
const fs = require('fs')

const url = 'https://twitchemotes.com/'
const outputFile = 'Twitch-emotes.js'
let TwitchEmotes = [];

console.log(chalk.yellow.bgBlue(`\n  Scraping of ${chalk.underline.bold(url)} initiated...\n`))

const getWebsiteContent = async (url) => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    // New Lists
    $('body > div.container > div:nth-child(9) > .card-body > .row > .col-md-2').map((i, el) => {
      let emote = $(el).find('center').text();
      console.log(emote);
      TwitchEmotes.push("'" + emote + "'");
      console.log(TwitchEmotes);
      exportResults(TwitchEmotes)
    })
} catch (error) {
    console.error(error)
  }

};

const exportResults = (TwitchEmotes) => {
    // write to a new file named 2pac.txt
    fs.writeFile(outputFile, TwitchEmotes, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
    
      // success case, the file was saved
      console.log('Emotes saved!');
    });
    }

getWebsiteContent(url)
