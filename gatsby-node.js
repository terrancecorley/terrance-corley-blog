const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    // graphql func call returns promise
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(( { node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/blog-post.js'),
                context: {
                    // data passed to context is available
                    // in pg queries as grapql vars
                    slug: node.fields.slug,
                },
            })
        })
    })
}