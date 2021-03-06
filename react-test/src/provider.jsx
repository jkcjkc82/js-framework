import React from 'react';
import {Provider} from 'react-redux';

import MasterView from './master.jsx';
import DetailView from './detail.jsx';

import store from './store/index.js';

class AppProvider extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>React App Test</h1>

                    <div className="row">
                        <MasterView />
                        <DetailView />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default AppProvider;
