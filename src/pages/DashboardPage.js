import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class DashboardPage extends Component {

  render() {
    return (
        <div >
          <h1>dashboard</h1>
        </div>
    );
  }

}

export default withRouter(DashboardPage);
