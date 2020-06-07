import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          id
          siteMetadata {
            author
            data
            description
            person {
              name
              age
            }
            title
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default HeaderStatic
