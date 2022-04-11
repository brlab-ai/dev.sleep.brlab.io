import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Headings from "../components/headings"
import ArticlesGrid from "../components/articles-grid"
import { useTranslation } from "react-i18next"

// const getRedirectLanguage = () => {
//   if (typeof navigator === `undefined`) {
//     return "en"
//   }

//   const lang =
//     navigator && navigator.language && navigator.language.split("-")[0]
//   if (!lang) return "ko"

//   switch (lang) {
//     case "en":
//       return "en"
//     default:
//       return "ko"
//   }
// }

const IndexPage = ({ data }) => {
  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)

  // console.log(data)
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo seo={{ metaTitle: t("home") }} strapiGlobal={data.strapiGlobal} />
      <Headings
        siteName={data.strapiGlobal.siteName}
        siteDescription={data.strapiGlobal.siteDescription}
      />
      <main>
        <ArticlesGrid articles={data.allStrapiArticle.nodes} />
      </main>
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
    allStrapiArticle(filter: { locale: { eq: $language } }) {
      nodes {
        ...ArticleCard
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

export default IndexPage
