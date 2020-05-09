import * as React from 'react';
import { Button } from '@material-ui/core';

interface IAddCounterProps {
    setCounter: Function;
    counter: number;
}

class AddCounter extends React.Component<IAddCounterProps>{
    constructor(props: IAddCounterProps){
        super(props);
    }
    private addCounter = () => {
        const currentCounter = this.props.counter;
        this.props.setCounter(currentCounter + 1);
    }
    public render(){
        return (
        <div>
            <Button color='primary' onClick={this.addCounter} variant='contained'> Add Counter</Button>
        </div>);
    }
}
export default AddCounter;