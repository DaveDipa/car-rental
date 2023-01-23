package com.car_rental.car_rental.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car_rental.car_rental.models.Car;

public interface CarRepo extends JpaRepository<Car, Long> {
    
}
