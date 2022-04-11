import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()
  return (
    <footer className="mt-16 bg-neutral-100 py-8 text-neutral-700">
      <div className="container">
        <p>Copyright {currentYear}</p>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {t(lng)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
