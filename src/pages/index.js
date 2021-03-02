import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="El developer ocupado" lang="es" description="Blog de desarrollo de software"/>
      <PostList data={data} />
    </Layout>
  )
}

export const query = graphql`
	query HomePageQuery {
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
						image
					}
				}
			}
		}
	}
`

export default IndexPage
