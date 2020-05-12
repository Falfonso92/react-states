import * as React from 'react';
import { Button } from '@material-ui/core';

interface IAddCounterProps{
    addCounter: Function;
    addSecondCounter:Function
}

class AddCounter extends React.Component<any>{
    constructor(props: any){
        super(props);
        console.log(props);
    }
    private addCounter = () => {
        this.props.addCounter();
    }
    private addSecondCounter = () => {
        this.props.addSecondCounter();
    }
    public render(){
        console.log("render Add Counter");

       return (
        <div>
            <Button color='primary' onClick={this.addCounter} variant='contained'> Add Counter</Button>
            &nbsp;&nbsp;
            <Button color='primary' onClick={this.addSecondCounter} variant='contained'> Add Second Counter</Button>
        </div>
       );
    }
}
export default AddCounter;