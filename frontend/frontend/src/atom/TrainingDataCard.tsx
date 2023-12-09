// TrainingDataCard.tsx
import React from 'react';
import { TrainingData } from 'entity/TrainingData'; // Adjust the import path as necessary

interface TrainingDataCardProps {
  data: TrainingData;
}

const TrainingDataCard: React.FC<TrainingDataCardProps> = ({ data }) => {
  return (
    <div style={cardStyle}>
      <span>{data.exerciseName}</span>
      {' | '}
      <span>Date: {new Date(data.workoutDate).toLocaleDateString()}</span>
      {' | '}
      <span>Sets: {data.sets}</span>
      {' | '}
      <span>Reps: {data.reps}</span>
      {' | '}
      <span>Weight: {data.weight} lbs</span>
      {' | '}
      <span>Notes: {data.notes}</span>
    </div>
  );
};

// You can customize this style as needed
const cardStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export default TrainingDataCard;
