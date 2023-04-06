const express = require("express");
const router = express.Router();
const {
  getRedisValue,
  setRedisKey,
} = require("../common/functions/redis.functions");

router.get("/get", async (req, res) => {
  const value = await getRedisValue("hello", "json");
  if (value) {
    return res.send(value);
  }
  res.send("Value not found");
});

router.get("/set", async (req, res) => {
  setRedisKey("hello", { message: "storing object" }, "json");
  res.send("Successful");
});

module.exports = router;
