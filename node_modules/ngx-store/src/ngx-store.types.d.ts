export interface Webstorable {
    save(): void;
}
export declare type WebstorableObject = Webstorable & {
    [prop: string]: any;
};
export declare type WebstorableArray<T> = Webstorable & Array<T>;
export interface WebStorageDecoratorConfig {
    key?: string;
}
export interface StorageDecoratorConfig extends WebStorageDecoratorConfig {
    prefix?: string;
    mutate?: boolean;
}
export interface LocalStorageDecoratorConfig extends StorageDecoratorConfig {
}
export interface SessionStorageDecoratorConfig extends StorageDecoratorConfig {
}
export interface CookieStorageDecoratorConfig extends StorageDecoratorConfig {
    expires?: Date;
}
export declare type DecoratorConfig = CookieStorageDecoratorConfig;
