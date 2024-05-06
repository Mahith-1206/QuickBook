import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wrapPromiseWithToast from "../utils/wrapPromiseWithToast";
import { TextField, Button, Box, Typography, IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import a close icon from Material UI
import { useAuth } from '../context/auth.context';
import { message } from "antd";
import RegisterForm from './RegisterForm';

const LoginForm = (onLoggedInToggle) => {
  // State to manage the form's visibility
  const [isVisible, setIsVisible] = useState(true);
  const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const {login} = useAuth();

  // Function to check if all required fields are filled
  const validateFields = () => {
    const missingFields = [];
    if (!username) missingFields.push("Username");
    // if (!email) missingFields.push("Email");
    if (!password) missingFields.push("Password");

    if (missingFields.length) {
      toast.error(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return false; // Validation failed
    }

    return true; // Validation succeeded
  };

  // Function to simulate registration process
  const handleRegisterButton = async () => {
    setShowRegisterForm(true);
  };


const handleLogin = async ()=>{
    console.log("Login");
    if (validateFields()) {
      try {
        // Await the asynchronous register function to ensure proper error handling
        const response = await login(username, password);
        const res=response.data;
        if (res.success) {
          // Registration was successful
          // message.success("Registration successful!");
          toast.success("Successfully Logged In!");
        } else {
          // If success is false, display error messages
          // message.error(response.message || "Registration failed.");
          toast.error(res.message || "Login failed. Please try again.");
        }
  
      } catch (error) {
        // Handle exceptions and unexpected errors
        console.error("Error during Logging in:", error);
  
        const errorMessage = error.response?.data?.error || "An unexpected error occurred.";
        message.error(errorMessage); // Display error message from server
        toast.error("An error occurred during Logging in. Please try again.");
      }
    } else {
      // Validation failed, inform user to fill in required fields
      toast.error("Please fill in all required fields.");
    }
}
  // Function to close the form
  const closeForm = () => {
    setIsVisible(false); // Hide the form
  };

  if (!isVisible) {
    return null; // Don't render if the form is not visible
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Box
        component="div"
        sx={{
          position: 'fixed', // Fixed position
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Proper centering
          zIndex: 1000, // High z-index
          background: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background
          boxShadow: 24, // Shadow for depth
          padding: 4, // Padding
          borderRadius: 2, // Rounded corners
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Login/Register</Typography>
          <IconButton onClick={closeForm}>
            <CloseIcon /> {/* Close button */}
          </IconButton>
        </Box>

        {!showRegisterForm ? (<Box component="form" onSubmit={(e) => e.preventDefault()}> {/* Prevent default submit */}
          <TextField
            name="username"
            label="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            margin="normal"
          />

          {/* <TextField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          /> */}

          <TextField
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Button
            type="button" // To prevent default form submission
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            type="button" // To prevent default form submission
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegisterButton}
          >
            Don't Have an account, Register Here
          </Button>
        </Box>) : (<RegisterForm/>)}
      </Box>
    </>
  );
};

export default LoginForm;