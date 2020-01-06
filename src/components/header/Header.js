import React, { Component } from 'react'

export default class Header extends Component {

    render(){
        return <header className="navbar navbar-extend-lg navbar-light bg-light">
            <a className="navbar-brand">Street-Feed </a>
            <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className=" navbar-nav ml-auto">
                <li className="nav-item active"></li>
            </ul>
            </div>
        </header>
    }

}