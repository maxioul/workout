package dean.gymtrack.Repository;

import dean.gymtrack.Entity.WorkoutDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaWorkoutDetailRepository extends JpaRepository<WorkoutDetail,String> {

}
