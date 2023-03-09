const express = require("express");
const { initClient } = require("./config/redis");
const connectDatabase = require("./config/database");
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

// Listen server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
