import React, { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null; // Don't render if modal is closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="border p-2 w-full mb-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
