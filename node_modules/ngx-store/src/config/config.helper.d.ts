import { WebStorageUtility } from '../utility/webstorage.utility';
export declare const CONFIG_PREFIX = "NGX-STORE_";
export declare class ConfigHelper {
    protected static _webStorageUtility: WebStorageUtility;
    static getItem(key: string): any;
    static setItem(key: string, item: any): any;
}
