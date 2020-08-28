const clients = require('../../common').clients
const get_time = require('../../common').get_time

export default( req, res ) => {
    res.statusCode = 200
    res.json( { clients: clients, time: get_time() } )
}