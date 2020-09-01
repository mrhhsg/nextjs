const database = require( '../../lib/firebase' ).default
import { Client, valid_keys, get_time } from '../../common'


export default async (req, res) => {
    var key = req.query['key']
    if ( !key )
    {
        key = valid_keys[0]
    }

    if (-1 == valid_keys.indexOf( key ))
    {
        console.log('invalid uuid: ' + key )
        res.statusCode = 401
        res.json({'error': 'invalid uuid'})
        return
    }

    const data = (await database.ref().once('value')).val()
    var clients = data && data.clients && data.clients.length > 0 ? JSON.parse( data.clients ) : []

    if ( clients )
    {
        for ( var i in clients )
        {
            var client = clients[ i ]
            if ( client.uuid == key )
            {
                res.statusCode = 200
                res.json( client )
                return
            }
        }
    }

    console.log( key + ' not found')
    res.statusCode = 404
    res.json( 'not found' )
}