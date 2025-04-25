/*
FLIGHT CENTRE VAULT - DETAILED DEVELOPMENT INSTRUCTIONS
-------------------------------------------------------
This guide provides step-by-step instructions for building a PIN-based authentication 
system that reveals vacation content when the correct PIN is entered.
*/

// STEP 1: PROJECT SETUP
----------------------
1. Create a new React application:
   ```
   npx create-react-app flight-centre-vault
   cd flight-centre-vault
   ```

2. Install additional dependencies if needed:
   ```
   npm install tailwindcss
   npx tailwindcss init
   ```

3. Set up folder structure:
   ```
   src/
   ├── Components/
   │   ├── Header.js
   │   ├── PinInput.js
   │   └── ButterflyGardenImage.js
   ├── App.js
   ├── App.css
   └── index.js
   ```

// STEP 2: CREATE COMPONENT FILES
-------------------------------
// Start with individual components before assembling the main App

// STEP 2.1: CREATE HEADER COMPONENT
----------------------------------
1. Create file at src/Components/Header.js
2. Define Header component that takes two props: 'touristName' and 'showImage'
3. 'touristName' should be a string representing the user's name
4. 'showImage' should be a boolean indicating authentication status
5. The component should display different content based on 'showImage' value
6. Add styling classes for visual presentation

FUNCTION Header({ touristName, showImage })
    /* 
    This component displays different headers based on authentication status:
    - When authenticated (showImage=true): Shows "{touristName}'s Vacation Time!"
    - When not authenticated (showImage=false): Shows "Hi {touristName}" and subtitle
    */
    
    RENDER:
        <header className="text-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600">
                IF showImage is TRUE:
                    DISPLAY "{touristName}'s Vacation Time!"
                ELSE:
                    DISPLAY "Hi {touristName}"
            </h1>
            
            IF showImage is FALSE:
                <h2 className="text-xl text-gray-700">Open Flight Centre Vault</h2>
        </header>
    
    EXPORT Header component

// STEP 2.2: CREATE PIN INPUT COMPONENT
-------------------------------------
1. Create file at src/Components/PinInput.js
2. Define PinInput component that takes three props: 'pin', 'handlePinChange', and 'onSubmit'
3. 'pin' should be a string representing current PIN input value
4. 'handlePinChange' should be a function to update PIN value when input changes
5. 'onSubmit' should be a function to validate PIN when submitted
6. Implement a form with password input and submit button
7. Add appropriate event handlers and styling

FUNCTION PinInput({ pin, handlePinChange, onSubmit })
    /*
    This component handles PIN entry with these features:
    - Password-masked input field
    - Submit button
    - Form structure for submission handling
    */
    
    RENDER:
        <div className="flex flex-col items-center space-y-4">
            <form onSubmit={FUNCTION(event) {
                event.preventDefault()  // Prevent page reload on form submission
                onSubmit()
            }}>
                <input
                    type="password"          // Masks PIN input for security
                    value={pin}              // Controlled component pattern
                    onChange={handlePinChange}
                    placeholder="Enter PIN"
                    className="border border-gray-300 rounded p-2 w-48 text-center"
                    maxLength="4"            // PIN should be 4 digits
                />
                <button
                    type="button"            // Use 'button' type for custom handler
                    onClick={onSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    
    EXPORT PinInput component

// STEP 2.3: CREATE BUTTERFLY GARDEN IMAGE COMPONENT
-------------------------------------------------
1. Create file at src/Components/ButterflyGardenImage.js
2. Define ButterflyGardenImage component with no props
3. Display vacation image when authenticated
4. Add appropriate styling for the image

FUNCTION ButterflyGardenImage()
    /*
    This component displays the vacation image after successful authentication.
    The image is loaded from an external URL.
    */
    
    RENDER:
        <div className="image-container">
            <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                alt="Vacation time"
                className="mt-6 rounded shadow-lg w-100"
                // Consider adding error handling for image loading
                onError={FUNCTION(e) {
                    e.target.src = "fallback-image-url.jpg";  // Fallback image if main image fails to load
                    console.error("Image failed to load");
                }}
            />
            
            // Optional: Add caption or additional information about the vacation destination
            <p className="mt-3 text-gray-600">Beautiful butterfly garden destination awaits!</p>
        </div>
    
    EXPORT ButterflyGardenImage component

// STEP 3: CREATE MAIN APPLICATION COMPONENT
-----------------------------------------
1. Open src/App.js
2. Import React, hooks, and all components
3. Define App component with state management and logic
4. Implement PIN validation and conditional rendering
5. Connect all components with appropriate props

FUNCTION App()
    /*
    The main application component that:
    - Manages authentication state
    - Handles PIN validation
    - Coordinates component rendering based on authentication status
    */
    
    // Define application state variables
    STATE pin = ""               // Current PIN input value
    STATE showImage = FALSE      // Authentication status
    STATE error = ""             // Error message for invalid PIN
    STATE touristName = ""       // User's name when authenticated
    
    // Effect hook to set tourist name when authentication status changes
    EFFECT RUNS WHEN [showImage] changes:
        IF showImage is TRUE:
            SET touristName to "John"    // Set hardcoded name when authenticated
        ELSE:
            SET touristName to ""        // Clear name when not authenticated
    
    // Handler for PIN input changes
    FUNCTION handlePinChange(event)
        SET pin to event.target.value    // Update PIN state with input value
        SET error to ""                  // Clear any existing error message
    
    // Handler for PIN submission
    FUNCTION handleSubmit()
        // Validate PIN against hardcoded value "8008"
        IF pin EQUALS "8008":
            SET showImage to TRUE        // Grant access
            SET error to ""              // Clear any error message
        ELSE:
            SET showImage to FALSE       // Deny access
            SET error to "Incorrect PIN" // Set error message
            // Optional: Add attempt counter or lockout mechanism for security
    
    RENDER:
        <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
            {/* Pass appropriate props to Header component */}
            <Header 
                touristName={touristName} 
                showImage={showImage} 
            />
            
            {/* Only show PIN input when not authenticated */}
            IF showImage is FALSE:
                <PinInput 
                    pin={pin}
                    handlePinChange={handlePinChange}
                    onSubmit={handleSubmit}
                />
            
            {/* Show error message when PIN is invalid */}
            IF error is not empty:
                <p className="text-red-500 mt-4 font-medium">{error}</p>
            
            {/* Show vacation image when authenticated */}
            IF showImage is TRUE:
                <ButterflyGardenImage />
            
            {/* Optional: Add footer with additional information */}
            <footer className="mt-8 text-sm text-gray-500">
                <p>Flight Centre Vault Access System</p>
                <p>© 2025 Flight Centre Travel Group</p>
            </footer>
        </div>
    
    EXPORT App component as default

// STEP 4: UPDATE CSS STYLING
--------------------------
1. Open src/App.css
2. Add custom styles to enhance the application's appearance
3. Consider responsive design for different screen sizes

/* 
Add global styles and component-specific styles
Override any framework defaults as needed
*/

/* STEP 5: TESTING AND REFINEMENT
-----------------------------
1. Test PIN validation with correct and incorrect PINs
2. Verify conditional rendering based on authentication status
3. Test responsive behavior on different devices
4. Add additional features like:
   - Remember authentication status (localStorage)
   - Multiple PIN support
   - Timeout for authentication
   - Animation for transitions between states
*/