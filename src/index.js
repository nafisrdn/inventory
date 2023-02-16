require("dotenv").config();
const path = require("path");

const { sequelize } = require("./configs/db.config");
const {
  recreateTable,
  bulkCreate,
  saveToFile,
} = require("./services/os-info.service");
const { convertTextFilesToJson } = require("./utils/json-converter.util");

const inputDirectoryPath = path.join(__dirname, "../input");

const authenticateDb = async () => {
  await sequelize.authenticate();
  console.log("DB Connected");
};

(async () => {
  try {
    const osInfos = await convertTextFilesToJson(inputDirectoryPath);

    await authenticateDb();

    await recreateTable();
    console.log("Table recreated.");

    await bulkCreate(osInfos);
    console.log("OS Infos Inserted");

    const dumpFile = path.join(__dirname, "../output/dump.sql");

    await saveToFile(dumpFile);

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
})();
