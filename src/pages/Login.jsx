import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Heading, Stack, FormControl, FormLabel } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Store token or user data here if needed
      localStorage.setItem('token', 'dummyToken'); // Example token storage
      navigate('/'); // Redirect to dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <Box
      p={4}
      maxW="400px"
      mx="auto"
      mt="100px"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={6} textAlign="center">Login</Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">Login</Button>
          <Button variant="link" onClick={handleRegister} color="teal.500" textAlign="center">
            Don't have an account? Register here
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
