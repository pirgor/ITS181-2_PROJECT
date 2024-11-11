package com.project.API.service;

import com.project.API.model.User;

import java.util.List;

public interface IUserService {
    List<User> findAll();

    User findByEmailAndPassword(String email, String password);
}
