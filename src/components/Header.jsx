import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage on component load
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, user is logged in
    }
  }, []); // Only run once when component mounts

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    navigate('/login'); // Redirect to login page
  };

  return (
    <Box bg="teal.500" color="white" px={4} py={3} mb={6}>
      <Flex justify="space-between" align="center">
        {/* App Title */}
        <Heading size="md">Habit Tracker</Heading>

        {/* Navigation Links */}
        <Flex align="center" gap={4}>
          <Link as={RouterLink} to="/" fontSize="lg" color="white">
            Dashboard
          </Link>
          <Link as={RouterLink} to="/profile" fontSize="lg" color="white">
            Profile
          </Link>
          
        </Flex>

        {/* Conditionally render Logout button if user is logged in */}
        {isLoggedIn && (
          <Button colorScheme="red" variant="outline" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
