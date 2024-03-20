const { Users, Rooms } = require("../models");

const getAllRooms = async (req, res) => {
    const listOfRooms = await Rooms.findAll();
    return res.json(listOfRooms);
}

const getGuests = async (req, res) => {
    const room = await Rooms.findByPk(req.params.id);

    if (!room) 
        return res.status(404).json({ 'message' : 'Room not found' });

    // Return the guests
    const guests = await room.getGuests();
    return res.status(200).json(guests);
}

const createRoom = async (req, res) => {
    const post = req.body;

    if (post.OwnerId === undefined)
        return res.status(400).send("¡Owner is required!");

    // Check if already exists a room 
    const room = await Rooms.findOne({where : {OwnerId : post.OwnerId} });
    if (room) 
        return res.status(400).send("An user can't have two or more rooms!")

    await Rooms.create(post);
    res.json(post);
}

const deleteRoom = async (req, res) => {
    const room = await Rooms.findByPk(req.params.id);

    if (!room)
        return res.status(404).send("Room not found.");

    await room.destroy();
    return res.status(200).send("The room has been deleted successfully.");
}

const kickUser = async (req, res) => {
    const ownerId = req.body.owner;
    const userIdToKick = req.body.userToKick;
    const room = await Rooms.findByPk(req.params.id);

    // Check if the room exists
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    // Check if the user who's trying to kick an user, is the owner
    if (room.OwnerId !== ownerId) {
        return res.status(403).json({ error: 'Unauthorized: You are not the owner of this room' });
    }

    // Check if the user exists
    const userToKick = await Users.findByPk(userIdToKick);
    if (!userToKick) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is in the room
    if (userToKick.RoomId !== room.id) 
        return res.status(404).json({ error: 'The user is not on the room' });

    // Kick the user
    try {
        await userToKick.update({ RoomId: null });
        return res.status(200).json({ message: 'The user has been kicked from the room' });
    } catch (error) {
        console.error('Error kicking user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getAllRooms, createRoom, deleteRoom, kickUser, getGuests }