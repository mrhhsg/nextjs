const report = require('../../common').report

export default (req, res) => {
    var key = req.query['key']
    if ( !key )
    {
        res.statusCode = 401
        res.json({'error': 'key required'})
        return
    }

    if ( report( key, req.connection.remoteAddress.replace('::ffff:', '')) )
    {
        res.statusCode = 200
        res.json( {} )
    }
    else
    {
        res.statusCode = 501
        res.json({'error': 'report failed'})
    }
  }