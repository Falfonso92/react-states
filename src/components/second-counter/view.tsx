import * as React from 'react';
import { AppStore } from '../../store';
import { observer } from 'mobx-react';
interface ISeconCounterProps {
    appStore: AppStore;
}

@observer
class secondCounter extends React.Component<ISeconCounterProps>{
    constructor(props: ISeconCounterProps){
        super(props);
    }
    public render(){
        console.log("render second counter");
        return (
            <div>
                <label>current second count: {this.props.appStore.secondCounter}</label>
            </div>
        );
    }
}
export default secondCounter;