import axios from 'axios/index';
import {getUserData} from './user.actions';
import {setselectedContactId} from './contacts.actions';

export const GET_CHAT = '[CHAT PANEL] GET CHAT';
export const REMOVE_CHAT = '[CHAT PANEL] REMOVE CHAT';
export const SEND_MESSAGE = '[CHAT PANEL] SEND MESSAGE';

export function getChat(contactId)
{
    return (dispatch, getState) => {
        const {id: userId} = getState().chatPanel.user;
        const request = axios.get('/api/chat-panel/get-chat', {
            contactId,
            userId
        });

        return request.then((response) => {

            dispatch(setselectedContactId(contactId));

            dispatch(getUserData());

            return dispatch({
                type   : GET_CHAT,
                payload: response.data
            });
        });
    }
}

export function removeChat()
{
    return {
        type: REMOVE_CHAT
    };
}

export function sendMessage(messageText, chatId, userId)
{
    const message = {
        'who'    : userId,
        'message': messageText,
        'time'   : new Date()
    };

    const request = axios.post('/api/chat-panel/send-message', {
        chatId,
        message
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : SEND_MESSAGE,
                payload: response.data
            })
        );
}