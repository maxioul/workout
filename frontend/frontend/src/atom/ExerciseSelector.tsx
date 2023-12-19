// ExerciseSelector.tsx
import React, { useState, useEffect } from 'react';
import {Exercise} from 'entity/Exercise'


interface ExerciseSelectorProps {
  onSelect: (exerciseName: string) => void;
}

const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({ onSelect }) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/exercise-information/all')
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select an exercise</option>
      {exercises.map(exercise => (
        <option key={exercise.exerciseName} value={exercise.exerciseName}>
          {exercise.exerciseName}
        </option>
      ))}
    </select>
  );
};

export default ExerciseSelector;
