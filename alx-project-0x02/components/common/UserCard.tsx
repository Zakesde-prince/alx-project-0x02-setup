import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded shadow p-4 my-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
