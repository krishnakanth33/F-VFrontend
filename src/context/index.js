import React from 'react';

const AppContext = React.createContext({
    IsLoggedIn: false,
    setIsLoggedIn: () => {},
    userDetails: {},
    setUserDetails: () => {},
})

export default AppContext;