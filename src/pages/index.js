import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//data es un prop (propiedad) que contiene el resultado del query de graphql. 
//No se define porque viene por defecto
const IndexPage = ({ data }) => {
  //edges contiene un array con dos objetos "node", con la información del .md
  const {edges} = data.allMarkdownRemark;
  
  return (
    <Layout>
      <SEO title="Blog Personal" lang="es" description="Blog de prueba de hcgonro"/>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
						<div key={frontmatter.path}>
							<Link to={frontmatter.path}>{frontmatter.title}</Link>
							&nbsp;
							<small>
								{' '}
								<em>published on</em> {frontmatter.date}
							</small>
							<p>{frontmatter.excerpt}</p>
							<br />
						</div>
					);
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`;

export default IndexPage
