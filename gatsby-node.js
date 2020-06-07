const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetPeople {
      people: allContentfulPeople {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.people.nodes.map(person => {
    createPage({
      path: `/people/${person.slug}`,
      component: path.resolve(`src/templates/person-template.jsx`),
      context: {
        slug: person.slug,
      },
    })
  })
}
