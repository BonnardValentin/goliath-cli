const packageJsonTemplate = (projectName) => {
  return {
    name: `@total-services/${projectName}`,
    version: "0.0.1",
    description: "",
    author: "",
    private: true,
    license: "UNLICENSED",
    dependencies: {
      dayjs: "^1.11.0",
    },
  };
};

module.exports = packageJsonTemplate;
