import React from 'react';

const Table = ({students}) => {
    const studentRows = students.map( student => 
        <tr key={student.id}>
            <td>{student.student}</td>
            <td>{student.course}</td>
            <td>{student.grade}</td>
        </tr>
    );
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {studentRows}
            </tbody>
        </table>
    )
}

export default Table;
