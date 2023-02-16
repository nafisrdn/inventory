const OsInfo = require("../models/os-info.model");

const createOsInfo = async (sequelize, osInfoData) => {
  await sequelize.sync();
  const osInfo = await OsInfo.create(osInfoData);

  return osInfo;
};

module.exports.createOsInfo = createOsInfo;
