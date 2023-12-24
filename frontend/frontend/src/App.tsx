// App.tsx or another file
import React from 'react';
import { TrainingData } from 'entity/TrainingData';
import InsertWorkout from 'atom/InsertWorkout';
import TrainingDataDisplayByPage from 'molecules/TrainingDataDisplayByPage'

const App: React.FC = () => {

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
