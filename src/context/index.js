import React from 'react';

const AppContext = React.createContext({
    IsLoggedIn: false,
    setIsLoggedIn: () => {},
})

export default AppContext;