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
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram_gb: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    cpu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    os_version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    java_version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jdk_version: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
  },
  {
    tableName: "os_info",
    timestamps: false,
  }
);

module.exports = OsInfo;
