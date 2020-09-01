const database = require( '../../lib/firebase' ).default
import { Client, valid_keys, get_time } from '../../common'

export default async (req, res) => {
    const key = req.query['key']
    if ( !key )
    {
        res.statusCode = 401
        res.json({'error': 'key required'})
        return
    }

    if (-1 == valid_keys.indexOf( key ))
    {
        console.log('invalid uuid: ' + key )
        res.statusCode = 401
        res.json({'error': 'invalid uuid'})
        return
    }

    // const ip = req.connection.remoteAddress.replace('::ffff:', '')
    var ip = req.headers['x-forwarded-for']
    if ( !ip )
    {
        ip = req.connection.remoteAddress.replace('::ffff:', '')
    }

    const data = (await database.ref().once('value')).val()
    var clients = data && data.clients && data.clients.length > 0 ? JSON.parse( data.clients ) : []

    var target_client
    // console.log( clients )
    if ( clients )
    {
        for ( var i in clients )
        {
            var client = clients[ i ]
            if ( client.uuid == key )
            {
                client.ip = ip
                client.uuid = key
                client.lasted_reported = get_time()
                target_client = client
                break
            }
        }
    }

    if ( !target_client )
    {
        target_client = new Client

        target_client.ip = ip
        target_client.uuid = key
        target_client.lasted_reported = get_time()
        clients.push( target_client )
    }

    const str = JSON.stringify( clients )

    database.ref().set( {clients: str })

    res.statusCode = 200
    res.json( 'ok' )
}