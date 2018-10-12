import { ClearType, WebStorageConfigInterface } from '../config/index';
import { WebStorageUtility } from '../utility/webstorage.utility';
import { Observable } from 'rxjs';
import { NgxStorageEvent } from '../utility/storage/storage-event';
import { Resource } from './resource';
export declare abstract class WebStorageService {
    utility: WebStorageUtility;
    static keys: Array<string>;
    protected _changes: Observable<NgxStorageEvent>;
    constructor(utility: WebStorageUtility);
    /**
     * Gets keys for stored variables created by ngx-store,
     * ignores keys that have not been created by decorators and have no prefix at once
     */
    readonly keys: Array<string>;
    readonly config: WebStorageConfigInterface;
    get(key: string): any;
    /**
     * Returns new data Resource for given key exposing builder design pattern
     * designed for complex nested data structures
     * @param {string} key
     * @returns {any}
     */
    load(key: string): Resource<any>;
    set<T>(key: string, value: T): T;
    update(key: string, changes: any): any;
    remove(key: string): void;
    observe(key?: string, exactMatch?: boolean): Observable<NgxStorageEvent>;
    /**
     * Clears chosen data from Storage
     * @param clearType 'prefix' | 'decorators' | 'all'
     * @param prefixOrClass defines the prefix or class (not its instance) whose decorators should be cleared
     */
    clear(clearType?: ClearType, prefixOrClass?: string | object): void;
    protected generateEvent(key: string, newValue: any, oldValue?: any): NgxStorageEvent;
    protected mapNativeEvent(ev: StorageEvent): NgxStorageEvent;
}
