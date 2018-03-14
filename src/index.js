import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main/main';
import DevTools from 'mobx-react-devtools';

import { Provider } from 'mobx-react';
import BirdStore from './stores/mainStore';

const Root = (
    <Provider BirdStore={BirdStore}>
        <Main />
    </Provider>
);

//<TimerView mattia={new Mattia()} />,
ReactDOM.render(Root,
    document.getElementById('root')
);

