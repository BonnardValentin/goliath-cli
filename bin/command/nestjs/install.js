const { spawn } = require("child_process");

const installDependencies = (path) => {
  return new Promise((resolve, reject) => {
    const npm = spawn("npm", ["install", "--prefix", path], {
      stdio: "inherit",
    });

    npm.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error("Failed to install dependencies"));
      }
    });
  });
};

module.exports = installDependencies;
