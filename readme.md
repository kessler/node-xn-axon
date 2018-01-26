# xn-axon

**[axon](https://github.com/tj/axon) backed [xn](https://github.com/kessler/node-xn)**

[![npm status](http://img.shields.io/npm/v/xn-axon.svg?style=flat-square)](https://www.npmjs.org/package/xn-axon) [![Dependency status](https://img.shields.io/david/kessler/node-xn-axon.svg?style=flat-square)](https://david-dm.org/kessler/node-xn-axon)

## example

`npm i xn-axon`

#### Server

```js
// specify an axon complaint port or address
const server = require('xn-axon').server(3000)

server.addModule('fs')
server.addApi('pingi', '0.0.1', (callback) => {
    callback(null, 'pong')
})
```

#### client
```js
const client = require('xn-axon').client(3000)

client.refresh((err, rpc) => {
    rpc.ping((err, result) => {
        console.log(result) // prints pong
    })
})
```

## license

[MIT](http://opensource.org/licenses/MIT) © yaniv kessler
