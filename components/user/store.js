const Model = require('./model');

async function getUsers(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = {
            name: filterUser
        }
    }
    const user = await Model.find(filter);
    return user;
}

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

module.exports = {
    add: addUser,
    list: getUsers
}