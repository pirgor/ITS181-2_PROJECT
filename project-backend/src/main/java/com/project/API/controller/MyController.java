package com.project.API.controller;

import com.project.API.model.Dog;
import com.project.API.model.User;
import com.project.API.service.IDogService;
import com.project.API.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MyController {

    @Autowired
    private IDogService dogService;

    @Autowired
    private IUserService userService;

    //Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest, HttpSession session) {
        User user = userService.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if (user != null) {
            session.setAttribute("loggedInUser", user);
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    // Get all dogs
    @GetMapping("/dogs")
    public List<Dog> findDogs() {
        return dogService.getDogs();
    }

    // Get by ID
    @GetMapping("/adopt/{id}")
    public Dog showDog(@PathVariable long id) {
        return dogService.getDog(id);
    }

    // Add Dog
    @PostMapping("/add-dog")
    public Dog addDog(@RequestBody Dog dog) {
        return dogService.addDog(dog);
    }

    // Update Dog
    @PutMapping("/update/{id}")
    public Dog updateDog(@PathVariable long id, @RequestBody Dog updatedDog) {
        return dogService.updateDog(id, updatedDog);
    }

    // Delete By ID
    @DeleteMapping("/delete/{id}")
    public void deleteDog(@PathVariable long id) {
        dogService.deleteDog(id);
    }

}
