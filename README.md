<h1 align="center" style="border-bottom: none !important; margin-bottom: 5px !important;">Smogon Usage Statistics Viewer</h1>

## Pre-installation
* This depends on: [<a href="https://git-scm.com/download/win">latest Git</a>] [<a href="https://nodejs.org/en/">latest Node.js</a>]

## Installation
* Clone this repository with:<br/>
`git clone https://github.com/maxsaystransrights/tokeimon.git && cd tokeimon`
* Install dependencies with: `npm install`.
* Load a `.json` file, scraped with [usage scraper](https://github.com/maxsaystransrights/usage-scraper) into `./src/data` and re-name it to `usage-data.json`.
    * For your convenience, there is a "demo" file loaded in that directory with Generation 7 OU usage statistics loaded.
* Run: `npm start` and head to `localhost:3000`!

Alternatively: 
* Load a `.json` file, scraped with [usage scraper](https://github.com/maxsaystransrights/usage-scraper) into `./src/data` and re-name it to `usage-data.json`.
* Run: `npm run build` and serve the `./build` directory with your HTTP server of choice.
    * With this method, you will not be able to load a new `.json` file until you re-build.