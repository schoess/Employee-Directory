import React from "react";
// import Table from "./Table";
import Table from "react-bootstrap/Table";
import dataJSON from "../data.json";
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

        <div>
            <input className="form-control search" type="text" placeholder="Search for an Employee"></input>
            <button type="button" className="btn btn-primary">Search!</button>
        </div>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Github</th>
                    <th>Dept</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(info => (
                        <tr key={info.id}>
                            <td>
                                {info.name}
                            </td>
                            <td>
                                {info.role}
                            </td>
                            <td>
                                {info.Github}
                            </td>
                            <td>
                                {info.Dept}
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </Table>
    </div>
    )
}