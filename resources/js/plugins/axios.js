/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.withCredentials = true
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Intercept 401 responses and redirect to login
 */
window.axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        window.location.href = '/admin/login'
    }

    return Promise.reject(error)
})
