import { useState } from 'react';

interface PasswordScreenProps {
  onAuthSuccess: () => void;
  password: string;
}

const PasswordScreen = ({ onAuthSuccess, password }: PasswordScreenProps) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (enteredPassword === password) {
      // Password matches, proceed to the app
      localStorage.setItem('authenticated', enteredPassword);
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
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
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
