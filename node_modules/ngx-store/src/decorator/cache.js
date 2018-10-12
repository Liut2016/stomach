import { CacheItem } from './cache-item';
import { debug } from '../config/config';
var Cache = /** @class */ (function () {
    function Cache() {
    }
    Cache.getCacheFor = function (cacheCandidate) {
        var cacheItem = Cache.get(cacheCandidate.key);
        if (!cacheItem) {
            cacheItem = new CacheItem(cacheCandidate);
            debug.log("Created new CacheItem for " + cacheCandidate.name + " for " + cacheItem.utilities[0].utility.getStorageName());
            Cache.set(cacheItem);
            return cacheItem;
        }
        debug.log("Loaded prior CacheItem of " + cacheItem.name + " for " + cacheCandidate.utilities[0].utility.getStorageName());
        cacheItem.addTargets(cacheCandidate.targets);
        cacheItem.addServices(cacheCandidate.services);
        cacheItem.addUtilities(cacheCandidate.utilities);
        Cache.set(cacheItem);
        return cacheItem;
    };
    Cache.remove = function (cacheItem) {
        return Cache.items.delete(cacheItem.key);
    };
    Cache.get = function (key) {
        return Cache.items.get(key);
    };
    Cache.set = function (cacheItem) {
        if (!Cache.get(cacheItem.key)) {
            debug.log('CacheItem for ' + cacheItem.key, cacheItem);
        }
        Cache.items.set(cacheItem.key, cacheItem);
    };
    Cache.items = new Map();
    return Cache;
}());
export { Cache };
//# sourceMappingURL=cache.js.map