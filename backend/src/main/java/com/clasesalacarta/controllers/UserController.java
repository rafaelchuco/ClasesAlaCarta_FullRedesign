
package com.clasesalacarta.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody Map<String, Object> userData) {
        // Simulating user registration
        System.out.println("User data: " + userData);

        // Response simulation
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        return response;
    }
}
