import {createStore} from 'redux'

const initialState = {
    user : {
        username : "Gamana",
        balance : 2500
    }
}

export const addMoney = () => ({
    type : 'addMoney',
    payload : amt
})

function reducer(state = initialState, action) {
    switch(action.type) {
        case "addMoney" :
            return {
                user : {
                    username : state.user.username,
                    balance : state.user.balance + action.payload
                }
            };
        default:
            return state
    }
}

const store = createStore(reducer);
export default store;
