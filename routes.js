userController = require("./userController")
const express = require('express');
const router = express.Router();

router.post('/add',userController.add);
router.put('/update',userController.update);
router.delete('/delete/:id',userController.delete);
router.get('/get/:id',userController.get);

module.exports = router;

