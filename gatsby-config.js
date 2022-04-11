require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  trailingSlash: "never",
  plugins: [
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: `${__dirname}/src/components/Layout.js`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/locales/`,
      },
    },
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/src/locales/`,
        destination: `/locales/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
        languages: process.env.LOCALES.split(","),
        defaultLanguage: process.env.DEFAULT_LOCALE,
        fallbackLanguage: "en",
        generateDefaultLanguagePage: false,
        redirect: false,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: process.env.SITE_URL,
        // you can pass any i18next options
        i18nextOptions: {
          debug: true,
          defaultNS: "translation",
          lowerCaseLng: true,
          saveMissing: true,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/article/:uid",
            getLanguageFromPath: true,
            // excludeLanguages: ["es"],
          },
          // {
          //   matchPath: "/:lang?/about",
          //   getLanguageFromPath: true,
          //   // excludeLanguages: ["es"],
          // },
          // {
          //   matchPath: "/",
          //   getLanguageFromPath: true,
          //   // excludeLanguages: ["es"],
          // },
          // {
          //   matchPath: "/preview",
          //   languages: ["en", "ko"],
          // },
        ],
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            },
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW
                ? "preview"
                : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
            pluginOptions: {
              i18n: {
                locale: "all", // Fetch all localizations
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            pluginOptions: {
              i18n: {
                locale: "all", // Fetch all localizations
              },
            },
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            pluginOptions: {
              i18n: {
                locale: "all", // Fetch all localizations
              },
            },
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "ko",
    //     useLangKeyLayout: false,
    //     prefixDefault: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-internationalization`,
      options: {
        locales: process.env.LOCALES.split(","),
        defaultLocale: process.env.DEFAULT_LOCALE,
      },
    },
  ],
}
