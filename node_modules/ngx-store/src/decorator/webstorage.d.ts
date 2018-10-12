import { CookieStorageDecoratorConfig, LocalStorageDecoratorConfig, SessionStorageDecoratorConfig, WebStorageDecoratorConfig } from '../ngx-store.types';
export declare function LocalStorage(keyOrConfig?: string | LocalStorageDecoratorConfig, config?: LocalStorageDecoratorConfig): (target: any, propertyName: string) => void;
export declare function SessionStorage(keyOrConfig?: string | SessionStorageDecoratorConfig, config?: SessionStorageDecoratorConfig): (target: any, propertyName: string) => void;
export declare function CookieStorage(keyOrConfig?: string | CookieStorageDecoratorConfig, config?: CookieStorageDecoratorConfig): (target: any, propertyName: string) => void;
export declare function SharedStorage(keyOrConfig?: string | WebStorageDecoratorConfig, config?: WebStorageDecoratorConfig): (target: any, propertyName: string) => void;
