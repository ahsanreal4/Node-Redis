const express = require('express');
const client = require('./config/redis');
const cors = require('cors');

const PORT = 8000;

const app = express();
app.use(cors());

app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
