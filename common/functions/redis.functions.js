const client = require("../config/redis.config");

async function getRedisValue(key, type = "string") {
  if (!key || key.length === 0) {
    console.log("Key was not provided to getRedisValue() function");
    return;
  }
  if (type.toLocaleLowerCase() === "json") {
    const jsonKey = await client.get(key);
    return JSON.parse(jsonKey);
  }
  return await client.get(key);
}

function setRedisKey(key, value, type = "string") {
  if (!key || key.length === 0 || !value || value.length === 0) {
    console.log("Key or value was not provided to setRedisKey() function");
    return;
  }

  if (type.toLocaleLowerCase() === "json") {
    client.set(key, JSON.stringify(value));
    return;
  }

  client.set(key, value);
}

module.exports = { getRedisValue, setRedisKey };
