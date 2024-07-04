let users = []; 

class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

var user = {};

user.createUser = function(name, email, phone) {
    let newUser = new User(name, email, phone);
    users.push(newUser);
    console.log(newUser);
    return newUser;
}

user.updateUser = function(email, item)
{
    const user = getUser(email);
    if(!user)
        return null;
    Object.assign(user, item);
    console.log(user);
    return user;
}

user.deleteUser = function(email)
{
    let index = users.findIndex(u => u.email === email);
    const ans =  users.splice(index, 1);
    console.log(ans);
    return ans;
}

user.getUser = function(email)
{
    let user = users.find(u => u.email === email);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

module.exports = user;