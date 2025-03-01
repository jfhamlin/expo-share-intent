import { AndroidShareIntent, ShareIntent, ShareIntentOptions } from "./ExpoShareIntentModule.types";
export declare const getScheme: (options?: ShareIntentOptions) => string | string[] | null;
export declare const getShareExtensionKey: (options?: ShareIntentOptions) => string;
export declare function parseJson<T>(value: string, defaultValue?: T | null): T | null;
export declare const parseShareIntent: (value: string | AndroidShareIntent, options: ShareIntentOptions) => ShareIntent;
//# sourceMappingURL=utils.d.ts.map