export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';

export function setUserData(data)
{
    return {
        type   : SET_USER_DATA,
        payload: data
    }
}

export function removeUserData()
{
    return {
        type: REMOVE_USER_DATA
    }
}

export function logoutUser()
{
    return {
        type: USER_LOGGED_OUT
    }
}
