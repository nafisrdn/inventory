const fs = require("fs");
const { spawn } = require("child_process");
const { sequelize } = require("../configs/db.config");
const OsInfo = require("../models/os-info.model");
const dbConfig = require("../configs/db.config");

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

const saveToFile = async (targetOutput) => {

  const dumpCommand = `mysqldump --user=${dbConfig.USER} --password=${dbConfig.PASSWORD} --port=${dbConfig.PORT} ${dbConfig.DATABASE}`;

  const dumpProcess = spawn(dumpCommand, [], { shell: true });
  dumpProcess.stdout.pipe(fs.createWriteStream(targetOutput));

  dumpProcess.on("exit", (code) => {
    if (code !== 0) {
      console.error(`mysqldump exited with code ${code}`);
    } else {
      console.log(`Database dump saved to ${targetOutput}`);
    }
  });
};

module.exports.createOsInfo = createOsInfo;
module.exports.recreateTable = recreateTable;
module.exports.bulkCreate = bulkCreate;
module.exports.saveToFile = saveToFile;
