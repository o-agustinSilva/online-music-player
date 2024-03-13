const express = require("express");
const router = express.Router();
const { Rooms } = require("../models");

router.get('/', async (req, res) => {
    const listOfRooms = await Rooms.findAll();
    res.json(listOfRooms);
});

router.post('/', async (req, res) => {
    const post = req.body;
    await Rooms.create(post);
    res.json(post);
});

router.delete('/:id', async (req, res) => {
    const room = await Rooms.findByPk(req.params.id);
    console.log(req.params.id);
    if (!room)
        return res.status(404).send("Room not found.");

    await room.destroy();
    return res.status(200).send("The room has been deleted successfully.");
});

module.exports = router;