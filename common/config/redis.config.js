const redis = require("redis");

const client = redis.createClient();
client.connect();

client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", () =>
  console.log("=========> Redis Connected <==========")
);

module.exports = client;
