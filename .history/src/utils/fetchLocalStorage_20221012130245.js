const fetchUser = () => {
    const userInfo = localStorage.getItem('data') !== 'undefined' ?
    JSON.parse(localStorage.getItem('data')) : localStorage.clear()
    return userInfo
}
const fetchCart = () => {
    const cartInfo = localStorage.getItem('items') !== 'undefined' ?
    JSON.parse(localStorage.getItem('items')) : localStorage.clear()
    return cartInfo
}



export { fetchUser, fetchCart }