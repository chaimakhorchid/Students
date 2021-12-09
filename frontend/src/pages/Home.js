import React, { useEffect, useState } from 'react';


const Home = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/students')
        .then(response => response.json())
        .then(data => setStudents(data))
    }, [])

    return (
        <>
            <h1>Homepage</h1>
                <div>

                {students.map(student => (
                    <div>
                <p>{student.name}</p>
                </div>
                ))}

                </div>
        </>
    );
};

export default Home;
