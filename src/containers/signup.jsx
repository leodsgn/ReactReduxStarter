import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class SignupPage extends Component {


    render(){
        return (
            <div>signup page</div>
        )
    }
}

export default withRouter(connect()(SignupPage));

