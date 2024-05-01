import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className='min-h-screen flex flex-col sm:justify-center items-center'>
      <h2 className="text-teal-900">Login</h2>
      <form className='d-flex flex-column w-1/3' onSubmit={handleSubmit}>
        <label className='mt-2'>Email</label>
        <input 
          type="email" 
          name='email' 
          value={email} 
          onChange={ handleOnChange }
          placeholder='Enter email' 
        />

        <label className='mt-2'>Password</label>
        <input 
          type="password"
          name='password'
          value={password}
          onChange={ handleOnChange }
          placeholder='Enter password'
        />

        <button type='submit' className='m-auto mt-3 btn btn-primary'>Login</button>
      </form>
      <div className='mt-2'>New to platform? <Link to='/signup'>Sign Up</Link></div>
    </div>
  )
}

export default Login;