package dean.gymtrack.Controller;


import dean.gymtrack.Entity.WorkoutDetail;
import dean.gymtrack.Repository.JpaWorkoutDetailRepository;
import lombok.Data;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@Log
@RestController()
@RequestMapping(path="/workout-detail" , produces="application/json")
public class WorkoutDetailController {

    private JpaWorkoutDetailRepository jpaWorkoutDetailRepository;

    public WorkoutDetailController(JpaWorkoutDetailRepository jpaWorkoutDetailRepository){
        this.jpaWorkoutDetailRepository =jpaWorkoutDetailRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutDetail> getWorkoutDetailById(@PathVariable("id") String id){
        log.info("id is " + id);
        log.info("id get from database is " + jpaWorkoutDetailRepository.getReferenceById(id));

        WorkoutDetail test = jpaWorkoutDetailRepository.getReferenceById(id);

        log.info("id get from database is two : " + test.getWorkoutDetailId());

        return new ResponseEntity<>(jpaWorkoutDetailRepository.getReferenceById(id), HttpStatus.OK) ;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<WorkoutDetail>> getWorkoutDetailById(){
        return new ResponseEntity<>(jpaWorkoutDetailRepository.findAll(),HttpStatus.OK);
    }

    @PostMapping(path="/put-workout",consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public WorkoutDetail postWorkoutDetail(@RequestBody WorkoutDetail workoutDetail){
        return jpaWorkoutDetailRepository.save(workoutDetail);
    }

}
