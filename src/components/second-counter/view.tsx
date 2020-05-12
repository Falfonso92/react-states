import * as React from 'react';
interface ISecondCounterProps {
    secondCount:number
}

class SecondCounter extends React.Component<ISecondCounterProps>{
    constructor(props: ISecondCounterProps){
        super(props);
    }
    public render(){
        console.log("render second counter");
        return (
            <div>
                <label>current second count: {this.props.secondCount}</label>
            </div>
        );
    }
}
export default SecondCounter;