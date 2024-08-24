

import React, { useState, useEffect } from 'react';

function ApiGitHub() {
const [user, setUser] = useState(null);
const [userName, setUserName] = useState('jeancarloh'); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchUser = async () => {
        try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        console.log("esta es la data",data);
        setUser(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    fetchUser();
}
, [userName]);

  return (
    <div>
  <h1>Github User</h1>
  <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
    {loading && <p>Cargando...</p>}
    {error && <p>Error: {error}</p>}
    {user && (
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt={user.name} height={80} width={80}/>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Location: {user.location}</p>
        </div>
    )}
    </div>
  );
}

export default ApiGitHub;
