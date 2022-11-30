
import { ActionTypes } from "../types";

const initialState = {
    isLatest:true,
    latestDeposit:[]
}

const latestDepositReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.POOL_DETAIL:
            return {
                ...state,
                isLatest:payload.isLatest,
                latestDeposit:payload.latestDeposit
            };
        default:
            return state;
    }
}

export default latestDepositReducer;