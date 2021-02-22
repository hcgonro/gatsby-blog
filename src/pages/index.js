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
      <SEO title="El developer ocupado" lang="es" description="Blog de desarrollo de software"/>
      <div>
        {edges.map(edge => {
			const { frontmatter } = edge.node
			return (
				<div key={frontmatter.path}>
					<Link to={frontmatter.path}>{frontmatter.title}</Link>
					<br />
					<small>
						{' '}
						<em>publicado el </em> <strong>{frontmatter.date}</strong>
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
						date(formatString: "DD [de]  MMMM [de] YYYY", locale: "es")
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
