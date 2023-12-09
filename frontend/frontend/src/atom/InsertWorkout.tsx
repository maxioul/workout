// InsertWorkout.tsx
import React, { useState } from 'react';
import { TrainingDataFormState } from 'formState/TrainingDataFormState'; // Adjust the import path

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
    // Replace 'your-api-endpoint' with your actual endpoint URL
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
      // Handle success - maybe clear form or show a success message
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors here, such as displaying an error message
    });
  };

  return (
    <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="workoutDetailId"
            value={workoutDetail.workoutDetailId}
            onChange={handleChange}
            placeholder="workoutDetailId"
          />
      <input
        type="text"
        name="exerciseName"
        value={workoutDetail.exerciseName}
        onChange={handleChange}
        placeholder="Exercise Name"
      />
      {/* Workout Date */}
//
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
