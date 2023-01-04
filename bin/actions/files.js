const { mkdir } = require("fs").promises;
const { existsSync, writeFileSync, mkdirSync } = require("fs");

module.exports = {
  checkDirectoryAccess: async (path) => {
    try {
      await fs.access(path, constants.R_OK | constants.W_OK);
    } catch (error) {
      try {
        await mkdir(path, { recursive: true });
      } catch (error) {
        return false;
      }
    }
    return true;
  },
  createDirectory: async (path) => {
    if (!existsSync(path)) {
      await mkdirSync(path);
    }
  },
  createFile: async (path, content) => {
    await writeFileSync(path, content);
  },
};
