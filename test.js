// specify an axon complaint port or address
const server = require('./index').server(3000)

server.addApiFunction('ping', (data, callback) => {
	console.log('ping')
	callback(null, 'pong')
})

const client = require('./index').client(3000)

client.refresh((err, rpc) => {
	if (err) return console.error(err)
	rpc.ping(1, (err, result) => {
		if (err) return console.error(err)
		console.log(result) // prints pong
	})
})
