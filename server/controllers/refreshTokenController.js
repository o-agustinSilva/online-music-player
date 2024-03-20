const { Users } = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt)
        return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    // Check existence of the user in the database
    const foundUser = await Users.findOne({ where: {refreshToken: refreshToken} });
    if (!foundUser) 
        return res.sendStatus(403);

    // Evaluate JWT
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username)
                return res.sendStatus(403);
            const accessToken = jwt.sign(
                { 'username': decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            );
            res.json({ accessToken })
        }
    );
};

module.exports = { handleRefreshToken };