// TrainingDataFormState.ts
import { TrainingData } from 'entity/TrainingData';

export class TrainingDataFormState extends TrainingData {
  constructor(
    workoutDetailId = '',
    exerciseName = '',
    workoutDate = '',
    sets = 0,
    reps = 0,
    weight = 0,
    notes = ''
  ) {
    super(workoutDetailId, exerciseName, workoutDate, sets, reps, weight, notes);
  }
}
