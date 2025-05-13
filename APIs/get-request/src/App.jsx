import { useState } from 'react';
import './App.css' 

export default function GetRequestApp() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Task 1: GET Request
  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/posts?userId=1"

      const response = await fetch(apiUrl, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error("Error fetching from API")
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    }
    //try
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Task 1: GET Request Assessment</h1>
        <p className="mb-4">Fetch and display posts from user ID 1 using the JSONPlaceholder API.</p>
        <code className="block bg-gray-100 p-2 mb-4 rounded">GET https://jsonplaceholder.typicode.com/posts?userId=1</code>
        
        <button 
          onClick={fetchPosts}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          {isLoading ? 'Loading...' : 'Fetch Posts'}
        </button>
        
        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50 min-h-40">
          {error && (
            <div className="text-red-500 mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}
          
          {isLoading && <p className="text-gray-600">Loading posts...</p>}
          
          {!isLoading && !error && posts.length === 0 && (
            <p className="italic text-gray-500">Posts will appear here after clicking the Fetch Posts button...</p>
          )}
          
          {!isLoading && !error && posts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Posts from User 1</h2>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="p-4 border border-gray-200 rounded shadow-sm">
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="my-2">{post.body}</p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Post ID:</strong> {post.id}</p>
                    <p><strong>User ID:</strong> {post.userId}</p>
                  </div>
                </div>
                ))
                 }
              </div>
            </div>
          )}
        </div>
      </div>
    );
    
  };

 
