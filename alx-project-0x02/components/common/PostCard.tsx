import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow rounded p-4 my-4">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500 mt-2">Posted by user #{userId}</p>
    </div>
  );
};

export default PostCard;
