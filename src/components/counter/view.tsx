import * as React from 'react';
interface ICounterProps {
    count:number
}


class Counter extends React.Component<ICounterProps>{
    constructor(props: ICounterProps){
        super(props);
    }
    public render(){
        console.log("render counter");
        return (
            <div>
                <label>current count: {this.props.count}</label>
            </div>
        );
    }
}
export default Counter;