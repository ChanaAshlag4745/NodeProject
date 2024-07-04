var user = require("./user")
var userController = {}

userController.add = function(req, res){
    return user.createUser(req.body);
}

userController.update = function(req, res){
    return user.updateUser(req.body);
}

userController.get = function(req, res){
    return user.getUser(req.params.id);
}

userController.delete = function(req, res){
    return user.deleteUser(req.params.id);
}

module.exports = userController
















