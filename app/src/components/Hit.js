import React from 'react'
import { Highlight } from 'react-instantsearch-dom'
import '../assets/css/hits.css'

const Product = ({ hit }) => {
	return (
		<a href={hit.url}>
			<Highlight attribute="name" hit={hit} />
			<h2 className="hit-title">{hit.title}</h2>
			<span className="hit-url">{hit.url}</span>
		</a>
	)
}

export default Product
