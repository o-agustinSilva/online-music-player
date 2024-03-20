const { Users, Rooms } = require("../models");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
}

const createUser = async (req, res) => {
    const post = req.body; 
    const hashedPassword = await bcrypt.hash(post.hashedPassword, 10)

    if (!post.username || !post.hashedPassword) 
        return res.status(400).json( {'message': 'Username and password are required'} );
    
    // Hash the password
    post.hashedPassword = hashedPassword;

    await Users.create(post)
    .then(() => {
        res.json(post);
    })
    .catch((error) => {
        res.status(500).send(error.errors[0].message);
    });
};

const deleteUser = async (req, res) => {
    const user = await Users.findOne( {where : {username : req.body.username}});

    if (!user)
        return res.status(404).json( {'message':'User not found'});

    await user.destroy();
    return res.status(204).json( {'message':'User deleted successfully'} );
};

const joinRoom = async (req, res) => {
    const roomId = req.params.roomId;
    const userId = req.body.user;

    // Check if the room exists
    const room = await Rooms.findByPk(roomId);
    if (!room) 
        return res.status(404).json({ error: 'Room not found' });
    
    // Extra: check if the user is already in the room !!

    // Associate the user with the room
    try {
        const guest = await Users.findByPk(userId);
        await guest.update({ RoomId: roomId });
        return res.status(200).json({ message: 'User joined the room successfully' });

    } catch (error) {
        console.error('Error joining room:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllUsers, createUser, deleteUser, joinRoom
}