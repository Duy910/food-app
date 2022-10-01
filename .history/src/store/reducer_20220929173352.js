import { fetchUser } from "../utils/fetchLocalStorage";
const initState = {
    user: null,
}
const actionType = {
    SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user
            }

    }
}

export { initState, actionType }
export default reducer