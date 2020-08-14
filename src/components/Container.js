import React from "react";

import "./style.css";

export default function Container(props) {
    return (
    <div className="Container justify-content-center">
        
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search for an Employee, or filter by department!</p>
            </div>
        </div>
    </div>
    )
}