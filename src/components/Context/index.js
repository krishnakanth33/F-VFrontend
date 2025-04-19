import React from 'react'

const ModeContext = React.createContext({
  ordersplacedbyUserList: [],
  updatingordersplacedbyUser: () => {},
})

export default ModeContext
