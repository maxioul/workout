// App.tsx or another file
import React from 'react';
import TrainingDataCard from 'atom/TrainingDataCard';
import { TrainingData } from 'entity/TrainingData';
import TrainingDataDisplay from 'molecules/TrainingDataDisplay'
import InsertWorkout from 'atom/InsertWorkout';
import TrainingDataDisplayByPage from 'molecules/TrainingDataDisplayByPage'

const App: React.FC = () => {
  const trainingData = new TrainingData(
    "001",
    "Bench Press",
    "2023-11-30T23:00:00.000+00:00",
    3,
    10,
    150,
    "Felt bad, steady progress"
  );

  return (
    <div>
      <h1>Workout Detail</h1>
      <InsertWorkout />
{/*       <TrainingDataDisplay /> */}
      <TrainingDataDisplayByPage />
    </div>
  );
};

export default App;
