import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Stack, Badge } from '@chakra-ui/react';

const NotificationPanel = ({ habits }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const pendingHabits = habits.filter(habit => !habit.completed);
    setNotifications(pendingHabits);
  }, [habits]);

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
      <Heading mb={4} size="lg">Notifications</Heading>
      {notifications.length > 0 ? (
        <Stack spacing={2}>
          {notifications.map((habit, index) => (
            <Text key={index} mb={2} p={3} borderWidth={1} borderRadius="md" bg="blue.50">
              <Badge colorScheme="blue" mr={2}>Reminder</Badge>
              Don't forget to complete: <strong>{habit.name}</strong>
            </Text>
          ))}
        </Stack>
      ) : (
        <Text fontStyle="italic" color="gray.500">No pending habits. You're doing great!</Text>
      )}
    </Box>
  );
};

export default NotificationPanel;
