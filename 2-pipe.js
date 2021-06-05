const axios = require('axios').default
const fs = require('fs')
const path = require('path')

const writer = fs.createWriteStream(path.resolve(__dirname, './ubuntu-desktop.iso'))

axios({
  method: 'GET',
  url: 'https://releases.ubuntu.com/20.04.2.0/ubuntu-20.04.2.0-desktop-amd64.iso',
  responseType: 'stream' // response.data = 'read stream'
}).then(response => {
  response.data.pipe(writer)
  // response.data.on('data', (chunk) => console.log(chunk))
}).catch(console.error)
