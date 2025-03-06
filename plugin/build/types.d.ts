export type CustomParameter = {
    [key: string]: string;
};
export type Parameters = {
    iosActivationRules?: {
        [key: string]: number | boolean | string;
    } | string;
    iosShareExtensionName?: string;
    iosAppGroupIdentifier?: string;
    iosShareExtensionBundleIdentifier?: string;
    androidMainActivityAttributes?: CustomParameter;
    androidIntentFilters?: ("text/*" | "image/*" | "video/*" | "*/*")[];
    androidMultiIntentFilters?: ("image/*" | "video/*" | "*/*")[];
    disableExperimental?: boolean;
    preprocessorFunctionFile?: string;
    preprocessorFunctionJS?: string;
    preprocessorInjectJS?: string;
    disablePreprocessor?: boolean;
    disableAndroid?: boolean;
    disableIOS?: boolean;
};
