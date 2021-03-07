import React from 'react';

import { graphql, Link } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Header from "../components/header"
import PostFooter from "../components/postFooter"
import Footer from "../components/footer"

import "../styles/blogpost.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Template = ({ data, pageContext }) => {
	deckDeckGoHighlightElement();
	const title = data.markdownRemark.frontmatter.title
	const date = data.markdownRemark.frontmatter.date
	const author = data.markdownRemark.frontmatter.author
	const html = data.markdownRemark.html
	const excerpt = data.markdownRemark.excerpt
	const image = data.markdownRemark.image

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@hectorCodes" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={excerpt}/>
			<meta name="twitter:image" content={image} />
			<div className="post-container">
				<div className="post-title">
					<h1>{title}</h1>
					<div className="post-author-date"><FontAwesomeIcon icon={faUser} />&nbsp;<Link to="/">{author}</Link>
					&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendarAlt} />&nbsp;{date}</div>
				</div>
				<div className="blog-post" dangerouslySetInnerHTML={{ __html: html }} />
				<PostFooter pageContext={pageContext}/>
			</div>
			<Footer />
		</>
	)
}

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD-MM-YYYY")
				author
				path
				tags
				excerpt
			}
		}
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD-MM-YYYY")
						author
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`

export default Template;