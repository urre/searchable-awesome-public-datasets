
# Searchable Awesome Public Datasets

Blazing fast search a list of a topic-centric public data sources in high quality.

## What?
A website making [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) searchable. Find high-quality open datasets in public domains quick and easy.

<a href="https://awesome.re">
  <img src="https://awesome.re/badge.svg" alt="Awesome">
</a>

## Tools used
+ React using [Create React App](https://github.com/facebook/create-react-app)
+ [Algolia](https://www.algolia.com/) - unique search and discovery experience with instant search, facets etc.
+ Indexer/scraper using [Axois](https://github.com/axios/axios), [Cheerio](https://cheerio.js.org/) to crawl the links and create an index
+ Hosted on [Zeit Now](https://zeit.co/now)

# Run

Copy `.env-example` to `.env` in the root folder. Add your Algolia keys:

```
SEARCHONLY_APIKEY=
ADMIN_APIKEY=
APPLICATION_ID=
INDEX_NAME=
```

```
cd app

yarn install

yarn start
```

Open [http://localhost:3000/](http://localhost:3000/) on your local machine, or [http://10.0.1.5:3000/](http://10.0.1.5:3000/) on your network

## Indexing

```
cd indexing

yarn install

yarn start
```

## Deploy the app

The app deploys to Zeit [Now](https://zeit.co/now)

  cd app

1. Ad your ENV variables in the .env file.
2. Secure  env variables using [secrets](https://zeit.co/docs/features/env-and-secrets)

  now secret add REACT_APP_SEARCHONLY_APIKEY XXXXXXXX

In `now.json` this corresponds to:

```
"env": {
  "REACT_APP_SEARCHONLY_APIKEY": "@react_app_searchonly_apikey",
  ...
}
```

Repeat for the other keys.

3. Deploy

```
npm run deploy
```

To build and deploy:

```
npm run release
```
