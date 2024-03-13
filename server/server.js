const express = require("express");
const app = express();
const db = require("./models");
const port = 3000;

app.use(express.json());

// Rooms routers
const roomRouter = require('./routes/Rooms');
app.use("/rooms", roomRouter);

// Sync the database
db.sequelize.sync().then( () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})

app.get('/', (req, res) => {
    res.send('server is running correclty');
})

