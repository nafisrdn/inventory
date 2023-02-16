const fs = require("fs").promises;
const path = require("path");

const convertTextToJson = (text) => {
  const lines = text.trim().split("\n");
  const json = {};

  for (const line of lines) {
    const [key, value] = line.split(":");
    const transformedKey = key
      .trim()
      .replace(/ /g, "_")
      .replace(/[()]/g, "")
      .toLowerCase();

    json[transformedKey] =
      transformedKey === "outlet_code" || transformedKey === "ram_gb"
        ? Number(value.trim())
        : value.trim();
  }

  return json;
};

const getFilesContent = async (directoryPath) => {
  const files = await fs.readdir(directoryPath);

  const filesContent = await Promise.all(
    files.map(async (fileName) => {
      const fileContent = await fs.readFile(
        path.join(directoryPath, fileName),
        { encoding: "utf8" }
      );
      return fileContent;
    })
  );

  return filesContent;
};

const convertTextFilesToJson = async (directoryPath) => {
  const filesContent = await getFilesContent(directoryPath);

  const convertedFilesToJson = filesContent.map(convertTextToJson);

  return convertedFilesToJson;
};

module.exports.convertTextFilesToJson = convertTextFilesToJson;
