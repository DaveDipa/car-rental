package com.car_rental.car_rental.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


import com.car_rental.car_rental.models.Car;

public interface CarRepo extends JpaRepository<Car, Long> {
    
    @Query
    (value = "SELECT price FROM car", nativeQuery = true)
    List<Double> findPrice();
 
}
