import React, { Component } from 'react'

import {
	InstantSearch,
	Hits,
	SearchBox,
	RefinementList,
	Pagination,
	CurrentRefinements,
	ClearRefinements
} from 'react-instantsearch-dom'

import 'instantsearch.css/themes/algolia.css'
import './assets/css/base.css'
import './assets/css/searchbox.css'
import './assets/css/pagination.css'
import './assets/css/refinements.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'

const appId = process.env.REACT_APP_APPLICATION_ID
const apiKey = process.env.REACT_APP_SEARCHONLY_APIKEY
const indexName = process.env.REACT_APP_INDEX_NAME

function Search() {
	return (
		<div className="container">
			<Header />
			<CurrentRefinements />
			<ClearRefinements />
			<SearchBox />
			<RefinementList attribute="category" />
			<Pagination />
			<Hits hitComponent={Product} />
			<Pagination />
			<Footer />
		</div>
	)
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
					<Search />
				</InstantSearch>
			</div>
		)
	}
}

export default App
