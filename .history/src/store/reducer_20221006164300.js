import { fetchUser } from "../utils/fetchLocalStorage";
const userInfo = fetchUser()
const initState = {
    user: userInfo,
    foodItems: null
}
const actionType = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
   
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems
            }

    }
}

export { initState, actionType, userInfo }
export default reducer