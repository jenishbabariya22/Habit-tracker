import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Heading, Text, VStack, Divider } from '@chakra-ui/react';

const Profile = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  
  useEffect(() => {
    // Load profile data from localStorage
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile) {
      setName(storedProfile.name);
      setGoal(storedProfile.goal);
    }
  }, []);

  const handleSaveProfile = () => {
    const profileData = { name, goal };
    localStorage.setItem('profile', JSON.stringify(profileData));
    alert('Profile updated!');
  };

  return (
    <Box p={6} borderWidth={1} borderRadius="md" boxShadow="lg" bg="white">
      <Heading mb={4} textAlign="center">Profile Management</Heading>
      <Text mb={2} textAlign="center">
        Update your personal information and goals:
      </Text>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          borderColor="teal.500"
          focusBorderColor="teal.300"
        />
        <Input
          placeholder="Your Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          borderColor="teal.500"
          focusBorderColor="teal.300"
        />
        <Button onClick={handleSaveProfile} colorScheme="teal" width="full">
          Save Profile
        </Button>
      </VStack>
      <Divider my={4} />
      <Text fontSize="sm" color="gray.500" textAlign="center">
        Your profile information is saved locally.
      </Text>
    </Box>
  );
};

export default Profile;
