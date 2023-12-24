package dean.gymtrack.Controller;

import dean.gymtrack.service.GymUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GymUserController {
    @Autowired
    private GymUserService gymUserService;

    @RequestMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password){
        boolean isAuthenticated = gymUserService.authenticate(username, password);
        return isAuthenticated ? "forward:/":"Error page";
    }
}
