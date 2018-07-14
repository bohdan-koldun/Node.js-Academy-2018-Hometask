module.exports = {
  dbname: "chat",
  uri: "mongodb://localhost/chat",
  opts: {
    auto_reconnect: true,
    poolSize: 40
  }
};
