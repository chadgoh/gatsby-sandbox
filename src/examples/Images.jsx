import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import imgTest from "../images/image3.jpg"
import Image from "gatsby-image"
import styled from "styled-components"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    efluid: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const ImageSection = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const ImageArticle = styled.article`
  border: 3px solid black;
  padding: 1rem 0;
`

const Images = () => {
  const imageData = useStaticQuery(getImages)
  console.log(imageData)
  return (
    <ImageSection>
      <ImageArticle>
        <h3>basic image</h3>
        <img src={imgTest} width="100%" />
      </ImageArticle>
      <ImageArticle>
        <h3>fixed image</h3>
        <Image fixed={imageData.fixed.childImageSharp.fixed} />
      </ImageArticle>
      <ImageArticle>
        <h3>fluid image</h3>
        <Image fluid={imageData.fluid.childImageSharp.fluid} />
      </ImageArticle>
      <ImageArticle>
        <h3>efluid image</h3>
        <Image fluid={imageData.efluid.childImageSharp.fluid} />
      </ImageArticle>
    </ImageSection>
  )
}

export default Images
