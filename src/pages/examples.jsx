import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
const example = props => {
  console.log(props)
  return (
    <Layout>
      <p>Examples Page</p>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export const query = graphql`
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

export default example
