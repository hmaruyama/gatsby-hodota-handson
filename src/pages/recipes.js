import React from 'react'
import { graphql, Link } from 'gatsby'

const RecipePage = ({data}) => {
    return (
            data.allNodeRecipe.edges.map((edge) =>
            <div key={edge.node.id}>
                <div className='teaser wrapper'>
                    <h2><Link to={'/recipe/' + edge.node.id}>{edge.node.title}</Link></h2>
                    <div className='info'>
                    <Link to={'/recipe/' + edge.node.id}>
                        <img className='banner image' src={edge.node.relationships.field_banner.localFile.url} />
                    </Link>
                        <div className='summary' dangerouslySetInnerHTML={{ __html: edge.node.field_summary.processed}} />
                    </div>
                    <div className='author'>{ edge.node.relationships.uid.display_name}</div>
                </div>
            </div>
            )
        )


}
export const query = graphql`
query RecipePage {
    allNodeRecipe {
      edges {
        node {
          title
          relationships {
            field_banner {
              localFile {
                url
              }
            }
            uid {
              display_name
            }
          }
          field_summary {
            processed
          }
          id
        }
      }
    }
  }
   `
export default RecipePage