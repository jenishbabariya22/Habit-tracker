import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Input, Stack, SimpleGrid, Progress } from '@chakra-ui/react';
import NotificationPanel from './NotificationPanel';
import HabitForm from './HabitForm';

const HabitDashboard = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', streak: 3, completed: false },
    { id: 2, name: 'Read', streak: 5, completed: false },
  ]);
  const [goal, setGoal] = useState('');
  const [editHabitId, setEditHabitId] = useState(null); // For updating a habit
  const [editHabitName, setEditHabitName] = useState(''); // For updating a habit name

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile && storedProfile.goal) {
      setGoal(storedProfile.goal);
    }
  }, []);

  const addHabit = (newHabit) => {
    setHabits((prevHabits) => [
      ...prevHabits,
      { ...newHabit, id: prevHabits.length + 1 },
    ]);
  };

  const completeHabit = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId
          ? { ...habit, completed: true, streak: habit.streak + 1 }
          : habit
      )
    );
  };

  const deleteHabit = (habitId) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
  };

  const startEditHabit = (habit) => {
    setEditHabitId(habit.id);
    setEditHabitName(habit.name);
  };

  const updateHabit = () => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === editHabitId ? { ...habit, name: editHabitName } : habit
      )
    );
    setEditHabitId(null);
    setEditHabitName('');
  };

  // Calculate progress percentage based on the streak
  const calculateProgress = (streak) => {
    const targetStreak = 7; // Set a target streak (e.g., 7 days for a full week)
    return Math.min((streak / targetStreak) * 100, 100); // Limit to 100%
  };

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">Habit Dashboard</Heading>

      {/* Display the goal retrieved from localStorage */}
      {goal && (
        <Box mb={4} p={4} borderWidth={1} borderRadius="md" bg="blue.50" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Your Current Goal:</Text>
          <Text fontSize="md">{goal}</Text>
        </Box>
      )}

      <NotificationPanel habits={habits} />
      <HabitForm addHabit={addHabit} />

      <SimpleGrid columns={[1, 2]} spacing={4} mt={6}>
        {habits.map((habit) => (
          <Box key={habit.id} p={4} borderWidth={1} borderRadius="md" bg="gray.50" boxShadow="sm">
            {editHabitId === habit.id ? (
              <Box>
                <Input
                  mb={2}
                  value={editHabitName}
                  onChange={(e) => setEditHabitName(e.target.value)}
                  placeholder="Edit habit name"
                />
                <Button onClick={updateHabit} colorScheme="teal" mb={2}>
                  Update Habit
                </Button>
              </Box>
            ) : (
              <>
                <Text fontSize="xl" fontWeight="bold">{habit.name}</Text>
                <Text>Streak: <strong>{habit.streak}</strong></Text>
                <Progress value={calculateProgress(habit.streak)} colorScheme="teal" size="lg" style={{margin:"10px"}}/>
                {habit.completed ? (
                  <Text color="green.500">Completed</Text>
                ) : (
                  <Button onClick={() => completeHabit(habit.id)} colorScheme="teal" mb={2}>
                    Mark as Complete
                  </Button>
                )}
                <Stack direction="row" spacing={2} mt={2}>
                  <Button onClick={() => deleteHabit(habit.id)} colorScheme="red">
                    Delete Habit
                  </Button>
                  <Button onClick={() => startEditHabit(habit)} colorScheme="blue">
                    Edit Habit
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HabitDashboard;
