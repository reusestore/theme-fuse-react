import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MailApp from './main/content/apps/mail/MailApp';

import './fake-db/fake-db'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <main>
                <Switch>
                    <Route path="/mail" component={MailApp} />
                    <Route path="/" component={MailApp} />
                </Switch>
            </main>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
