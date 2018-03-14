import React, { Component } from 'react';
import { render } from 'react-dom';
//import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class Main extends Component {
    handleSubmit = (e) => {
        this.props.BirdStore.addBird(this.bird);
    }

    render() {
        const {BirdStore} = this.props;
        return(
            <div>
                <h2>You have {BirdStore.birdCount}</h2>
                <input type="text" placeholder="Insert here" ref={input => this.bird = input} />
                <button onClick={() => this.handleSubmit()}>Add</button>
            </div>
        );
    }

}

export default Main;
//export class Mattia {
    //@observable timer = 0;

    //constructor() {
        //setInterval(() => {
            //this.timer += 1;
        //}, 1000);
    //}

    //@action.bound
    //reset() {
        //this.timer = 0;
    //}
//}

//export const TimerView = observer(({ mattia }) => (
    //<button onClick={mattia.reset}>Seconds passed: {mattia.timer}</button>
//));

