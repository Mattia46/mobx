import React from 'react';
import { render } from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export class Mattia {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action.bound
    reset() {
        this.timer = 0;
    }
}

export const TimerView = observer(({ mattia }) => (
    <button onClick={mattia.reset}>Seconds passed: {mattia.timer}</button>
));

