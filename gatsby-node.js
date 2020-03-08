/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions , graphql}) => {
    const { createPage } = actions

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js'),
        postList: path.resolve('src/templates/post-list.js'),
    }

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        // Create single blog post pages
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Passing slug for template to use get post
                    slug: node.fields.slug
                }
            })
        })

        // Get all tags
        let tags = []
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        // ['tag1', 'tag2, ...]
        //{tag1: 5, tag2: 6, ...}
        let tagPostCounts = {}
        tags.forEach(tag => (
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
        ))

        tags = _.uniq(tags)

        // Create tags page
        createPage({
            path: `/temak`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            },
        })
        
        // Create tag posts pages
        tags.forEach(tag => {
            createPage({
                path: `/tema/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            })
        })

        const postsPerPage = 3
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numberOfPages }).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1

            if (isFirstPage) return

            createPage({
                path:`/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages
                }
            })
        })
    })
}