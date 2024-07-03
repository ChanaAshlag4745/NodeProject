var user = require("user")
var userController = {}

userController.add = function(req, res){
    user.createUser(req.body);
}

userController.update = function(req, res){
    user.updateUser(req.body);
}

userController.get = function(req, res){
    user.getUser(req.params.id);
}

userController.delete = function(req, res){
    user.deleteUser(req.params.id);
}

module.exports = userController
















