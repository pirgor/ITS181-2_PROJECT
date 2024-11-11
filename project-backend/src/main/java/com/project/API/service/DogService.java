package com.project.API.service;

import com.project.API.model.Dog;
import com.project.API.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogService implements IDogService{
    @Autowired
    private DogRepository repository;

    @Override
    public List<Dog> getDogs() {
        return (List<Dog>) repository.findAll();
    }

    @Override
    public Dog getDog(long id){
        Optional optional = repository.findById(id);
        if(optional.isEmpty())
            return null;
        else
            return (Dog) optional.get();
    }

    @Override
    public Dog addDog(Dog dog) {return repository.save(dog);}

    @Override
    public Dog updateDog(long id, Dog updatedDog) {
        Optional<Dog> dogOptional = repository.findById(id);
        if (dogOptional.isPresent()) {
            Dog dog = dogOptional.get();

            dog.setName(updatedDog.getName());
            dog.setBreed(updatedDog.getBreed());
            dog.setGender(updatedDog.getGender());
            dog.setImg(updatedDog.getImg());
            dog.setAge(updatedDog.getAge());

            return repository.save(dog);
        } else {
            throw new RuntimeException("Dog not found with id " + id);
        }
    }

    @Override
    public Dog deleteDog(long id) {
        Optional<Dog> dog = repository.findById(id);
        if (dog.isPresent()){
            repository.delete(dog.get());
        } else{
            return null;
        }
        return null;
    }
}
