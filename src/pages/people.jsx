import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const ProfileContainer = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 60vw;
  margin: 0 auto 10rem auto;
`

const ProfileSection = styled.section`
  margin-left: 2rem;
  color: grey;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Profile = styled.div`
  margin: 2rem;
`

const people = ({ data }) => {
  const {
    allContentfulPeople: { nodes: people },
  } = data

  return (
    <Layout>
      <ProfileContainer>
        <ProfileSection>
          {people.map(person => {
            console.log(person.media[0])
            return (
              <Profile key={person.name}>
                <Image fluid={person.media[0].fluid} />
                <h2>{person.name}</h2>
                <Link to={`/people/${person.slug}`}> More Information</Link>
              </Profile>
            )
          })}
        </ProfileSection>
      </ProfileContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPeople {
      nodes {
        slug
        name
        media {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default people
