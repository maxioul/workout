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

  return (
    <div>
      {trainingData.map((data, index) => (
        <TrainingDataCard key={index} data={data} />
      ))}
    </div>
  );
};

export default TrainingDataDisplay;
