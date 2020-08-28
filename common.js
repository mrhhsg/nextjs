
class Client
{
    ip = '';
    lasted_reported = ''
    uuid
}

var valid_keys = ['B17E5A3E-BE7C-4CD8-9772-2CD957B43A5A']

var clients = [Client]

function report(uuid, ip)
{
    if (-1 == valid_keys.indexOf(uuid))
    {
        console.log('invalid uuid: ' + uuid )
        return false
    }

    var client = clients.find( (value, index, all) => {
        if ( value.uuid == uuid )
        {
            return value
        }
    })

    if ( !client )
    {
        client = new Client;
        client.ip = ip
        client.uuid = uuid
        client.lasted_reported = Date().substring(0, 24)
        clients.push(client)
    }
    else
    {
        client.ip = ip
        client.uuid = uuid
        client.lasted_reported = Date().substring(0, 24)
    }

    return true
}

function dump()
{
    return clients
}

export {
    report, dump
}