import * as React from 'react';
import { AppStore } from '../../store';
import { observer } from 'mobx-react';
import { AppContext } from '../../context';
interface ISeconCounterProps {
}

@observer
class SecondCounter extends React.Component<ISeconCounterProps>{
    constructor(props: ISeconCounterProps){
        super(props);
    }
    public render(){
        console.log("render second counter");
        return (
            <div>
                <label>current second count: {this.context.secondCounter}</label>
            </div>
        );
    }
}
SecondCounter.contextType = AppContext;
export default SecondCounter;