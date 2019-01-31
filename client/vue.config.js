const isElectron = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: true,
    devServer: {
        host: "0.0.0.0"
        
    },
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
