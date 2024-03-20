const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;

    if (!user || !pwd) 
        return res.status(400).json( {'message': 'Username and password are required'} );

    // Check existence of the user in the database
    const foundUser = await Users.findOne({ where: {username: user} });
    if (!foundUser) 
        return res.status(401).json({ 'error': 'User not found' });

    // Check if the passwords matchs, and if matches, return an at & rt
    const match = await bcrypt.compare(pwd, foundUser.hashedPassword);
    if (match) {
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m'}
        );

        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        );

        // Update the AT & RT fields in user model
        foundUser.update( {accessToken: accessToken, refreshToken: refreshToken})

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({
            'message': `User ${user} is logged in`, 
            'access_token': accessToken,
            'refresh_token': refreshToken
        });

    } else res.status(401).json({'error': 'Password does not match'});
};

module.exports = { handleLogin };