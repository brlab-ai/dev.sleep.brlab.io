import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const { localizedUrl } = require("../util")
// import { LocalizedLink } from "gatsby-plugin-internationalization"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={localizedUrl({
        locale: article.locale,
        url: `article/${article.slug}`,
      })}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      />
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    locale
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default ArticleCard
