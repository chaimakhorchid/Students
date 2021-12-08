import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState("")
  const [isSended, setIsSended] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    
    const student = {
      name: name,

    }
    
    fetch('http://localhost:5000/students', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => console.log(data))
      setIsSended(true)
    }

    

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Creer student</button>
    </form>
    {isSended && 
    (
      <>
      <h1>Bravo vous êtes inscrit</h1>
      <Link to='/'>
        <p>Retourner au menu d'acceuil</p>
      </Link>
      </>)}
    </>
  );
};

export default Form;