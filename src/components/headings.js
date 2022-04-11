import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

const Headings = ({ siteName = undefined, siteDescription = undefined }) => {
  // const { strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)
  return (
    <header className="container mt-8">
      <h1 className="text-6xl font-bold text-neutral-700">{siteName}</h1>
      {siteDescription && (
        <p className="mt-4 text-2xl text-neutral-500">{siteDescription}</p>
      )}
    </header>
  )
}

export default Headings
