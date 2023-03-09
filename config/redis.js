const redis = require("redis");

const initClient = () => {
  const client = redis.createClient();
  client.connect();

  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("connect", () =>
    console.log("=========> Redis Connected <==========")
  );

  return client;
};

module.exports = { initClient };
