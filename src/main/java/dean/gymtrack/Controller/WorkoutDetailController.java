package dean.gymtrack.Controller;


import dean.gymtrack.Entity.WorkoutDetail;
import dean.gymtrack.Repository.JpaWorkoutDetailRepository;
import dean.gymtrack.service.TrainingIdGenerator;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log
@RestController()
@RequestMapping(path="/workout-detail" , produces="application/json")
public class WorkoutDetailController {

    private final JpaWorkoutDetailRepository jpaWorkoutDetailRepository;
    private final TrainingIdGenerator trainingIdGenerator;

    public WorkoutDetailController(JpaWorkoutDetailRepository jpaWorkoutDetailRepository, TrainingIdGenerator trainingIdGenerator){
        this.jpaWorkoutDetailRepository =jpaWorkoutDetailRepository;
        this.trainingIdGenerator = trainingIdGenerator;
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutDetail> getWorkoutDetailById(@PathVariable("id") String id){
        log.info("id is " + id);
        log.info("id get from database is " + jpaWorkoutDetailRepository.getReferenceById(id));

        WorkoutDetail test = jpaWorkoutDetailRepository.getReferenceById(id);

        log.info("id get from database is two : " + test.getWorkoutDetailId());

        return new ResponseEntity<>(jpaWorkoutDetailRepository.getReferenceById(id), HttpStatus.OK) ;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkoutDetailById(@PathVariable("id") String id){
        log.info("id is " + id);
        log.info("id get from database is " + jpaWorkoutDetailRepository.getReferenceById(id));
        jpaWorkoutDetailRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK) ;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<WorkoutDetail>> getWorkoutDetailById(){
        return new ResponseEntity<>(jpaWorkoutDetailRepository.findAll(),HttpStatus.OK);
    }

    @PostMapping(path="/put-workout",consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public WorkoutDetail postWorkoutDetail(@RequestBody WorkoutDetail workoutDetail){
        workoutDetail.setWorkoutDetailId(trainingIdGenerator.generateId());
        return jpaWorkoutDetailRepository.save(workoutDetail);
    }

}
