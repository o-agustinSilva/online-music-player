const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

router.route('/')
    .get(roomController.getAllRooms)
    .post(roomController.createRoom)
    
router.route('/:id')    
    .get(roomController.getGuests)
    .delete(roomController.deleteRoom)
    .post(roomController.kickUser)
    
    
module.exports = router;