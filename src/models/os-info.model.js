const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const OsInfo = sequelize.define(
  "OsInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    outletCode: {
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
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ramGb: {
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
    osVersion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    javaVersion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jdkVersion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jreVersion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    browserVersion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleChromeVersion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serialNumber: {
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
