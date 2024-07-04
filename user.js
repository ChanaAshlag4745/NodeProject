let users = [{id:214335879,name:"dcdc",email:"fvfvf",phone:"vfvfvfv"}]; 

class User {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

var user = {};

user.createUser = function(id, name, email, phone) {
    let newUser = new User(id, name, email, phone);
    users.push(newUser);
    console.log(newUser);
    return newUser;
}

user.updateUser = function(id, item)
{
    const user = getUser(id);
    if(!user)
        return null;
    Object.assign(user, item);
    console.log(user);
    return user;
}

user.deleteUser = function(id)
{
    let index = users.findIndex(u => u.id === id);
    const ans =  users.splice(index, 1);
    console.log(ans);
    return ans;
}

user.getUser = function(id)
{
    let user = users.find(u => u.id === id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

module.exports = user;