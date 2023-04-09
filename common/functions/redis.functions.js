const client = require("../config/redis.config");

async function getRedisValue(key, type = "string") {
  if (!key || key.length === 0) {
    console.log("Key was not provided to getRedisValue() function");
    return;
  }

  switch (type.toLowerCase()) {
    case "json":
      const jsonKey = await client.get(key);
      return JSON.parse(jsonKey);
    case "string":
      return await client.get(key);
    case "number":
      const key = await client.get(key);
      return parseInt(jsonKey);
    default:
      return;
  }
}

function setRedisKey(key, value, type = "string") {
  if (!key || key.length === 0 || !value || value.length === 0) {
    console.log("Key or value was not provided to setRedisKey() function");
    return;
  }

  type.toLocaleLowerCase() === "json"
    ? client.set(key, JSON.stringify(value))
    : client.set(key, value);
}

module.exports = { getRedisValue, setRedisKey };
