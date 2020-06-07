import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/ExampleButton"

export default function Home() {
  const handleClick = () => {
    window.alert("fak ni")
  }
  return (
    <Layout>
      {" "}
      <h1>Hello from gatsby</h1>
      <ExampleButton onClick={handleClick}> Click me</ExampleButton>
    </Layout>
  )
}
