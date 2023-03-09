const express = require("express");
const { initClient } = require("./config/redis");
const connectDatabase = require("./config/database");
require("dotenv").config();
const cors = require("cors");

// Connect Redis
const client = initClient();

// Connect Database
connectDatabase();

// Connect Express
const app = express();

// Express Configurations
app.use(cors());

// Routes
app.use("/api", require("./routes/api"));

// Listen server on specified port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
