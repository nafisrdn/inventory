const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/db.config");

const OsInfo = sequelize.define(
  "OsInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    outlet_code: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hostname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ram_gb: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    cpu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disk: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    os_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    java_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jdk_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jre_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    browser_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    google_chrome_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "os_info",
    timestamps: false,
  }
);

module.exports = OsInfo;
