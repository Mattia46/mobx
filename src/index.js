import React from 'react';
import ReactDOM from 'react-dom';
import { Mattia, TimerView } from './main/main';
import DevTools from 'mobx-react-devtools';

ReactDOM.render(
    <TimerView mattia={new Mattia()} />,
	document.getElementById('root')
);

