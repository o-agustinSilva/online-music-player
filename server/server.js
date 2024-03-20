const express = require("express");
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require('./middleware/credentials');
const port = process.env.PORT || 3500;
const db = require("./models");

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Routers
app.use("/users", require('./routes/Users'));
app.use("/auth", require('./routes/Auth'));
app.use('/refresh', require('./routes/Refresh'));
app.use('/logout', require('./routes/Logout'));

app.use(verifyJWT);
app.use("/rooms", require('./routes/Rooms'));


// Sync the database
db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})

app.get('/', (req, res) => {
    res.send('server is running correclty');
})

