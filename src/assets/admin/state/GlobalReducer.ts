import {Reducer} from "react";

export type Action = {
    type: 'SIDEBAR_HIDE' | 'SIDEBAR_SHOW' | 'PRODUCT_GET',
    payload: any
}

export type GlobalState = {
    sidebarShow: boolean | 'responsive',
    products : Array<any>
}

const GlobalReducer: Reducer<GlobalState, Action> = (state, action): GlobalState => {
    switch (action.type) {
        case 'SIDEBAR_HIDE':
            return {
                ...state,
                sidebarShow: false,
            };
        case 'SIDEBAR_SHOW':
            return {
                ...state,
                sidebarShow: true,
            };
        case 'PRODUCT_GET':
            return {
                ...state,
                products: action.payload, // todo action.payload
            };
        default:
            throw Error('Unknown action');
    }
}

export default GlobalReducer;
