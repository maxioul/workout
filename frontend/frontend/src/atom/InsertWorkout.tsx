// InsertWorkout.tsx
import React, { useState } from 'react';
import { TrainingDataFormState } from 'formState/TrainingDataFormState'; // Adjust the import path
import ExerciseSelector from 'atom/ExerciseSelector'

const InsertWorkout: React.FC = () => {
 const [workoutDetail, setWorkoutDetail] = useState(new TrainingDataFormState());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutDetail({
      ...workoutDetail,
        [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:8080/workout-detail/put-workout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workoutDetail),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      //TODO: Handle success - maybe clear form or show a success message
    })
    .catch((error) => {
      console.error('Error:', error);
      //TODO: Handle errors here, such as displaying an error message
    });
  };

    const handleExerciseSelect = (selectedExerciseName: string) => {
    setWorkoutDetail({
      ...workoutDetail,
      exerciseName: selectedExerciseName
    });
    };

  return (
    <form onSubmit={handleSubmit}>

      <ExerciseSelector onSelect={handleExerciseSelect} />

      <input
        type="date"
        name="workoutDate"
        value={workoutDetail.workoutDate}
        onChange={handleChange}
        placeholder="Workout Date"
      />

      {/* Sets */}
      <input
        type="number"
        name="sets"
        value={workoutDetail.sets}
        onChange={handleChange}
        placeholder="Sets"
      />

      {/* Reps */}
      <input
        type="number"
        name="reps"
        value={workoutDetail.reps}
        onChange={handleChange}
        placeholder="Reps"
      />

      {/* Weight */}
      <input
        type="number"
        name="weight"
        value={workoutDetail.weight}
        onChange={handleChange}
        placeholder="Weight"
      />

      {/* Notes */}
      <input
        type="text"
        name="notes"
        value={workoutDetail.notes}
        onChange={handleChange}
        placeholder="Notes"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default InsertWorkout;
