import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import './App.css';

import SignInWrapper from './components/SignInWrapper';
import SignUpWrapper from './components/SignUpWrapper';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AppContext from './context';
import Home from './components/Home';
import Orders from './components/Orders';
import PlaceOrderWrapper from './components/PlaceOrderWrapper';

class App extends Component {
  state = {
    userDetails: {},
  };

  setUserDetails = (details) => {
    this.setState({ userDetails: details });
  };

  render() {
    const { userDetails } = this.state;

    return (
      <AppContext.Provider value={{ userDetails, setUserDetails: this.setUserDetails }}>
        <Router>
          <Routes> 
            <Route path="/signin" element={<SignInWrapper />} />
            <Route path="/signup" element={<SignUpWrapper />} />
            <Route path="/login" element={<LoginPage/>} />

            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/myorders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/placeorder/:id" element={<ProtectedRoute><PlaceOrderWrapper /></ProtectedRoute>} />

            {/* 404 Page */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
