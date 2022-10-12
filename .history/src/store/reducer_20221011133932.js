import { fetchUser, fetchCartItem } from "../utils/fetchLocalStorage";
const userInfo = fetchUser()
const cartInfo = fetchCartItem()
const initState = {
    user: userInfo,
    foodItems: null,
    cartItems: cartInfo,
}
const actionType = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_CART_ITEMS: 'SET_CART_ITEMS',

}

const reducer = (state, action) => {
    
    switch (action.type) {

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
        case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: [...action.cartItems, action.cartItems]
            }


    }

}

export { initState, actionType, userInfo, cartInfo }
export default reducer