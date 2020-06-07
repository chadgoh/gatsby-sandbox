import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import styled from "styled-components"

const ComponentName = ({
  data: {
    person: {
      name,
      contact: { phone_number, email },
      media: [{ fixed }],
      info: { info },
    },
  },
}) => {
  console.log("fixed", fixed)
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Link to="/people">Back to People</Link>
        <h1>Name: {name} </h1>
        <Image fixed={fixed} />
        <p>Phone Number: {phone_number}</p>
        <p>Email: {email}</p>
        <p
          style={{
            margin: "0 auto 0 auto",
            maxWidth: "60vw",
            textAlign: "left",
          }}
        >
          {info}
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePerson($slug: String) {
    person: contentfulPeople(slug: { eq: $slug }) {
      info {
        info
      }
      media {
        fixed(width: 200) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
      name
      contact {
        email
        phone_number
      }
    }
  }
`

export default ComponentName
