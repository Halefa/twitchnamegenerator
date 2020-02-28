// index.js

const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

let twitchEmotes;

axios.get('https://twitchemotes.com/').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)

  // The pre.highlight.shell CSS selector matches all `pre` elements
  // that have both the `highlight` and `shell` class
  const urlElems = $('div.container')
  console.log(urlElems);

  // We now loop through all the elements found



//   for (let i = 0; i < urlElems.length; i++) {
//     const emoteName = $(urlElems[i]).find('strong')[0]

//     if (emoteName) {
//         const emote = $(emoteName).text();
//         console.log(emote);
    //   twitchEmotes.push ($(emoteName).text());
    }
    
    
    // Converts each single object to a string and adds it to a long string with all employees
    // let employee = employees.getFormattedString();
    // employeeList = employeeList + employee;
   }
//   fs.writeFile('kontaktliste.vcf', employeeList, function (err) {
//     if (err) return console.log(err);
// console.log(twitchEmotes);
  })
