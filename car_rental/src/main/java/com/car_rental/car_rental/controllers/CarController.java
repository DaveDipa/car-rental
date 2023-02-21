package com.car_rental.car_rental.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public Car findById(@PathVariable Long id){
        return carService.findById(id);
    }
    
    @GetMapping("/price")
    public List<Double> findPrice(){
        return carService.findPrice();
    }
}
