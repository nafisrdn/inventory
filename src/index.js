require("dotenv").config();
const path = require("path");

const { sequelize } = require("./configs/db.config");
const {
  createOsInfo,
  recreateTable,
  bulkCreate,
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

    const insertedOsInfos = await bulkCreate(osInfos);

    console.log(insertedOsInfos);

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
})();
