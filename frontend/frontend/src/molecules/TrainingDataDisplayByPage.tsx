import React, { useState, useEffect } from 'react';
import Pagination from 'atom/Pagination';
import TrainingDataCard from 'atom/TrainingDataCard';
import { TrainingData } from 'entity/TrainingData';

const TrainingDataDisplayByPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch data from your API
    fetch(`http://localhost:8080/workout-detail/get-by-page?page=${currentPage}&size=${pageSize}`)
      .then(response => response.json())
      .then(data => {
      setTrainingData(data.content);
      setTotalPages(data.totalPages);
      }) // Adjust according to your API response
      .catch(error => console.error('Error fetching data:', error));
  }, [currentPage, pageSize]);

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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={newPage => setCurrentPage(newPage)}
        />
    </div>
  );
};

export default TrainingDataDisplayByPage;
