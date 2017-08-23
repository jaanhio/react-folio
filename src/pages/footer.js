import React, {Component} from 'react';
import { Icon, Container } from 'semantic-ui-react';
import './footer.css';

export default function Footer(){
  return(
    <Container>
      <div className="footer">
        <Icon link name='instagram' size="large"></Icon><a href="www.google.com"></a>
        <Icon link name='mail outline' size="large"/>
        <Icon link name='github' size="large"/>
        <Icon link name='tumblr square' size="large"/>
      </div>
    </Container>
  )
}
