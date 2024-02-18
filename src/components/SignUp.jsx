import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Username dan Password wajib diisi.');
      return;
    }
    // Simpan informasi pendaftaran pengguna ke local storage
    localStorage.setItem('userData', JSON.stringify({ username, password }));
    navigate('/signin');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
        <div className="mb-4">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Sign Up</button>
      </form>
      <p className="mt-4">
        Don't have an account?{' '}
        <button className="text-blue-500" onClick={() => navigate('/signin')}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;
