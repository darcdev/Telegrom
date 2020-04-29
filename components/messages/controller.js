const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[message Controller] No hay usuario o mensaje');
            reject('los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages(filterUser) {
    return new Promise(async(resolve, reject) => {
        const result = await store.list(filterUser);
        resolve(result);
    })
}

function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject('invalid data');
            return false;
        }
        const result = await store.updateText(id, message)
        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}