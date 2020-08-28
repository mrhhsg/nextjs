const clients = require('../../common').clients

export default( req, res ) => {
    res.statusCode = 200
    res.json( clients )
}