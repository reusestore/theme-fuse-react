import axios from 'axios/index';
import {setUserData} from 'auth/store/actions/user.actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({username, password})
{
    const request = axios.get('/api/auth', {
        data: {
            username,
            password
        }
    });
    return (dispatch) =>
        request.then((response) => {
            if ( !response.data.error )
            {
                dispatch(setUserData(response.data));
                return dispatch({
                    type: LOGIN_SUCCESS
                });
            }
            else
            {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: response.data.error
                });
            }
        });
}
