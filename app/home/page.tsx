'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUsername(userData.username);
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    
    // Redirect to the login page or homepage
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Hello, {username || 'User'}!</h1>
      <button
        onClick={handleLogout}
        className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Logout
      </button>
    </div>
  );
}
