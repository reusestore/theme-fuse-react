import * as Actions from '../actions';

const initialState = {
    entities    : [],
    currentMail : null,
    loadedParams: {}
};

const mailsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAILS:

            let loadedParams = {
                id   : '',
                value: ''
            };

            ['labelHandle', 'filterHandle', 'folderHandle'].forEach((param) => {
                    if ( action.match.params[param] )
                    {
                        loadedParams = {
                            id   : param,
                            value: action.match.params[param]
                        };
                    }
                }
            );

            return {
                ...state,
                entities: [...action.payload],
                loadedParams
            };

        case Actions.SET_CURRENT_MAIL:

            const currentMail = state.entities.find((mail) => mail.id === action.payload);

            return {
                ...state,
                currentMail: currentMail ? {...currentMail} : null
            };
        default:
            return state;
    }
};

export default mailsReducer;