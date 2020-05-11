import React from 'react';
const AppContext = React.createContext(
    {
        counter: 0, 
        addCounter: () => {},
        secondCounter: 0,
        addSecondCounter: () => {}
    });
export default AppContext;