import history from 'history.js';
import {setDefaultSettings} from 'store/actions/fuse';
import {FuseDefaultSettings} from '@fuse';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';

export function setUserData(user)
{
    return (dispatch) => {
        dispatch(setDefaultSettings(user.data.settings));
        dispatch({
            type   : SET_USER_DATA,
            payload: user
        })
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
    history.push({
        pathname: '/'
    });
    return (dispatch) => {
        dispatch(setDefaultSettings(FuseDefaultSettings));
        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}
