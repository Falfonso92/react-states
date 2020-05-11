import * as React from 'react';
import { AppContext } from '../../context';
import { AppStore } from '../../store';
import { observer } from 'mobx-react';
interface ICounterProps {
    appStore: AppStore;
}

@observer
class Counter extends React.Component<ICounterProps>{
    constructor(props: ICounterProps){
        super(props);
    }
    public render(){
        console.log("render counter");
        //uncomment to show Context.Consumer in action 
        /*return (
            <div>
                <AppContext.Consumer>
                    {context => (
                        <div>
                            <label>current count: {context.counter}</label>
                            <br/>
                            <label>current second counter: {context.secondCounter}</label>
                        </div>
                    )}
                </AppContext.Consumer>
            </div>
        );*/
        /*return (
            <div>
                <label>current count: {this.context.counter}</label>
                <br/>
                <label>current second counter: {this.context.secondCounter}</label>
            </div>
        );*/
        return (
            <div>
                <label>current count: {this.props.appStore.counter}</label>
            </div>
        );
    }
}
//Counter.contextType = AppContext;
export default Counter;