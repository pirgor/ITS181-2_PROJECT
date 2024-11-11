package com.project.API.service;

import com.project.API.model.Dog;

import java.util.List;

public interface IDogService {
    List<Dog> getDogs();

    Dog getDog(long id);

    Dog addDog(Dog dog);

    Dog updateDog(long id, Dog updatedDog);

    Dog deleteDog(long id);
}
