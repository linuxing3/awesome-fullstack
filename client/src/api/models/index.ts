/**
 * models is object to hold
 * {
 *   "user" : [user: UserModule extends VuexModel]
 * }
 */
import { toLower } from "lodash";

let requiredModule = require.context(".", false, /\.ts$/);
let models = {};

requiredModule.keys().forEach(key => {
  if (key === "./index.ts") return;
  let moduleName = toLower(key.replace(/(\.\/|\.ts)/g, ""));
  models[moduleName] = requiredModule(key).default;
});

export default models;
