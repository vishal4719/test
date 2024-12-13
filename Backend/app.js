// In your app.js
const express = require('express');
const cors = require('cors');

const app = express();

var corsOption = {
    origin: "http://localhost:3000", // React app URL
};

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Website" });
});

// Initializing the DB in the main server
const db = require("./src/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced DB");
    })
    .catch((err) => {
        console.log("Failed to sync DB: " + err.message);
    });

// Importing and using routes
const signupRoutes = require('./src/routes/signup.route');
app.use('/api', signupRoutes);  // Correcting the path to use '/api/signup' as intended

const loginRoutes = require('./src/routes/login.route');
app.use('/api/login', loginRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
