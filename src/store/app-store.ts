import { observable, autorun} from 'mobx';

class AppStore {
    @observable public counter: number;
    @observable public secondCounter: number; 

    constructor(){
        this.counter = 0;
        this.secondCounter = 0;
    }

    public addCounter(){
        this.counter = this.counter + 1;
    }

    public addSecondCounter(){
        this.secondCounter = this.secondCounter + 1;
    }

}
export default AppStore;