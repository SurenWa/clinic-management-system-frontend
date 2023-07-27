import React from 'react';
import ReactDOM from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persister } from 'store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BASE_PATH } from 'config';
import { ConfigProvider } from 'contexts/ConfigContext';

// style + assets
import 'assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <ConfigProvider>
                <BrowserRouter basename={BASE_PATH}>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </PersistGate>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();