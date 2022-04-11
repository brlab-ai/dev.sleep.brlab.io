import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

const AboutPage = ({ data }) => {
  // const { strapiAbout } = useStaticQuery(graphql`
  //   query {
  //     strapiAbout {
  //       title
  //       blocks {
  //         ...Blocks
  //       }
  //     }
  //   }
  // `)
  const { title, blocks } = data.strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    <Layout>
      <Seo seo={seo} strapiGlobal={data.strapiGlobal} />
      <Headings siteName={title} />
      <BlocksRenderer blocks={blocks} />
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    strapiAbout(locale: { eq: $language }) {
      title
      blocks {
        ...Blocks
      }
    }
    strapiGlobal(locale: { eq: $language }) {
      siteName
      siteDescription
      favicon {
        localFile {
          url
        }
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            url
          }
        }
      }
    }
  }
`

export default AboutPage
