const { Users } = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogout = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt)
        return res.sendStatus(204);

    const refreshToken = cookies.jwt;

    // Check existence of the refresh token in db
    const foundUser = await Users.findOne({ where: {refreshToken: refreshToken} });
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete the refresh token in db
    await Users.update(
        { accessToken: '', refreshToken: '' }, 
        { where: { username: foundUser.username } } 
      );

      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // Secure: true - only server on https
      res.sendStatus(204);
};

module.exports = { handleLogout };