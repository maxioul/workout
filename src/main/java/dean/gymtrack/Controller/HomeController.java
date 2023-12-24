package dean.gymtrack.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = "/gymtrack")
    public String forward(){
        return "forward:/";
    }
}
