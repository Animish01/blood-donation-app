import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target; 

    setUser({
      ...user,
      [name] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const { data } = await axios.post(
        process.env.REACT_APP_LOGIN_URL,
        { ...user },
        {withCredentials: true},
      )

      console.log(data);
      navigate('/');
    } catch(e){
      console.log(e);
    }
  }

  return (
    <div className='border rounded p-3'>
      <div className="head h2">Login</div>
      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          name='email' 
          value={email} 
          onChange={ handleOnChange }
          placeholder='Enter email' 
        />

        <label>Password</label>
        <input 
          type="password"
          name='password'
          value={password}
          onChange={ handleOnChange }
          placeholder='Enter password'
        />

        <button type='submit' className='m-auto mt-3 btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default Login;