package com.car_rental.car_rental.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car_rental.car_rental.models.User;

public interface UserRepo extends JpaRepository<User, Long>{
    
}
