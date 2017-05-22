import React, {Component} from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { withRouter } from 'react-router-dom';

class Application extends Component {

    render(){
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(connect()(Application));