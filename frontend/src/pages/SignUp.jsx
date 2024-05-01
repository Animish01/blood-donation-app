import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
  })

  const { email, userName, password } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target; 
    
    setUser({
      ...user,
      [name] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        process.env.REACT_APP_SIGNUP_URL,
        { ...user },
        { withCredentials: true },
      );
      console.log(data);
      navigate('/');
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className='min-h-screen flex flex-col sm:justify-center items-center'>
      <h2 className="text-teal-900">SignUp</h2>
      <form className='d-flex flex-column w-1/3' onSubmit={handleSubmit}>
        <label className='mt-2'>Username</label>
        <input 
          type="text" 
          name='userName' 
          value={userName} 
          onChange={ handleOnChange }
          placeholder='Enter username' 
        />

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

        <button type='submit' className='m-auto mt-3 btn btn-primary'>Sign up</button>
      </form>
      <div className='mt-2'>Already a user? <Link to='/login'>Login</Link></div>
    </div>
  )
}

export default SignUp;