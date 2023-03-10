const express = require("express");
const router = express.Router();
const { getRedisValue } = require("../common/functions/redis.functions");

router.get("/", async (req, res) => {
  const value = await getRedisValue("hello");
  if (value) {
    return res.send(value);
  }
  res.send("Value not found");
});

module.exports = router;
