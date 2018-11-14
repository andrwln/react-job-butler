var request = require('request');
var cheerio = require('cheerio');

var scrapers = {};
// scrapers['linkedin'] = require('./scrapers/linkedin.scraper');
// scrapers['stackoverflow'] = require('./scrapers/stackoverflow.scraper');
// scrapers['angel'] = require('./scrapers/angel.scraper');
// scrapers['indeed'] = require('./scrapers/indeed.scraper');
// scrapers['dice'] = require('./scrapers/dice.scraper');
// scrapers['theresumator'] = require('./scrapers/theresumator.scraper');
// scrapers['greenhouse'] = require('./scrapers/greenhouse.scraper');

// Crawl Link that is submitted
exports.scrape = function(req, res) {
  console.log('in joblink scrape with body: ', req.body.url_path);
  res.send('END call');
  // var url = req.body.url;
  // var scraperToUse;

  // if (url.indexOf("linkedin") > -1) {
  //     scraperToUse = 'linkedin';
  // } else if (url.indexOf("stackoverflow") > -1) {
  //     scraperToUse = 'stackoverflow';
  // } else if (url.indexOf("angel.co") > -1) {
  //     scraperToUse = 'angel';
  // } else if (url.indexOf("indeed") > -1) {
  //     scraperToUse = 'indeed';
  // } else if (url.indexOf("dice") > -1) {
  //     scraperToUse = 'dice';
  // } else if (url.indexOf("theresumator") > -1) {
  //     scraperToUse = 'theresumator';
  // } else if (url.indexOf("boards.greenhouse") > -1) {
  //     scraperToUse = 'greenhouse';
  // } else {
  //     return res.send({ companyName: "", positionTitle: "", jobDetails: "" });
  // }

  // scrapers[scraperToUse].scrape(url, function (data) {
  //     // console.log('data from scraper: ', data);
  //     res.json(data);
  // });
};
