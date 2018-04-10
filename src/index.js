import history from './history';
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
import {Router} from 'react-router-dom';
import './fake-db/fake-db'
import {routes} from './fuse-configs/fuseRoutesConfig';
import {FuseLayout, FuseTheme, FuseSettings, FuseAuth} from '@fuse';
import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import jssExtend from 'jss-extend'
import QuickPanel from 'main/QuickPanel';
import store from 'store';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <Router history={history}>
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
            </Router>
        </Provider>
    </JssProvider>
    , document.getElementById('root'));

registerServiceWorker();
