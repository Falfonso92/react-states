import React, { Component } from 'react';
import { AppContext } from '../context';
class AppProvider extends Component{
    constructor(props: any){
        super(props);
    }

    public render(){
        console.log("render provider");
        return (
            <AppContext.Provider value={{}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export default AppProvider;
