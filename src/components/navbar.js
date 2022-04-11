import { Link } from "gatsby"
// import { LocalizedLink } from "gatsby-plugin-internationalization"
import React from "react"
import { useTranslation } from "react-i18next"
const { localizedUrl } = require("../util")

const Navbar = () => {
  // const { t } = this.props
  const { t, i18n } = useTranslation()

  return (
    <header className="bg-primary-200">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link
          to={localizedUrl({
            locale: i18n.language,
            url: `/`,
          })}
          className="text-xl font-medium"
        >
          {t("blog")}
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          <Link
            className="font-medium"
            to={localizedUrl({
              locale: i18n.language,
              url: `/about`,
            })}
          >
            {t("about")}
          </Link>
        </div>
      </nav>
    </header>
  )
}

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `

export default Navbar
// translate("lang")(Navbar)
