const db = require('mongoose');
//password  -> O5LEiWHVbspbVJpN
db.Promise = global.Promise;
//mongodb+srv://db_user:<password>@cluster0-bqwcb.mongodb.net/test?retryWrites=true&w=majority
//ejemplo url : // 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true
    });
    console.log('[db] conectada con exito');
}

module.exports = connect;