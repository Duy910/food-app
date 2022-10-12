const fetchUser = () => {
    const userInfo = localStorage.getItem('data') !== 'undefined' ?
    JSON.parse(localStorage.getItem('data')) : localStorage.clear()
    return userInfo
}

const fetchCartItem = () => {
    const cartInfo = localStorage.getItem('Cartitems') !== 'undefined' ?
    JSON.parse(localStorage.getItem('Cartitems')) : localStorage.clear()
    return cartInfo
}

export { fetchUser, fetchCartItem }