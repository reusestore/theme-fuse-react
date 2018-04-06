import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './react-table-defaults';
import './styles/index.css';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import {createGenerateClassName, jssPreset} from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers/index';
import {BrowserRouter} from 'react-router-dom';
import './fake-db/fake-db'
import {routes} from './fuse-configs/fuseRoutesConfig';
import {FuseLayout, FuseTheme, FuseSettings, FuseAuth} from '@fuse';
import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import jssExtend from 'jss-extend'
import QuickPanel from 'main/QuickPanel';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);

// const jss = create(jssPreset());
const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <BrowserRouter>
                <FuseAuth routes={routes}>
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
                        <FuseSettings/>
                        <QuickPanel/>
                    </FuseTheme>
                </FuseAuth>
            </BrowserRouter>
        </Provider>
    </JssProvider>
    , document.getElementById('root'));

registerServiceWorker();
