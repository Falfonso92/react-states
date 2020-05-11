import React from 'react';
import { AppStore } from '../store';
const AppContext = React.createContext(new AppStore());
export default AppContext;