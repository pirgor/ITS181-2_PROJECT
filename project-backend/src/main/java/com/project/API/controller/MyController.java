package com.project.API.controller;

import com.project.API.model.Dog;
import com.project.API.service.IDogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MyController {

    @Autowired
    private IDogService dogService;

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
