// specify an axon complaint port or address
const server = require('./index').server(3000)

server.addModule('fs')
server.addApi('ping', '0.0.1', (callback) => {
	callback(null, 'pong')
})

const client = require('./index').client(3000)

client.refresh((err, rpc) => {
	if (err) return console.error(err)
	rpc.ping((err, result) => {
		if (err) return console.error(err)
		console.log(result) // prints pong
	})
})
