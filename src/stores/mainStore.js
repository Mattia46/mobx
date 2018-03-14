import { observable, action, computed } from 'mobx';

class BirdStore {
    birds = [];

    @computed get birdCount() {
        return this.birds.length;
    }

    @action addBird = (bird) => {
        console.log('her', bird);
        this.birds.push(bird);
    }
}

const store = new BirdStore();
export default store;
