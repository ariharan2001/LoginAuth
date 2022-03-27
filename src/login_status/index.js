
export const login = (token) => {
    localStorage.setItem('token',token)
}

export const logout = () => {
    localStorage.removeItem('token')
    window.location.reload();
}

export const isLogin = () => {
    if(localStorage.getItem('token')){
        return true;
    }
    return false;
}