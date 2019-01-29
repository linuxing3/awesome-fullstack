// Globally register all locale fils for convenience, because they
// will be used very frequently.

import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import { matchFileName } from "@/util";

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  // 获取文件夹上下文
  const requiredLocales = require.context(
    "../locales",
    true,
    /[A-Za-z0-9-_,\s]+\.(json|js|ts)$/i
  );

  // 合并不同扩展名文件的语言定义
  let mergedLocales: LocaleMessages = mergeLocales(requiredLocales);
  return mergedLocales;
}

/**
 * 如果模块的文件短名一致，合并其模块导出对象
 * @param locales 语言定义对象的模块，可以是json,js,ts模块
 */
function mergeLocales(locales): LocaleMessages {
  return locales.keys().reduce((result, current) => {
    let locale = matchFileName(current);
    result[locale] = {
      ...result[locale],
      // For plain json file
      ...locales(current),
      // For js|ts file with default exports
      ...locales(current).default
    };
    return result;
  }, {});
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
