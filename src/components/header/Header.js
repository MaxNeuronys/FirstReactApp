import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
        <header className="navbar navbar-extend-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Street-Feed </a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className=" navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Favoris</a>
                    </li>
                </ul>
            </div>
        </header>
        )
    }

}