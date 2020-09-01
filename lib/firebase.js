import admin from 'firebase-admin'
const http = require( 'http' )
// const tunnel = require('tunnel2')
const HttpsProxyAgent = require('https-proxy-agent');
const agent = process.env.http_proxy ? new HttpsProxyAgent( process.env.http_proxy ) : null

try {
    admin.initializeApp( {
        credential: admin.credential.cert(
            {
                private_key: process.env.FIREBASE_PRIVATE_KEY,
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                project_id: process.env.FIREBASE_PROJECT_ID
            },
            agent
        ),
        databaseURL: process.env.FIREBASE_DATABASE,
        httpAgent: agent,
    } );
} catch ( error )
{
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack);
    }
}



export default admin.database()