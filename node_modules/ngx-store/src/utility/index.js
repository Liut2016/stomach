import { Config } from '../config/index';
import { WebStorageUtility } from './webstorage.utility';
import { cookiesStorage } from './storage/cookies-storage';
import { SharedStorageUtility } from './shared-storage.utility';
import { sharedStorage } from './storage/shared-storage';
export var localStorageUtility = new WebStorageUtility(localStorage, Config.prefix, Config.previousPrefix);
export var sessionStorageUtility = new WebStorageUtility(sessionStorage, Config.prefix, Config.previousPrefix);
export var cookiesStorageUtility = new WebStorageUtility(cookiesStorage, Config.prefix, Config.previousPrefix);
export var sharedStorageUtility = new SharedStorageUtility(sharedStorage, Config.prefix, Config.prefix);
//# sourceMappingURL=index.js.map