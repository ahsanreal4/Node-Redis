const client = require("../config/redis.config");

async function getRedisValue(key) {
  if (!key || key.length === 0) {
    console.log("Key was not provided to getRedisValue() function");
    return;
  }

  return await client.get(key);
}

function setRedisKey(key, value) {
  if (!key || key.length === 0 || !value || value.length === 0) {
    console.log("Key or value was not provided to setRedisKey() function");
    return;
  }

  client.set(key, value);
}

module.exports = { getRedisValue, setRedisKey };
