import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import {createGenerateClassName, jssPreset} from 'material-ui/styles';

import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import {BrowserRouter} from 'react-router-dom';
import './fake-db/fake-db'

import Main from './main/Main';
import {createMuiTheme, MuiThemeProvider} from 'material-ui';
import {routes} from './routes';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);

const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';
jss.options.createGenerateClassName = createGenerateClassName;

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
        subheading  : {
            fontSize: "1.4rem"
        }
    },
    status    : {
        danger: 'orange'
    }
});

console.info(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <JssProvider jss={jss}>
            <Provider store={store}>
                <BrowserRouter>
                    <Main routes={routes}/>
                </BrowserRouter>
            </Provider>
        </JssProvider>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
