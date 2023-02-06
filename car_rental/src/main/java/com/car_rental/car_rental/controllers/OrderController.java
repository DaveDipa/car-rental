package com.car_rental.car_rental.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.models.Order;
import com.car_rental.car_rental.services.CarService;
import com.car_rental.car_rental.services.OrderService;
import com.car_rental.car_rental.util.OrderRequestBody;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    CarService carService;

    @GetMapping("/all")
    public List<Order> findAll() {
        return orderService.findAll();
    }

    //TODO implementare controlli per validare ordine o generare errore
    @PostMapping("/save")
    public Order save(@RequestBody OrderRequestBody orderRequest) {

        Car orderCar = carService.findById(orderRequest.getCar());
        System.out.println(orderCar.toString());
        return orderService.save(new Order(orderRequest.getRentalDateStart(), orderRequest.getRentalDateEnd(), orderCar));
    }

}
