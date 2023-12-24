package dean.gymtrack.Repository;

import dean.gymtrack.Entity.GymUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaGymUserRepository extends JpaRepository<GymUser, Integer> {
    GymUser findByUsername(String username);
}
