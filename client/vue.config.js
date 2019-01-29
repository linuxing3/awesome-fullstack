const isElectron = process.env.NODE_ENV === "production" ? true : false ;

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
