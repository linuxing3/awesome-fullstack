module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    changeTarget(config);
  }
};

function changeTarget(config) {
  config.target = "electron-renderer";
  return config;
}
