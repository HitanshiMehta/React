import React from "react";

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="nav-header">
                        <div className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}