import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import "./header.styl";

class Header extends Component {

    renderMenuOptions(){
        return [
            <li key="1" className="nav-item">
                <Link to="/login">Login</Link>
            </li>,
            <li key="2" className="nav-item">
                <Link to="/signup">Signup</Link>
            </li>
        ]
    }

    render(){
        return(
            <div className="header">
                <div className="wrap-content">
                    <h2 className="logo">Logo Here</h2>
                    <ul className="navigation">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        {this.renderMenuOptions()}
                    </ul>
                </div>
            </div>
        )
    }

}

export default withRouter(connect()(Header));