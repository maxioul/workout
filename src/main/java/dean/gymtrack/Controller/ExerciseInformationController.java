package dean.gymtrack.Controller;


import dean.gymtrack.Entity.ExerciseInformation;
import dean.gymtrack.Repository.JpaExerciseInformationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/exercise-information" , produces="application/json")
public class ExerciseInformationController {
    private final JpaExerciseInformationRepository jpaExerciseInformationRepository;

    ExerciseInformationController(JpaExerciseInformationRepository jpaExerciseInformationRepository){
        this.jpaExerciseInformationRepository = jpaExerciseInformationRepository;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ExerciseInformation>>getAllExerciseInformation(){
        return new ResponseEntity<>(jpaExerciseInformationRepository.findAll(), HttpStatus.OK);
    }
}
