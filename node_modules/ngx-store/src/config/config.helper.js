import { WebStorageUtility } from '../utility/webstorage.utility';
export var CONFIG_PREFIX = 'NGX-STORE_';
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper() {
    }
    ConfigHelper.getItem = function (key) {
        return ConfigHelper._webStorageUtility.get(key);
    };
    ConfigHelper.setItem = function (key, item) {
        return ConfigHelper._webStorageUtility.set(key, item);
    };
    ConfigHelper._webStorageUtility = new WebStorageUtility(localStorage, CONFIG_PREFIX);
    return ConfigHelper;
}());
export { ConfigHelper };
//# sourceMappingURL=config.helper.js.map