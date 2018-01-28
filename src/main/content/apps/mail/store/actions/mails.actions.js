import axios from 'axios/index';
import {getFilters} from './filters.actions';
import {getFolders} from './folders.actions';
import {getLabels} from './labels.actions';

export const GET_MAILS = '[MAIL APP] GET MAILS';
export const SET_CURRENT_MAIL = '[MAIL APP] SET CURRENT MAIL';

export function getData(match)
{

    return (dispatch) => {
        Promise.all([
            dispatch(getFilters()),
            dispatch(getFolders()),
            dispatch(getLabels())
        ]).then(
            () => dispatch(getMails(match)));
    }
}

export function getMails(match)
{
    const request = axios.get('/api/mail-app/mails', {
        params: match.params
    });

    return (dispatch) =>
        request.then((response) =>
            Promise.all([
                dispatch({
                    type   : GET_MAILS,
                    match  : match,
                    payload: response.data
                })
            ]).then(() => {
                // if ( match.params.mailId )
                // {
                    return dispatch(setCurrentMail(match.params.mailId));
                // }
            })
        );
}

export function setCurrentMail(currentMailId)
{
    return {
        type   : SET_CURRENT_MAIL,
        payload: currentMailId
    }
}

