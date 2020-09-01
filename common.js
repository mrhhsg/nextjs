
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
    return new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai'
    })
}

export {
    Client, valid_keys, get_time, auth_key
}