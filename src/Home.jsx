import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Axios.get('https://localhost:3000/')  // Assuming this is your API endpoint
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
            });
    }, []);

    console.log(students);
    
    return (
        <div className="App">
            <h1>Home Page</h1>
            {/* Render your students data here */}
            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
