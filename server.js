const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const { appConfig, dbConfig } = require("./config");
const connectDb = require("./db/mongodb");



const initApp = async (appConfig, dbConfig) => {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`Servidor web en el puerto ${appConfig.port}`)
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
};

initApp(appConfig, dbConfig);
