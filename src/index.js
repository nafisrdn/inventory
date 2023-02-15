const path = require("path");

const { convertTextFilesToJson } = require("./utils/json-converter.util");

const directoryPath = path.join(__dirname, "../input");

(async () => {
  const data = await convertTextFilesToJson(directoryPath);
  console.log(data);
})();
