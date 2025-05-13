import './App.css'
import { useState } from 'react';

export default function PostRequestApp() {
  const [formData, setFormData] = useState({
    title: 'Why',
    body: 'Who where',
    userId: 1
  });
  
  const [newPost, setNewPost] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  //set error variable useState
  // set isLoading variable useState

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'userId' ? parseInt(value, 10) : value
    });
  };

  // Task 2: POST Request
  const createPost = async () => {
    setIsLoading(true);
    setError(null);
    setNewPost(null);
    
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/posts";

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching from API");
      }

      const data = await response.json();
      setNewPost(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching ferry positons:", error)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task 2: POST Request Assessment</h1>
      <p className="mb-4">Create a new post by sending data to the JSONPlaceholder API and display the response.</p>
      <code className="block bg-gray-100 p-2 mb-4 rounded">
        POST https://jsonplaceholder.typicode.com/posts
      </code>
      
      <div className="p-4 border border-gray-300 rounded bg-gray-50 mb-6">
        <h2 className="text-lg font-bold mb-4">Enter Post Data</h2>
        
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="titleInput"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="bodyInput">Body:</label>
          <textarea
            id="bodyInput"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="userIdInput">User ID:</label>
          <input
            type="number"
            id="userIdInput"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <button 
          onClick={createPost}
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </div>
      
      <div className="p-4 border border-gray-300 rounded bg-gray-50 min-h-40">
        <h2 className="text-lg font-bold mb-4">API Response</h2>
        
        {error && (
          <div className="text-red-500 mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {isLoading && <p className="text-gray-600">Sending request...</p>}
        
        {!isLoading && !error && !newPost && (
          <p className="italic text-gray-500">The response will appear here after clicking the Create Post button...</p>
        )}
        
        {!isLoading && !error && newPost && (
          <div className="p-4 border border-gray-200 rounded shadow-sm">
            <h3 className="font-bold text-lg mb-2">Created Post Details</h3>
            <div className="space-y-2">
              <p><strong>Post ID:</strong> {newPost.id}</p>
              <p><strong>Title:</strong> {newPost.title}</p>
              <p><strong>Body:</strong> {newPost.body}</p>
              <p><strong>User ID:</strong> {newPost.userId}</p>
            </div>
            <p className="mt-4 text-sm italic text-gray-500">
              Note: With JSONPlaceholder, this post is not actually saved to the server.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}