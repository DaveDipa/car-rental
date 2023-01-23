package com.car_rental.car_rental.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.services.CarService;

@RestController
@RequestMapping("/api/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping("/all")
    public List<Car> findAll(){
        return carService.findAll();
    }
    
}
