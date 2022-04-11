const { localizedUrl } = require("./src/util")
const path = require("path")
// const fs = require("fs-extra")

// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`)
//   console.log("Copying locales")
//   fs.copySync(
//     path.join(__dirname, "/src/locales"),
//     path.join(__dirname, "/public/locales")
//   )
// }
// const localizedSlug = ({ isDefault, locale, slug }) =>
//   isDefault ? `/${slug}` : `/${locale}/${slug}`

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            locale
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    //
    articles.forEach((article) => {
      createPage({
        path: localizedUrl({
          locale: article.locale,
          url: `article/${article.slug}`,
        }),

        component: articlePost,
        context: {
          slug: article.slug,
          language: article.locale,
        },
      })
    })
  }
}
