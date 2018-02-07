import axios from 'axios/index';
import {getFilters} from './filters.actions';
import {getFolders} from './folders.actions';
import {getLabels} from './labels.actions';

export const GET_MAILS = '[MAIL APP] GET MAILS';
export const UPDATE_MAILS = '[MAIL APP] UPDATE MAILS';
export const SET_CURRENT_MAIL = '[MAIL APP] SET CURRENT MAIL';
export const TOGGLE_STAR = '[MAIL APP] TOGGLE STAR CURRENT MAIL';
export const TOGGLE_IMPORTANT = '[MAIL APP] TOGGLE IMPORTANT CURRENT MAIL';
export const UPDATE_MAIL = '[MAIL APP] UPDATE MAIL';
export const SELECT_ALL_MAILS = '[MAILS] SELECT ALL MAILS';
export const DESELECT_ALL_MAILS = '[MAILS] DESELECT ALL MAILS';
export const TOGGLE_IN_SELECTED_MAILS = '[MAILS] TOGGLE IN SELECTED MAILS';
export const SELECT_MAILS_BY_PARAMETER = '[MAILS] SELECT MAILS BY PARAMETER';
export const SET_FOLDER_ON_SELECTED_MAILS = '[MAILS] SET FOLDER ON SELECTED MAILS';
export const TOGGLE_LABEL_ON_SELECTED_MAILS = '[MAILS] TOGGLE LABEL ON SELECTED MAILS';
export const SET_SEARCH_TEXT = '[MAILS] SET SEARCH TEXT';

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

export function getMails(routeParams)
{
    const request = axios.get('/api/mail-app/mails', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            Promise.all([
                dispatch({
                    type       : GET_MAILS,
                    routeParams: routeParams,
                    payload    : response.data
                })
            ]).then(() => dispatch(setCurrentMail(routeParams.mailId)))
        );
}

export function updateMails()
{
    return (dispatch, getState) => {

        const {routeParams, currentMail} = getState().mailApp.mails;

        const request = axios.get('/api/mail-app/mails', {
            params: routeParams
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type   : UPDATE_MAILS,
                    payload: response.data
                })
            ]).then(() => {
                if ( !currentMail )
                {
                    return;
                }
                dispatch({
                    type   : SET_CURRENT_MAIL,
                    payload: currentMail.id
                })
            })
        );
    }
}

export function setCurrentMail(currentMailId)
{
    return {
        type   : SET_CURRENT_MAIL,
        payload: currentMailId
    }
}

export function toggleStar(mail)
{
    const newMail = {
        ...mail,
        starred: !mail.starred
    };
    return (dispatch) => (
        Promise.all([
            dispatch({type: TOGGLE_STAR}),
            dispatch(updateMail(newMail))
        ]).then(() => dispatch(updateMails()))
    )
}

export function toggleImportant(mail)
{
    const newMail = {
        ...mail,
        important: !mail.important
    };

    return (dispatch) => (
        Promise.all([
            dispatch({type: TOGGLE_IMPORTANT}),
            dispatch(updateMail(newMail))
        ]).then(() => dispatch(updateMails()))
    )
}

export function updateMail(mail)
{
    const request = axios.post('/api/mail-app/update-mail', mail);

    return (dispatch) =>
        request.then((response) => {
                return dispatch({
                    type   : UPDATE_MAIL,
                    payload: response.data
                })
            }
        );
}

export function selectAllMails()
{
    return {
        type: SELECT_ALL_MAILS
    }
}

export function deselectAllMails()
{
    return {
        type: DESELECT_ALL_MAILS
    }
}

export function selectMailsByParameter(parameter, value)
{
    return {
        type   : SELECT_MAILS_BY_PARAMETER,
        payload: {
            parameter,
            value
        }
    }
}

export function toggleInSelectedMails(mailId)
{
    return {
        type: TOGGLE_IN_SELECTED_MAILS,
        mailId
    }
}

export function setSearchText(event)
{
    return {
        type      : SET_SEARCH_TEXT,
        searchText: event.target.value.toLowerCase()
    }
}

export function setFolderOnSelectedMails(id)
{
    return (dispatch, getState) => {
        const selectedMailIds = getState().mailApp.mails.selectedMailIds;

        const request = axios.post('/api/mail-app/set-folder', {
            selectedMailIds,
            folderId: id
        });

        return request.then((response) => {
                dispatch({
                    type: SET_FOLDER_ON_SELECTED_MAILS
                });
                return dispatch(updateMails())
            }
        );
    }
}

export function toggleLabelOnSelectedMails(id)
{
    return (dispatch, getState) => {
        const selectedMailIds = getState().mailApp.mails.selectedMailIds;

        const request = axios.post('/api/mail-app/toggle-label', {
            selectedMailIds,
            labelId: id
        });

        return request.then((response) => {
                dispatch({
                    type: TOGGLE_LABEL_ON_SELECTED_MAILS
                });
                return dispatch(updateMails())
            }
        );
    }
}