import React, { useState } from 'react';
import { Box, Input, Button, Heading, Stack, FormControl, FormLabel } from '@chakra-ui/react';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [streak, setStreak] = useState(0); // New state for streak

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      // Pass the new habit data to the parent component
      addHabit({ name: habitName, streak: Number(streak), completed: false }); // Convert streak to a number
      setHabitName(''); // Clear the habit name input field
      setStreak(0); // Reset streak input field
    }
  };

  return (
    <Box
      p={6}
      maxW="400px"
      mx="auto"
      mt={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading mb={4} textAlign="center">Add a New Habit</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Habit Name</FormLabel>
            <Input
              placeholder="Enter your habit name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              borderColor="teal.500"
              focusBorderColor="teal.300"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Initial Streak</FormLabel>
            <Input
              type="number" // Set input type to number for streak
              placeholder="Enter initial streak"
              value={streak}
              onChange={(e) => setStreak(e.target.value)}
              borderColor="teal.500"
              focusBorderColor="teal.300"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg">Add Habit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default HabitForm;
