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
import {routes} from './routes';
import FuseLayout from './core/components/FuseLayout/FuseLayout';
import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import FuseTheme from './core/components/FuseTheme/FuseTheme';

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

ReactDOM.render(
    <JssProvider jss={jss}>
        <Provider store={store}>
            <BrowserRouter>
                <FuseTheme>
                    <FuseLayout
                        routes={routes}
                        toolbar={
                            <MainToolbar/>
                        }
                        navbarHeader={
                            <MainNavbarHeader/>
                        }
                        navbarContent={
                            <MainNavbarContent/>
                        }
                        footer={
                            <MainFooter/>
                        }
                    />
                </FuseTheme>
            </BrowserRouter>
        </Provider>
    </JssProvider>
    , document.getElementById('root'));
registerServiceWorker();
