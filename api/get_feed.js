const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
	let feed = await parser.parseURL('https://www.reddit.com/.rss');
  res.json(feed.items)
}
