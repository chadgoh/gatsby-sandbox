import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
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
`

const Header = () => {
  const {
    site: {
      siteMetadata: { title, person, author, data, description },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>This is our heading</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default Header
