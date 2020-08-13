import React from "react";

function Table(props) {
    let employees = props.employee.map(item =>
        <tr key={item.id}>
            <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.Github}</td>
                <td>{item.Dept}</td>
        </tr>
        )

        return (
            <tbody>
                {employees}
            </tbody>
        );

}

export default Table;