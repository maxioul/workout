package dean.gymtrack.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class WorkoutDetail {

    @Id
    private String workoutDetailId;

    @NonNull
    private String exerciseName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private GymUser user;

    @DateTimeFormat
    @NonNull
    private Date workoutDate;

    @NonNull
    private Integer sets;

    @NonNull
    private Integer reps;

    @NonNull
    private Integer weight;

    private String Notes;

}
