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

const bulkCreate = async (infos) => {
  const insertedOsInfo = await OsInfo.bulkCreate(infos);

  return insertedOsInfo;
};

module.exports.createOsInfo = createOsInfo;
module.exports.recreateTable = recreateTable;
module.exports.bulkCreate = bulkCreate;
