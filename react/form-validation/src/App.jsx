import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [errors, setErrors] = useState({});

// const handleEmailChange = (e) => {
//   setEmail(e.target.value);

//   setErrors((prev) => ({ ...prev, email: ""}));
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);

//   setErrors((prev) => ({ ...prev, password: "" }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const newErrors = {};

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     newErrors.email = "Please enter a valid email address";
//   }

//   if (password.length < 8) {
//     newErrors.password = "Password must be at least 8 characters long";
//   }

//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//   } else {
//     console.log("Form is valid");

//     setEmail("");
//     setPassword("");
//     setErrors({});
//   }
// };

// React form with validation - Annotated
import { useState } from 'react'
import './App.css'

function App() {
  // State variables for form control and validation
  const [email, setEmail] = useState(""); // Stores email input value
  const [password, setPassword] = useState(""); // Stores password input value
  const [errors, setErrors] = useState({}); // Object to store validation errors
  
  // Handler for email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state with current input value
    
    // Clear any existing email error when user starts typing
    setErrors((prev) => ({ ...prev, email: ""}));
  };
  
  // Handler for password input changes
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state with current input value
    
    // Clear any existing password error when user starts typing
    setErrors((prev) => ({ ...prev, password: "" }));
  };
  
  // Form submission handler with validation
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const newErrors = {}; // Object to collect new validation errors
    
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Validate password length
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    
    // If there are errors, update errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, form is valid
      console.log("Form is valid");
      
      // Reset form fields and errors
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    // Form with submit handler
    <form onSubmit={handleSubmit}>
      {/* Email input section */}
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email}
          onChange={handleEmailChange}
        />
        {/* Conditional rendering of email error message */}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      {/* Password input section */}
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        {/* Conditional rendering of password error message */}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  )
}



export default App
