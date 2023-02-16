require("dotenv").config();

const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("./configs/db.config");

const { convertTextFilesToJson } = require("./utils/json-converter.util");

const inputDirectoryPath = path.join(__dirname, "../input");

const setupOrm = async () => {
  const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: "mysql",
      port: dbConfig.PORT,
    }
  );

  await sequelize.authenticate();
  console.log("DB Connected");

  return sequelize;
};

(async () => {
  try {
    const data = await convertTextFilesToJson(inputDirectoryPath);

    const sequelize = await setupOrm();

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
})();
