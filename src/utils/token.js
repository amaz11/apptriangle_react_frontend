export const getTokenFromLocalStorage = (token) => {
    const localToken = localStorage.getItem('X_auth_token')
    if (localToken === null || localToken === undefined) {
        return token
    }
    return localToken;
};
