const fetchUser = () => {
    const userInfo = localStorage.getItem('data') !== 'undefined' ?
    JSON.parse(localStorage.getItem('data')) : localStorage.clear()
    return userInfo
}

export { fetchUser }