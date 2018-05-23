import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </div>
    );
  }

}

export default App;


class DynamicImports extends Component {

  constructor(props) {
    super(props);
    this.state = {
      component:null
    };
  }
  componentWillMount() {
    this.props.load().then((mod)=>{
      this.setState({component:mod.default});
    });
  }

  render() {
    return this.props.children(this.state.component);
  }

}

const DashboardPage = (props) =>(
  <DynamicImports load={() => import('./pages/DashboardPage')}>
    {
      (Component) => Component === null ? <h1>Loading</h1> : <Component {...props} />
    }
  </DynamicImports>
);
