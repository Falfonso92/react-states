import * as React from 'react';
interface ICounterProps {
    counter: number;
}

class Counter extends React.Component<ICounterProps>{
    constructor(props: ICounterProps){
        super(props);
    }
    public render(){
        return (
        <div>
            <label>current count: {this.props.counter}</label>
        </div>);
    }
}
export default Counter;