'use client'
import React, { useState } from 'react';

type UserRole = 'admin' | 'user' | 'manager';

interface User {
  name: string;
  role: UserRole;
}

const users: User[] = [
    { name: 'Alice', role: 'user' },
    { name: 'Bob', role: 'manager' },
    { name: 'Charlie', role: 'user' },
  { name: 'David', role: 'user' },
  { name: 'Eve', role: 'admin' },
  { name: 'Fiona', role: 'admin' },
  { name: 'Gerald', role: 'user' },
  {name: 'Hannah', role: 'admin'},
  {name: 'Ivan', role: 'user'},
];

const UserPage = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | 'all'>('all');

  const renderContent = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return <p>Welcome, Admin! You have full access to the system.</p>;
      case 'user':
        return <p>Welcome, User! You have limited access to the system.</p>;
      case 'manager':
        return <p>Welcome, Manager! You can manage user accounts.</p>;
      default:
        return <p>Welcome! Please select a role.</p>;
    }
  };

  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.role === selectedRole);

  return (
    <div className="flex flex-col min-h-screen bg-gray-500 p-4">
      <h1>Profile</h1>
      <div className="mb-4">
        <button
          onClick={() => setSelectedRole('all')}
          className="mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          All
        </button>
        <button
          onClick={() => setSelectedRole('admin')}
          className="mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          Admin
        </button>
        <button
          onClick={() => setSelectedRole('user')}
          className="mr-2 p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          User
        </button>
        <button
          onClick={() => setSelectedRole('manager')}
          className="p-2 bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          Manager
        </button>
      </div>
      {filteredUsers.map((user, index) => (
        <div key={index} className="p-4 m-2 bg-gray shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2>{user.name}</h2>
          {renderContent(user.role)}
        </div>
      ))}
    </div>
  );
};

export default UserPage;