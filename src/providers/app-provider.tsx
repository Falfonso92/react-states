import React, { Component } from 'react';
import { AppContext } from '../context';
import { AppStore } from '../store';
class AppProvider extends Component{
    constructor(props: any){
        super(props);
    }

    public render(){
        console.log("render provider");
        return (
            <AppContext.Provider value={new AppStore()}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export default AppProvider;
