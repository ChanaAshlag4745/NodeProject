userController = require("./userController")
const validateUser = require('./validations');
const express = require('express');
const router = express.Router();

router.post('/', validateUser, userController.add);
router.put('/', validateUser,userController.update);
router.delete('/:id',userController.delete);
router.get('/:id',userController.get);

module.exports = router;

