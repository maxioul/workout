package dean.gymtrack.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;
import jakarta.persistence.Id;

import java.util.List;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@Table(name = "users")
public class GymUser {
    @Id
    @NonNull
    private Integer userId;
    @NonNull
    private String username;
    @NonNull
    private String password;

    @OneToMany(mappedBy = "user")
    private List<WorkoutDetail> workoutDetails;
}
