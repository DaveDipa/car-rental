package com.car_rental.car_rental.controllers;

import java.time.LocalDate;
import java.time.Period;
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

    @PostMapping("/save")
    public Order save(@RequestBody OrderRequestBody orderRequest) {

        Car orderedCar = carService.findById(orderRequest.getCar());
        System.out.println(orderedCar.toString());


        LocalDate today = LocalDate.now();

        // CHECK DATA MAGGIORE DI QUELLA ODIERNA
        if (orderRequest.getRentalDateStart().isBefore(today)) {
            System.out.println("non è possibile prenotare una vettura con data minore a quella ordierna");
            return null;
        }

        // TROVA GIORNI DI AFFITTO PER CALCOLARE IL PREZZO TOTALE
        LocalDate from = orderRequest.getRentalDateStart();
        LocalDate to = orderRequest.getRentalDateEnd();

        Period period = Period.between(from, to);

        Double price = orderedCar.getPrice();

        System.out.println(period.getDays() + " giorni di affitto");

        Double totalPrice = price * period.getDays();// CALCOLO TOTALE COSTO

        System.out.println("prezzo totale affitto: " + totalPrice + " EURO");

        // CHECK DISPONIBILITA AUTO
        List<Order> orderFound = orderService.checkCarOrder(orderedCar.getId(), orderRequest.getRentalDateStart(),
                orderRequest.getRentalDateEnd());

        Order newOrder = null;

        if (orderFound.isEmpty()) {//oggetto 

            newOrder = orderService.save(new Order(orderRequest.getRentalDateStart(), orderRequest.getRentalDateEnd(),
                    orderedCar));

            System.out.println("nuovo ordine salvato, id automobile: " + orderRequest.getCar());

        } else {
            System.out.println("auto già prenotata in questo periodo");
        }

        return newOrder;
    }

}
