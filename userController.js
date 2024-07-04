var user = require("./user")
var userController = {}

userController.add = function (req, res) {
    const {id, name, email, phone } = req.body;
    const newUser = user.createUser(id, name, email, phone);
    res.json(newUser)
}

userController.update = function (req, res) {
    const {id, name, email, phone } = req.body;
    const updatedUser = userController.updateUser(req.body.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

userController.get = function (req, res) {
    console.log(req.params.id)
    const newUser = user.getUserById(req.params.id);
    if (!newUser) {
        const error = new Error(`User with id ${req.params.id} not found`);
        error.statusCode = 404;
        throw error;
    }
    return newUser;
}

userController.delete = function (req, res) {
    const deleted = user.deleteUser(req.params.id);
    if (deleted) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

module.exports = userController
















