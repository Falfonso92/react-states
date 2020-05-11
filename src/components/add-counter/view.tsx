import * as React from 'react';
import { Button } from '@material-ui/core';
import { AppContext } from '../../context';
import { AppStore } from '../../store';

interface IAddCounterProps {
}

class AddCounter extends React.Component<IAddCounterProps>{
    constructor(props: IAddCounterProps){
        super(props);
    }
    private addCounter = (context: AppStore) => {
        context.addCounter();
    }
    private addSecondCounter = (context: AppStore) => {
        context.addSecondCounter();
    }
    public render(){
        console.log("render Add Counter");
         //uncomment to show Context.Consumer in action 
        /*return (
            <AppContext.Consumer>
                {value => ( 
                    <div>
                        <Button color='primary' onClick={() => this.addCounter(value)} variant='contained'> Add Counter</Button>
                        &nbsp;&nbsp;
                        <Button color='primary' onClick={() => this.addSecondCounter(value)} variant='contained'> Add Second Counter</Button>
                    </div>
                )}
            </AppContext.Consumer>
       );*/
       /*return (
        <div>
            <Button color='primary' onClick={() => this.addCounter(this.context)} variant='contained'> Add Counter</Button>
            &nbsp;&nbsp;
            <Button color='primary' onClick={() => this.addSecondCounter(this.context)} variant='contained'> Add Second Counter</Button>
        </div>
       )*/

       return (
        <div>
            <Button color='primary' onClick={() => this.addCounter(this.context)} variant='contained'> Add Counter</Button>
            &nbsp;&nbsp;
            <Button color='primary' onClick={() => this.addSecondCounter(this.context)} variant='contained'> Add Second Counter</Button>
        </div>
       );
    }
}
AddCounter.contextType = AppContext;
export default AddCounter;