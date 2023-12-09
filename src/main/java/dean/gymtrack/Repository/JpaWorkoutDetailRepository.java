package dean.gymtrack.Repository;

import dean.gymtrack.Entity.WorkoutDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JpaWorkoutDetailRepository extends JpaRepository<WorkoutDetail,String> {

    List<WorkoutDetail> findAll();
}
