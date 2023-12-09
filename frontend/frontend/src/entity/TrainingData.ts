// TrainingData.ts
export class TrainingData {
  workoutDetailId: string;
  exerciseName: string;
  workoutDate: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string;

  constructor(
    workoutDetailId: string,
    exerciseName: string,
    workoutDate: string,
    sets: number,
    reps: number,
    weight: number,
    notes: string
  ) {
    this.workoutDetailId = workoutDetailId;
    this.exerciseName = exerciseName;
    this.workoutDate = workoutDate;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
    this.notes = notes;
  }

  // You can add methods here if needed, e.g., to format the date or calculate totals
}
