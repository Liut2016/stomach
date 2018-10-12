import { WebStorageServiceInterface } from '../service';
import { WebStorageUtility } from '../utility/webstorage.utility';
import { DecoratorConfig } from '../ngx-store.types';
export interface CacheItemInterface {
    key: string;
    name: string;
    targets: Array<Object>;
    services: Array<WebStorageServiceInterface>;
    utilities: Array<UtilityEntry>;
}
export interface UtilityEntry {
    utility: WebStorageUtility;
    config?: DecoratorConfig;
}
export declare class CacheItem implements CacheItemInterface {
    name: string;
    targets: Array<Object>;
    services: Array<WebStorageServiceInterface>;
    utilities: Array<UtilityEntry>;
    currentTarget: Object;
    protected proxy: any;
    protected _key: string;
    protected initializedTargets: Set<Object>;
    constructor(cacheItem: CacheItemInterface);
    readonly key: string;
    saveValue(value: any, config?: DecoratorConfig, source?: WebStorageUtility): any;
    getProxy(value?: any, config?: DecoratorConfig): any;
    readValue(config?: DecoratorConfig): any;
    addTargets(targets: Array<any>): void;
    addServices(services: Array<WebStorageServiceInterface>): void;
    addUtilities(utilityEntries: Array<UtilityEntry>): void;
    resetProxy(): void;
    propagateChange(value: any, source: any): void;
}
