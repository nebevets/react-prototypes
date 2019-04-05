import React from 'react';
import Table from './table';

const students = [
    {id: 10101, student: 'Steve Benedict', course: 'React Module 3', grade: 100},
    {id: 10102, student: 'Wayne Carr', course: 'Applied Psychology', grade: 59},
    {id: 10103, student: 'Bill Loney', course: 'Astrophysics', grade: 42},
];

const App = () => 
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table students={students}/>
    </div>;

export default App;
