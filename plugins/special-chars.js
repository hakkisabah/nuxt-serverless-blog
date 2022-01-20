export default (context, inject) => {
  // https://stackoverflow.com/questions/1787322/what-is-the-htmlspecialchars-equivalent-in-javascript
  const specialChars = (content) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }
    return content.replace(/[&<>"']/g, function (m) {
      return map[m]
    })
  }
  inject('specialChars', specialChars)
  // context.$specialChars = specialChars // For Nuxt <= 2.12
}
