require("dotenv").config();
const path = require("path");

const { sequelize } = require("./configs/db.config");
const { createOsInfo, recreateTable } = require("./services/os-info.service");
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

    await recreateTable();

    const osInfo = await createOsInfo({
      outlet_code: 765765,
      username: "root",
      hostname: "jenkins-ubuntu",
      ip_address: "10.2.0.4",
      ram_gb: 7,
      cpu: "Intel(R) Xeon(R) Platinum",
      disk: "29G",
      os_version: "Ubuntu 20.04.5 LTS",
      java_version: "11.0.17",
      jdk_version: "11.0.17",
      serial_number: "0000-0007-8585-3300-8170-6992-42",
    });

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
})();
