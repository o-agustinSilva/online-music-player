const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createUser)
    .delete(usersController.deleteUser)

router.route('/:roomId/join')
    .post(usersController.joinRoom);
    
module.exports = router;