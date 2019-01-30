const isElectron = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    changeTarget(config);
  }
};

function changeTarget(config) {
  if (isElectron) {
    config.target = "electron-renderer";
  }
  return config;
}
