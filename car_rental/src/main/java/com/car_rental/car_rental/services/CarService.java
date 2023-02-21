package com.car_rental.car_rental.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.repositories.CarRepo;

@Service
public class CarService {

    @Autowired
    CarRepo carRepo;

    public List<Car> findAll() {
        return carRepo.findAll();
    }

    public Car findById(Long id) {
        return carRepo.findById(id).get();
    }

    public Car save(Car car) {
        return carRepo.save(car);
    }

    public List<Double> findPrice(){
        return carRepo.findPrice();
    }

    
   
}
