import {useState} from 'react';

const Login = ({setUser, username, setUsername}) =>{
    return(
        <div className="login">
            <input 
                onChange={event => setUsername(event.target.value)} 
                value={username} 
                type="text" 
                placeholder="username" 
            />
            <button onClick={() => setUser(username)} type="button">Login</button>
        </div>
    )
}

export default Login;