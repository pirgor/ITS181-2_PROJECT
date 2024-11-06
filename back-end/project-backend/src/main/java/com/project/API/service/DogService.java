package com.project.API.service;

import com.project.API.model.Dog;
import com.project.API.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogService implements IDogService {
    @Autowired
    private DogRepository repository;

    public List<Dog> getCountries() {
        return (List<Dog>) repository.findAll();
    }

    //add Methods Here
}
