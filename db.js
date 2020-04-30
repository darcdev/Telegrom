const db = require('mongoose');
//password  -> O5LEiWHVbspbVJpN
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true
    });
    console.log('[db] conectada con exito');
}

module.exports = connect;