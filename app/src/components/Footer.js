import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<p>
				By <a href="https://urre.me">Urban Sandén.</a> Code on{' '}
				<a href="http://github.com/urre">Github</a>
			</p>
			<a
				className="footer-badge"
				href="https://github.com/awesomedata/awesome-public-datasets"
			>
				<img src="https://awesome.re/badge-flat.svg" alt="Awesome" />
			</a>
		</footer>
	)
}

export default Footer
