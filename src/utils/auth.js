import decode from 'jwt-decode'

    export function logout () {
        clearIdToken()
      //   clearAccessToken()
        router.go('/login')
      }
      
      export function requireAuth (to, from, next) {
        if (!isLoggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      }

      export function getIdToken () {
        return localStorage.getItem('token')
      }
      
    //   export function getAccessToken () {
    //     return localStorage.getItem(ACCESS_TOKEN_KEY)
    //   }
      
      function clearIdToken () {
        localStorage.removeItem('token')
      }

      export function isLoggedIn () {
        const idToken = getIdToken()
        return !!idToken && !isTokenExpired(idToken)
      }
      
      function getTokenExpirationDate (encodedToken) {
        const token = decode(encodedToken)
        console.log(token);
        if (!token.exp) { return null }
      
        const date = new Date(0)
        date.setUTCSeconds(token.exp)
      
        return date
      }
      
      function isTokenExpired (token) {
        const expirationDate = getTokenExpirationDate(token)
        return expirationDate < new Date()
      }