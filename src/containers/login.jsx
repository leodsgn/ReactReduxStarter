import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {


    render(){
        return (
            <div>Login Page</div>
        )
    }
}

export default withRouter(connect()(LoginPage));
