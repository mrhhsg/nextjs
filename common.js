
class Client
{
    ip = '';
    lasted_reported = ''
    uuid
}

var valid_keys = process.env.VALID_KEYS.split(';')
var auth_key = process.env.AUTH_KEY

function get_time()
{
    return Date().substring(0, 24)
}

// var clients = []

// var c = new Client
// c.ip = process.pid
// c.lasted_reported = get_time()
// c.uuid = '0CB4BF2F'
// clients.push( c ) 
// console.log( clients)

// function report(uuid, ip)
// {
//     if (-1 == valid_keys.indexOf(uuid))
//     {
//         console.log('invalid uuid: ' + uuid )
//         return false
//     }

//     var client = clients.find( (value, index, all) => {
//         if ( value.uuid == uuid )
//         {
//             return value
//         }
//     })

//     if ( !client )
//     {
//         client = new Client;
//         client.ip = ip
//         client.uuid = uuid
//         client.lasted_reported = Date().substring(0, 24)
//         clients.push(client)
//     }
//     else
//     {
//         client.ip = ip
//         client.uuid = uuid
//         client.lasted_reported = Date().substring(0, 24)
//     }

//     return true
// }

// function dump()
// {
//     return clients
// }

export {
    Client, valid_keys, get_time, auth_key
}