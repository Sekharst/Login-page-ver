import React, { useState } from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    
    const demoUsername = 'Sekhar';
    const demoPassword = 'Sekhar123';
    

    if (username === demoUsername && password === demoPassword) {
        const userData = {
            username: username,
            password: password,
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      console.log(userData)
      setLoginMessage('Login Successfull');
    } else {
      setLoginMessage('Invalid credentials. Please try again.');
    }
    document.getElementById('username').value="";
    document.getElementById('password').value="";

    
  };

   
  return (
    <>
    <div className='container'>
      <h1>Login</h1>
      <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} 
           onChange={(event) => setUsername(event.target.value)} required />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} 
           onChange={(event) => setPassword(event.target.value)} required />
      </div>
      <NavLink to='/dashboard'>
      <button onClick={handleLogin}>Login</button></NavLink>
      <p id="loginMessage">{loginMessage}</p>
    </div>
    </>
  );
};

export default LoginForm;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './index.css';


// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (email === "admin" && password === "password") {
//       window.location.href = "/";
//     } else {
//       setError("Invalid email or password");
//     }
//   };
//   return (
//     <div className="container">
//       <h1>Login Page</h1>
//       <form className="container" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             aria-describedby="emailHelp"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <p>
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </p>
//     </div>
//   );
// };
// export default LoginForm;