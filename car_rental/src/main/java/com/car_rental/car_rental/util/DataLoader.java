package com.car_rental.car_rental.util;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.models.Order;
import com.car_rental.car_rental.models.User;
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

        User u1 = new User("AAA123", "Carlo", "Rossi", "rossi.c@email.com");
        User u2 = new User("BBB123", "Giulio", "Cesare", "cesare@email.com");
        User u3 = new User("CCC123", "Francesco", "Verdi", "francescoverdi@email.com");
        User u4 = new User("DDD123", "Piero", "Pieri", "pieri_p@email.com");

        Order o1 = new Order(001, LocalDate.of(2022, 12, 26), c1, u1);
        Order o2 = new Order(002, LocalDate.of(2023, 01, 30), c2, u2);
        Order o3 = new Order(003, LocalDate.of(2023, 02, 13), c3, u3);
        Order o4 = new Order(004, LocalDate.of(2023, 03, 28), c4, u4);

        List<Order> orders = new ArrayList<>();
        orders.add(o1);
        orders.add(o2);
        orders.add(o3);
        orders.add(o4);

        orderService.save(o1);
        orderService.save(o2);
        orderService.save(o3);
        orderService.save(o4);

        System.out.println("Application Started");

    }

}
