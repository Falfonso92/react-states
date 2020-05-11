import React, { Component } from 'react';
import { AppContext } from '../context';

interface IState{
    count: number;
    secondCounter: number;
}

class AppProvider extends Component{
    public state: IState;
    constructor(props: any){
        super(props);
        this.state = {
            count: 0,
            secondCounter: 0
        }
    }

    private addCounter = () =>{
        const currentCount = this.state.count;
        this.setState({count: currentCount + 1});
    }

    private addSecondCounter = () => {
        const currentCount = this.state.secondCounter;
        this.setState({secondCounter: currentCount + 1});
    }

    public render(){
        console.log("render provider");
        return (
            <AppContext.Provider value={
                {
                    counter: this.state.count, 
                    secondCounter: this.state.secondCounter,
                    addCounter: this.addCounter,
                    addSecondCounter: this.addSecondCounter
                    }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export default AppProvider;
