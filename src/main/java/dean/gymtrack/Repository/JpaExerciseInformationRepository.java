package dean.gymtrack.Repository;

import dean.gymtrack.Entity.ExerciseInformation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JpaExerciseInformationRepository extends JpaRepository<ExerciseInformation,String> {
    List<ExerciseInformation> findAll();
}
