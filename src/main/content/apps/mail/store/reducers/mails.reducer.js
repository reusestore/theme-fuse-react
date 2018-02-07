import * as Actions from '../actions';
import _ from 'lodash';

const initialState = {
    entities       : [],
    currentMail    : null,
    loadedParams   : {},
    routeParams    : {},
    selectedMailIds: [],
    searchText     : ''
};

const mailsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAILS:
        {

            let loadedParams = {
                id   : '',
                value: ''
            };

            ['labelHandle', 'filterHandle', 'folderHandle'].forEach((param) => {
                    if ( action.routeParams[param] )
                    {
                        loadedParams = {
                            id   : param,
                            value: action.routeParams[param]
                        };
                    }
                }
            );

            return {
                ...state,
                entities       : _.keyBy(action.payload, 'id'),
                selectedMailIds: _.isEqual(state.loadedParams, loadedParams) ? [...state.selectedMailIds] : [],
                searchText     : _.isEqual(state.loadedParams, loadedParams) ? state.searchText : '',
                routeParams    : action.routeParams,
                loadedParams
            };
        }
        case Actions.UPDATE_MAILS:
        {
            return {
                ...state,
                entities: _.keyBy(action.payload, 'id')
            };
        }
        case Actions.SET_CURRENT_MAIL:
        {

            const currentMail = state.entities[action.payload];

            return {
                ...state,
                currentMail: currentMail ? {...currentMail} : null
            };
        }
        case Actions.UPDATE_MAIL:
        {
            const mail = action.payload;

            return {
                ...state,
                entities   : {
                    ...state.entities,
                    [mail.id]: {...mail}
                },
                currentMail: state.currentMail.id === mail.id ? {...mail} : state.currentMail
            };
        }
        case Actions.SELECT_ALL_MAILS:
        {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedMailIds = arr.map(mail => mail.id);

            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.DESELECT_ALL_MAILS:
        {
            return {
                ...state,
                selectedMailIds: []
            };
        }
        case Actions.SELECT_MAILS_BY_PARAMETER:
        {
            const filter = action.payload;
            const arr = Object.keys(state.entities).map(k => state.entities[k]);
            const selectedMailIds = arr.filter(mail => mail[filter.parameter] === filter.value)
                .map(mail => mail.id);
            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.TOGGLE_IN_SELECTED_MAILS:
        {

            const mailId = action.mailId;

            let selectedMailIds = [...state.selectedMailIds];

            if ( selectedMailIds.find(id => id === mailId) !== undefined )
            {
                selectedMailIds = selectedMailIds.filter(id => id !== mailId);
            }
            else
            {
                selectedMailIds = [...selectedMailIds, mailId];
            }

            return {
                ...state,
                selectedMailIds
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
            return state;
    }
};

export default mailsReducer;