import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #d3d3d3;
`

const NavHeader = styled.h3`
  margin-left: 3px;
  margin-right: 3px;
`

const Navbar = () => {
  return (
    <Nav>
      <NavHeader>
        <Link style={{ display: "block", textDecoration: "none" }} to="/">
          Home |
        </Link>
      </NavHeader>
      <NavHeader>
        <Link style={{ display: "block", textDecoration: "none" }} to="/blog">
          Blog |
        </Link>
      </NavHeader>
      <NavHeader>
        <Link style={{ display: "block", textDecoration: "none" }} to="/people">
          People |
        </Link>
      </NavHeader>
      <NavHeader>
        <Link
          style={{ display: "block", textDecoration: "none" }}
          to="/examples"
        >
          Examples
        </Link>
      </NavHeader>
      |
      <NavHeader>
        <Link style={{ display: "block", textDecoration: "none" }} to="/images">
          Images
        </Link>
      </NavHeader>
    </Nav>
  )
}

export default Navbar
