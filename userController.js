var user = require("./user")
var userController = {}

userController.add = function(req, res){
    user.createUser(req.body);
}

userController.update = function(req, res){
    user.updateUser(req.body);
}

userController.get = function(req, res){
    const newUser = user.getUserById(id);
    if (!newUser) {
        const error = new Error(`User with id ${id} not found`);
        error.statusCode = 404;
        throw error;
    }
    return newUser;
    user.getUser(req.params.id);
}

userController.delete = function(req, res){
    user.deleteUser(req.params.id);
}

module.exports = userController
















