require("dotenv").config();
const path = require("path");

const { sequelize } = require("./configs/db.config");
const { convertTextFilesToJson } = require("./utils/json-converter.util");

const inputDirectoryPath = path.join(__dirname, "../input");

const authenticateDb = async () => {
  await sequelize.authenticate();
  console.log("DB Connected");
};

(async () => {
  try {
    const data = await convertTextFilesToJson(inputDirectoryPath);

    await authenticateDb();

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
})();
