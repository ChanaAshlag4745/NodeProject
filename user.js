var userlist =[{id:"214335879", name:"chany", email:"ca0556704745@gmail.com", phone:"0556704745"}]

var user = {};

user.createUser = function(item)
{
    userlist.push(item)
}

user.updateUser = function(item)
{
    const index = userlist.findIndex(user => user.id == item.id)
    userlist[index] = item;
}

user.deleteUser = function(id)
{
    userlist.splice(id, 1)
}

user.getUser = function(id)
{
    const index = userlist.findIndex(user => user.id == item.id)
    return  userlist[index]
}

module.exports = user;