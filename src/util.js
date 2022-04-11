// const localizedUrl = ({ locale, url }) =>
//   process.env.DEFAULT_LOCALE === locale ? `/${url}` : `/${locale}/${url}`

exports.localizedUrl = ({ locale, url }) => {
  var _url = url.replace(/^\/|\/$/g, "")
  // if (url.charAt(0) === "/") {
  //   _url = url.replace("/", "")
  // } else {
  //   _url = url
  // }

  return process.env.DEFAULT_LOCALE === locale
    ? `/${_url}`
    : `/${locale}/${_url}`
}
