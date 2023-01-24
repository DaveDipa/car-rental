package com.car_rental.car_rental.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.car_rental.car_rental.models.User;
import com.car_rental.car_rental.repositories.UserRepo;

@Service
public class UserService {

    


    @Autowired
     UserRepo userRepo;

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public User findById(Long id) {
        return userRepo.findById(id).get();
    }

    public User save(User user) {
        return userRepo.save(user);
    }
    


}
