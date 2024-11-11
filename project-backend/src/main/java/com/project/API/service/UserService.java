package com.project.API.service;
import com.project.API.model.User;
import com.project.API.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository repository;

    @Override
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    public User findByEmailAndPassword(String email, String password) {
        User user = repository.findByEmail(email);
        if (user != null) {
            System.out.println("User found: " + user.toString());
            if (user.getPassword().equals(password)) {
                return user;
            } else {
                System.out.println("Password does not match.");
            }
        } else {
            System.out.println("User not found with email: " + email);
        }
        return null;
    }

}

