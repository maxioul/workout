package dean.gymtrack.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import jakarta.persistence.Id;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@Table(name = "exercise_information")
public class ExerciseInformation {
    @Id
    @Column(name = "exerciseName", nullable = false, length = 255)
    @NonNull
    private String exerciseName;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
