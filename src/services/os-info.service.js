const { sequelize } = require("../configs/db.config");
const OsInfo = require("../models/os-info.model");

const createOsInfo = async (osInfoData) => {
  await sequelize.sync();
  const osInfo = await OsInfo.create(osInfoData);

  return osInfo;
};

const recreateTable = async () => {
  await OsInfo.sync({ force: true });
  console.log("Table recreated successfully!");
};

module.exports.createOsInfo = createOsInfo;
module.exports.recreateTable = recreateTable;
