'use strict'

const xn = require('xn')
const axon = require('axon')

module.exports.server = (address) => {
	// create the rpc server
	let server = new xn.RpcServer()
	let rep = axon.socket('rep')
	rep.bind(address)
	
	rep.on('message', (message, reply) => {
		server.dispatch(message, reply)
	})

	return server
}

module.exports.client = (address, cb) => {
	let req = axon.socket('req')
	req.connect(address)

	// create the rpc client
	return new xn.RpcClient({
		send: (message, cb) => {
			req.send(message, cb) 
		}
	})
}
