import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from "../components/header"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import "../styles/blogpost.css"
import PostList from "../components/postList"

const Template = ({ data }) => {
	deckDeckGoHighlightElement();
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const author = data.markdownRemark.frontmatter.author;
	const html = data.markdownRemark.html;

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div className="post-container">
				<div className="post-title">
					<h1>{title}</h1>
					<div className="post-author-date"><Link to="/">{author}</Link><em>, {date}</em></div>
				</div>
				<div className="blog-post" dangerouslySetInnerHTML={{ __html: html }} />
				<PostList data={data}/>
			</div>
		</>
	)
}

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD [de]  MMMM [de] YYYY", locale: "es")
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
						date(formatString: "DD [de]  MMMM [de] YYYY", locale: "es")
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