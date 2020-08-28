const clients = require('../../common').clients

export default( req, res ) => {
    var key = req.query['key']
    if ( !key )
    {
        res.statusCode = 401
        res.json({'error': 'key required'})
        return
    }

    var client = clients.find( (value, index, all) => {
        if ( value.uuid == key )
        {
            return value
        }
    })
    if ( client )
    {
        res.statusCode = 200
        res.json( client )
    }
    else
    {
        res.statusCode = 404
        res.json( 'not found' )
    }
   
}