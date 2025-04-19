import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';

import './App.css';

import ProtectedRoute from './components/ProtectedRoute';
import AppContext from './context';
import Home from './components/Home';
import Orders from './components/Orders';
import PlaceOrderWrapper from './components/PlaceOrderWrapper';
import SignUpWrapper from './components/SignUpWrapper';
import SignInWrapper from './components/SignInWrapper';
import Layout from './components/Layout';

class App extends Component {
  state = {
    IsLoggedIn: false,
  };

  setIsLoggedIn = () => {
    this.setState({ IsLoggedIn: true});
  }
  render() {
    const { IsLoggedIn } = this.state;
    return (
      <AppContext.Provider value={{ IsLoggedIn, setIsLoggedIn: this.setIsLoggedIn }}>
        <Router>
          <Routes>
            {/* Routes WITHOUT Navbar/Sidebar */}
            <Route path="/signin" element={<SignInWrapper />} />
            <Route path="/signup" element={<SignUpWrapper/>} />

            {/* Routes WITH Navbar/Sidebar */}
            <Route element={<Layout />}>
              <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
              <Route path="/myorders" element={<ProtectedRoute> <Orders /> </ProtectedRoute>} />
              <Route path="/placeorder/:id" element={<ProtectedRoute> <PlaceOrderWrapper /> </ProtectedRoute>} />
            </Route> 
          </Routes>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
