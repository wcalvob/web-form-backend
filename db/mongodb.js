const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("conectado a bd"));

const connectDb = async ({ host, port, dbName }) => {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = connectDb;
