import { Reducer } from "react";
export declare type Action = {
    type: 'SIDEBAR_HIDE' | 'SIDEBAR_SHOW' | 'PRODUCT_GET';
    payload: any;
};
export declare type GlobalState = {
    sidebarShow: boolean | 'responsive';
    products: Array<any>;
};
declare const GlobalReducer: Reducer<GlobalState, Action>;
export default GlobalReducer;
