// TrainingDataDisplay.tsx
import React, { useEffect, useState } from 'react';
import TrainingDataCard from 'atom/TrainingDataCard';
import { TrainingData } from 'entity/TrainingData';

const TrainingDataDisplay: React.FC = () => {
  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/workout-detail/getall') // Replace with your actual endpoint
      .then(response => response.json())
      .then(data => setTrainingData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    const handleDelete = (workoutDetailId: string) => {
      // Make an API call to delete the workout
      fetch(`http://localhost:8080/workout-detail/${workoutDetailId}`, { method: 'DELETE' })
        .then(() => {
          // Update the state to remove the deleted workout
          setTrainingData(trainingData.filter(workout => workout.workoutDetailId !== workoutDetailId));
        })
        .catch(error => console.error('Error:', error));
    };

  return (
    <div>
      {trainingData.map(trainingData => (
        <TrainingDataCard key={trainingData.workoutDetailId} data={trainingData} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TrainingDataDisplay;
