const database = require( '../../lib/firebase' ).default
import { auth_key } from '../../common'

export  default async ( req, res ) => {
    const key = req.query['key']
    if ( key != auth_key )
    {
        res.statusCode = 401
        res.json('no permission')
        return
    }
    res.statusCode = 200
    res.json( (await database.ref().once('value')).val()  )
}