import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Heading, Stack, FormControl, FormLabel } from '@chakra-ui/react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Registration successful!');
    navigate('/login'); // Redirect to login after successful registration
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
      <Heading mb={6} textAlign="center">Register</Heading>
      <form onSubmit={handleRegister}>
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
          <Button type="submit" colorScheme="teal">Register</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
