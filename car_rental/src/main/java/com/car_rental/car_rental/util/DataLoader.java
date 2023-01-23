package com.car_rental.car_rental.util;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.models.Order;
import com.car_rental.car_rental.services.OrderService;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private OrderService orderService;

    @Override
    public void run(String... args) throws Exception {

        Car c1 = new Car("X5", "BMW", 2993);
        Car c2 = new Car("GLE", "Mercedes", 3982);
        Car c3 = new Car("A3", "Audi", 2480);
        Car c4 = new Car("DS7", "DS", 1598);
        Car c5 = new Car("X5", "BMW", 2993);
        Car c6 = new Car("GLE", "Mercedes", 3982);
        Car c7 = new Car("A3", "Audi", 2480);
        Car c8 = new Car("DS7", "DS", 1598);

        Order o1 = new Order(001, LocalDate.of(2022, 12, 28), c1, 125.0);
        Order o2 = new Order(002, LocalDate.of(2023, 01, 30), c2, 200.8);
        Order o3 = new Order(003, LocalDate.of(2023, 02, 13), c3, 199.0);
        Order o4 = new Order(004, LocalDate.of(2023, 03, 28), c4, 275.9);
        Order o5 = new Order(001, LocalDate.of(2022, 12, 28), c5, 125.0);
        Order o6 = new Order(002, LocalDate.of(2023, 01, 30), c6, 200.8);
        Order o7 = new Order(003, LocalDate.of(2023, 02, 13), c7, 199.0);
        Order o8 = new Order(004, LocalDate.of(2023, 03, 28), c8, 275.9);

        orderService.save(o1);
        orderService.save(o2);
        orderService.save(o3);
        orderService.save(o4);
        orderService.save(o5);
        orderService.save(o6);
        orderService.save(o7);
        orderService.save(o8);

        System.out.println("Application Started");

    }

}
