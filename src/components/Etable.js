import React from "react";
import Table from 'react-bootstrap/Table';


export default function employeeTable(props) {
    return (
        <Table striped bordered hover>
            <thead>

                <tr>
                    <th onClick={() => props.sortByName("name")}>Name</th>
                    <th>Role</th>
                    <th>Github</th>
                    <th>Dept</th>
                </tr>

            </thead>

            <tbody>
                {
                    props.data.map(row => (
                        <tr key={row.id}>
                            <td>
                                {row.name}
                            </td>
                            <td>
                                {row.role}
                            </td>
                            <td>
                                {row.Github}
                            </td>
                            <td>
                                {row.Dept}
                            </td>
                        </tr>

                    ))
                }
            </tbody>

        </Table>
    )
}