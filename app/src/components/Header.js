import React from 'react'
import logo from '../assets/search-by-algolia-light-background-8762ce8b.svg'
import '../assets/css/header.css'

const Header = () => {
	return (
		<header className="header" role="contentinfo">
			<div className="header-title">
				<a href="/">
					<h1 className="header-title-heading">
						Searchable Awesome Public Datasets
					</h1>
				</a>
				<img src={logo} className="header-title-logo" alt="Logo" />
			</div>
		</header>
	)
}

export default Header
