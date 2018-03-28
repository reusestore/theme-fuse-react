import axios from 'axios/index';

export const GET_SHORTCUTS = '[SHORTCUTS] GET SHORTCUTS';
export const TOGGLE_IN_SHORTCUTS = '[SHORTCUTS] TOGGLE IN SHORTCUTS';

export function getShortcuts()
{
    const request = axios.get('/api/shortcuts/get');
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_SHORTCUTS,
                payload: response.data
            })
        );
}

export function toggleInShortcuts(id)
{
    const request = axios.post('/api/shortcuts/toggle', {
        id
    });
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : TOGGLE_IN_SHORTCUTS,
                payload: response.data
            })
        );
}