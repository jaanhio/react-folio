import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';
import ProfilePage from './pages/profile-page';
import CodePage from './pages/code-page';
import PhotoPage from './pages/photo-page';
import Footer from './pages/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <img src={require('./images/profile.jpg')}/>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/code">
            Code Page
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/profile">
            Profile Page
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/photo">
            Photo Page
          </NavLink>
        </div>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/code" component={CodePage}/>
        <Route path="/photo" component={PhotoPage}/>
        <Footer />
      </Container>
    );
  }
}

export default App;
