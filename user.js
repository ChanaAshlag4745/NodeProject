var userlist =[{id:214335879, name:"chany", email:"ca0556704745@gmail.com", phone:"0556704745"}]

var user = {};

user.createUser = function(item)
{
    userlist.push(item)
    return true
}

user.updateUser = function(id,userData)
{
    const user = getUser(id);
    if (!user) return null;
    Object.assign(user, userData);
    return user;
}

user.deleteUser = function(id)
{
    return userlist.splice(id, 1);
}

user.getUser = function(id)
{
    return userlist.find(user => user.id === parseInt(id))
}

module.exports = user;