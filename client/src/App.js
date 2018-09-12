import React, { Component } from 'react';
import { Section, Container, Title, SubTitle, Input, Button, Hero} from 'reactbulma'
import Search from './search.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () =>

      <Router>
      <div>

          <Route exact path="/" component={Search} />

      </div>
    </Router>

export default App;
