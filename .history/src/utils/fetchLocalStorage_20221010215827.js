const fetchUser = () => {
    const userInfo = localStorage.getItem('data') !== 'undefined' ?
    JSON.parse(localStorage.getItem('data')) : localStorage.clear()
    return userInfo
}

const fetchCartItem = () => {
    const CartItem = localStorage.getItem('cartitems') !== 'undefined' ?
    JSON.parse(localStorage.getItem('cartitems')) : localStorage.clear()
    return CartItem
}

export { fetchUser, fetchCartItem }