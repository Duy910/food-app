const userInfo = localStorage.getItem('data') !== undefined ?
                JSON.parse(localStorage.getItem('data')) : localStorage.clear()