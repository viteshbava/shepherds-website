import { useState } from 'react';

const PasswordScreen: React.FC<{ onAuthSuccess: () => void }> = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const hardcodedPassword = 'skullcrusher';

    if (password === hardcodedPassword) {
      // Password matches, proceed to the app
      localStorage.setItem('authenticated', 'true');
      onAuthSuccess();
    } else {
      setError('Incorrect password');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='fixed z-50 w-screen h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-black text-lg font-bold mb-4'>Enter Password</h2>
        <input
          type='password'
          className='border p-2 w-full text-black'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
          placeholder='Password'
        />
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        <button className='bg-blue-500 text-white mt-4 py-2 px-4 rounded-md' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordScreen;
