import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Headings from "../components/headings"

const NotfoundPage = ({ data }) => {
  // const { strapiAbout } = useStaticQuery(graphql`
  //   query {
  //     strapiAbout {
  //       title
  //     }
  //   }
  // `)
  const { title } = data.strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  return (
    <Layout>
      <Seo seo={seo} strapiGlobal={data.strapiGlobal} />
      <Headings siteName={title} />
      404 not found
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    strapiAbout(locale: { eq: $language }) {
      title
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

export default NotfoundPage
