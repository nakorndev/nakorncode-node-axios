// fetch()                  <-- browser
// require('https').request <-- node
// axios                    <-- browser, node

const axios = require('axios').default

// axios.get('https://reqres.in/api/users')
//   .then(response => console.log(response.data))
//   .catch(console.error)

axios.post('https://reqres.in/api/login', { // data = js object (json); headers.content-type = 'application/json'
  email: 'eve.holt@reqres.in',
  password: '1234'
})
  .then(response => console.log(response.data))
  .catch(console.error)
