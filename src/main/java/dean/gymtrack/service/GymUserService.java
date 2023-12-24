package dean.gymtrack.service;

import dean.gymtrack.Entity.GymUser;
import dean.gymtrack.Repository.JpaGymUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GymUserService {
    @Autowired
    private JpaGymUserRepository jpaGymUserRepository;
    public boolean authenticate(String username, String password){
        GymUser user = jpaGymUserRepository.findByUsername(username);
        if(user!=null&&user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
