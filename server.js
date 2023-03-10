const express = require("express");
require("./common/config/redis.config");
const connectDatabase = require("./common/config/database.config");
require("dotenv").config();
const cors = require("cors");

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
