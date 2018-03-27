import axios from 'axios/index';

export const GET_WIDGETS = '[ANALYTICS DASHBOARD APP] GET WIDGETS';
export const SET_WIDGET1_DATASET = '[ANALYTICS DASHBOARD APP] SET WIDGET1 DATASET';
export const SET_WIDGET5_DATASET = '[ANALYTICS DASHBOARD APP] SET WIDGET5 DATASET';

export function getWidgets()
{
    const request = axios.get('/api/analytics-dashboard-app/widgets');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_WIDGETS,
                payload: response.data
            })
        );
}

export function setWidget1Dataset(value)
{
    return {
        type   : SET_WIDGET1_DATASET,
        payload: value
    };
}
export function setWidget5Dataset(value)
{
    return {
        type   : SET_WIDGET5_DATASET,
        payload: value
    };
}