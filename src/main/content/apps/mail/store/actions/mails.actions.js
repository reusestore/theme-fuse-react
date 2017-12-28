import axios from 'axios/index';
import {getFilters} from './filters.actions';
import {getFolders} from './folders.actions';
import {getLabels} from './labels.actions';

export const GET_MAILS = '[MAIL APP] GET MAILS';

export function getData()
{
    return (dispatch) => {
        Promise.all([
            dispatch(getFilters()),
            dispatch(getFolders()),
            dispatch(getLabels())
        ]).then(
            () => dispatch(getMails()));
    }
}

export function getMails()
{
    const request = axios.get('/api/mail-app/mails');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MAILS,
                payload: response.data
            })
        );
}
